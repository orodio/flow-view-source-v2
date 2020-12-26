import {Suspense} from "react"
import {useCurrentUser} from "../hooks/use-current-user"
import {useAccount} from "../hooks/use-account"
import {Link} from "react-router-dom"

export function WithAuth() {
  const user = useCurrentUser()
  if (!user.loggedIn) return null

  return (
    <div>
      <Link to={`/account/${user.addr}`}>{user.addr}</Link>
      <button onClick={user.logout}>Log Out</button>
    </div>
  )
}

export function SansAuth() {
  const user = useCurrentUser()
  if (user.loggedIn) return null

  return (
    <div>
      <button onClick={user.login}>Log In</button>
    </div>
  )
}

export function CurrentUserAccount() {
  const user = useCurrentUser()
  const acct = useAccount(user.addr)

  return <pre>{JSON.stringify(acct, null, 2)}</pre>
}

export function Page() {
  return (
    <>
      <SansAuth />
      <WithAuth />
      <CurrentUserAccount />
    </>
  )
}

export default function WrappedPage(props) {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Page {...props} />
    </Suspense>
  )
}
