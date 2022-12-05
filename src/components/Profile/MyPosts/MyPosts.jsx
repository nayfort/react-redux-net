import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElements =
        props.posts.map((p,index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //console.log('text:', text)
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>
    );
};

export default MyPosts;