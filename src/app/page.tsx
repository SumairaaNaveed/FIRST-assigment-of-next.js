import Link from "next/link"

const Homepage = () => {
   return (
      <div>
         <h1 className="bg-red-600">Wellcome to the home page</h1>
         <ul>
          
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about" target="_blank">About</Link></li>
          <li><Link href="/contact" target="_blank">Contact</Link></li>
          <li><Link href="/service">Service</Link></li>


         </ul>
      </div>
   )
}

export default Homepage