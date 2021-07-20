import React from 'react'
import './Posts.css'

function Posts(props) {
    const { name, posts } = props;
    return (
        <div className="row">
            <h1 className="user-post__title col-12"><strong>Posts by {name}</strong></h1>
            <div className="user-post__list">
                <ul className="row p-0" data-testid="posts-list">
                    {posts.map(post => {
                        return <li key={post.id} className="user-post__item col-12 col-xl-4" data-testid="posts-list__item">
                            <div className="user-details__posts h-100 pt-3 p-xl-3">
                                <h1 className="card-title h5" data-testid="posts-list__title"><strong>{post.title}</strong></h1>
                                <p data-testid="posts-list__body">{post.body}</p>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Posts;