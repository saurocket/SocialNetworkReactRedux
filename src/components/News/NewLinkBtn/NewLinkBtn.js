import  clasess from './NewLinkBtn.module.css'
import {NavLink} from "react-router-dom";



const NewLinkBtn = () => {
    return (
        <div className={clasess.wrapper}>
            <div className={clasess.btn}>
                <NavLink to="/News/news">News</NavLink>
            </div>

            <div className={clasess.btn}>
                <NavLink to="/News/add_news">Add</NavLink>
            </div  >

        </div>
    )
}
export default NewLinkBtn;