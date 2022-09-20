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
        widgets.map(widget => <Widget widget={widget}/>)
       }
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch("http:localhost:3001/widgets");
  console.log(res)
  const widgets = await res.json();
  return {
    props : {
      widgets
    }
  }
}

export default Home