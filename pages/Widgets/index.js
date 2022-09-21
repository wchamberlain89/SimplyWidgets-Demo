import Link from 'next/link'

const WidgetsPage = ({ widgets }) => {
    return (
        <div>
            <h1>Widgets Page</h1>
            <ul>
                {widgets.map(widget => <li key={widget.id}><Link href={`/Widgets/${widget.id}`}>{widget.title ? widget.title : "no title"}</Link></li>)}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://simple-json-widget-db.herokuapp.com/widgets")
    const widgets = await res.json()
    return {
      props : {
        widgets
      }
    }
}

export default WidgetsPage