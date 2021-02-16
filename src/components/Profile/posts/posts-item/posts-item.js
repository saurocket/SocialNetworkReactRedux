import clasess from './post-item.module.css';
const Post_item = ({messege, like}) => {
    return (
        <div className={clasess.wrapper}>
            <div className={clasess.item}>{messege}</div>  
            <span>like{like}</span>
        </div>
    )
}
export default Post_item;