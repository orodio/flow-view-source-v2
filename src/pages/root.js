export function Page() {
  return <div>Page: Root</div>
}

export default function WrappedPage(props) {
  return <Page {...props} />
}
