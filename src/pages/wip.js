import {useCurrentUser} from "../hooks/use-current-user"

export function WithAuth() {
  const user = useCurrentUser()
  if (!user.loggedIn) return null

  return (
    <div>
      <strong>{user.addr}</strong>
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

export function Page() {
  return (
    <>
      <SansAuth />
      <WithAuth />
    </>
  )
}

export default function WrappedPage(props) {
  return <Page {...props} />
}
