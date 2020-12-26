import {useParams} from "react-router-dom"

export function Page() {
  const {address} = useParams()
  return <div>Page: account {address}</div>
}

export default function WrappedPage(props) {
  return <Page {...props} />
}
