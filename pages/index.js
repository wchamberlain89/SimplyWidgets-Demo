import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Widget = ({ widget }) => {
  console.log(widget)
  return (
    <Link href={"/widget"} ><a>{widget && widget.title}</a></Link>
  )
}

const Home = ({ widgets }) => {
  return (
    <div className="flex flex-center">
       {
        widgets.map((widget, index) => <Widget widget={widget} key={index} />)
       }
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch("https://simple-json-widget-db.herokuapp.com/widgets")
  const widgets = await res.json()
  return {
    props : {
      widgets
    }
  }
}

export default Home