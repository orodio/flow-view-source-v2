export function Page() {
  return <div>Page: events</div>
}

export default function WrappedPage(props) {
  return <Page {...props} />
}
