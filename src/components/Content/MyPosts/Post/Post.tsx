import classes from './Post.module.css'

type PostType = {
    message: string
    likesCount:number
}


export const Post = (props: PostType) => {
    return (
        <div>
            <div className={classes.Post}>
                <img src="https://cdn.pixabay.com/photo/2020/12/03/05/24/lion-5799526_960_720.jpg" alt=""/>
                <a href="">{props.message}</a>
            </div>
            <div><span>Like</span>{props.likesCount}</div>
        </div>)
}