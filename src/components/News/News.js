import clasess from './News.module.css';
import NewPost from "./NewsPost/NewPost";
import NewLinkBtn from "./NewLinkBtn/NewLinkBtn";
import {Route} from "react-router-dom";
import CreatePost from "./CreatePost/CreatePost";

const News = ({newsPage,addNewsPost, changeNewsBody, changeNewsHeader}) => {


const{news, newMessage} = newsPage;
    let newPost =news.map(post => {
        return (
            <NewPost
            id={post.id}
            header={post.header}
            newsBody={post.newsBody}
            />
        )
    })

    return (
       <div className={clasess.wrapper}>
            <div className={clasess.wrapperHeader}>
                <h1 className={clasess.header}>News</h1>
                <NewLinkBtn/>
            </div>
           <div className={clasess.bodyNews}>
               <Route path='/News/news' render={() => newPost  }/>
               <Route path="/News/add_news" render={() => <CreatePost
                   changeNewsHeader={changeNewsHeader}
                   changeNewsBody={changeNewsBody}
                   addNewsPost={addNewsPost}
                   newMessage={newMessage}
               />}/>
           </div>


       </div>

    )

}
export default News;