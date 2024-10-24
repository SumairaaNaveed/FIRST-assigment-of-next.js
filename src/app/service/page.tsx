import Link from 'next/link'
import style from "../service/service.module.css"

const servicepage = () => {
    return (
        <div className= {style.container}>
            <h1 className= {style.header}> This is service page</h1>

            <ul className={style.list}>


            
                <li><Link href="/service/video_editing">This is video editing page </Link></li>

            </ul>



        </div>
         

        
    )
}

export default servicepage