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
  const widgets = [
    {
        "id" : 1,
        "title": "Button 1"
    },
    {
        "id" : 2,
        "title": "Button 2"
    }
  ]
  return {
    props : {
      widgets
    }
  }
}

export default Home