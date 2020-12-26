export function Page() {
  return <div>Page: account contract</div>
}

export default function WrappedPage(props) {
  return <Page {...props} />
}
