export function Page() {
  return <div>Page: Stars</div>
}

export default function WrappedPage(props) {
  return <Page {...props} />
}
