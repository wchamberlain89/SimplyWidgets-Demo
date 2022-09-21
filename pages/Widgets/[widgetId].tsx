import { useState } from 'react';

function Widget({ widget }: any) {
  const [ count, setCount ] = useState(0);
  return (
    <div className="flex flex-center">
        <h3>{widget.title}</h3>
        <button onClick={() => {setCount(count - 1)}}>-</button>
          <div>{ count }</div>
        <button onClick={() => {setCount(count + 1)}}>+</button>
    </div>
  )
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
    fallback: 'blocking' 
  }
}

export const config = {
  unstable_runtimeJS: false,
};


export default Widget