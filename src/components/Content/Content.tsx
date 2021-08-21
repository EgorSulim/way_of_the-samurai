import classes from './Content.module.css'
import {MyPost} from "./MyPosts/MyPost";

export const Content = () => {
    return (
        <div className={classes.Content}>
            <div><img src="https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_960_720.jpg" alt=""/></div>
            <MyPost/>
        </div>
    )
}

