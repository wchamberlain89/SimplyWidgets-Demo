function Widget({ widget }: any) {
  console.log(widget)
    return <div className="flex flex-center">
      {widget.title}
        <button>-</button>
        <div>0</div>
        <button>+</button>
    </div>
}

export async function getStaticProps(context:any) {
  const { params } = context;
  const res = await fetch(`https://simple-json-widget-db.herokuapp.com/widgets/${params.widgetId}`)
  const widget = await res.json()

  return {
    props: {
      widget,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

export async function getStaticPaths() {
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return {
      paths: [{
        params: {
          widgetId: "1"
        }
      }],
      fallback: 'blocking' }
  }

export default Widget