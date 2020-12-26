export function Page() {
  return <div>Page: About</div>
}

export default function WrappedPage(props) {
  return <Page {...props} />
}
