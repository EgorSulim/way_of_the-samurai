import {Post} from "./Post/Post";


export const MyPost = () => {
    return (
        <div><a href=''>My post</a>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='hi' likesCount={12}/>
            <Post message='learn js!' likesCount={13}/>


        </div>
    )
}