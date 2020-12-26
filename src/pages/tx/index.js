export function Page() {
  return <div>Page: tx</div>
}

export default function WrappedPage(props) {
  return <Page {...props} />
}
