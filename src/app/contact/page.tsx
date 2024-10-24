import Link from 'next/link'
import style from "../contact/contact.module.css";


const Contactpage = () => {
    return (
        <div className ={style.container}>
        <h1 className = {style.header}>contact page</h1>




        <ul>
          
          <li><Link href="/">Go to Home page</Link></li>
          <li><Link href="/about">Go to About page</Link></li>
          <li><Link href="/service">Go to Service page</Link></li>


         </ul>

        </div>
    )
}

export default Contactpage