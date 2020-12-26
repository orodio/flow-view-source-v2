export function Page() {
  return <div>Page: Settings</div>
}

export default function WrappedPage(props) {
  return <Page {...props} />
}
