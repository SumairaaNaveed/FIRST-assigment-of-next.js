 import styles from "../about/about.module.css";
 import Link from "next/link";
    
 const Aboutpage = () => {
    return (
        <div className= {styles.container}>
            
        <h1 className={styles.header}>This is about page</h1>
        <ul>
        <li><Link href="/">Go to Home page</Link></li>
          <li><Link href="/contact">Go to Contact page</Link></li>
          <li><Link href="/service">Go to Service page</Link></li>




         </ul>



        </div>
    )
 }
 export default Aboutpage