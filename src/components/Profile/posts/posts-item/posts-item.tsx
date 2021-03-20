import clasess from './post-item.module.css';
import React from "react";
type PropsType = {
    messege: string
    like: number
    id: number
}
const Post_item:React.FC<PropsType> = ({messege, like, id}) => {
    return (
        <div className={clasess.wrapper} key={id}>
            <div className={clasess.item}>{messege}</div>  
            <span>like{like}</span>
        </div>
    )
}
export default Post_item;