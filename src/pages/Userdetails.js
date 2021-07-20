import React, { useState, useEffect } from 'react'
import Details from '../components/Details/Details'
import Posts from '../components/Posts/Posts'
import Laoder from '../components/Utils/Laoder'
import { getUsersDetails, getPosts } from '../api/users'

function Userdetails({ match }) {
    const [details, setDetails] = useState("")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchDetails = async () => {
            const userDetails = await getUsersDetails(match.params.id);
            if (userDetails) {
                setDetails(userDetails)
            }
        }
        const fetchPosts = async () => {
            const userPosts = await getPosts(match.params.id);
            if (userPosts) {
                setPosts(userPosts)
            }
        }
        fetchDetails()
        fetchPosts()
    }, [match])

    return (
        <>
            <div className="container user-details__breadcrumb py-3">
                <div className="row">
                    <div className="col-12 user-details__breadcrumb">
                        <a href="/" className="text-info text-decoration-none"><strong>User</strong></a>
                        <p href="/" className="d-inline m-0"><strong> > {details.name}</strong></p>
                    </div>
                </div>
            </div>
            <div className="container mb-3">
                { details ? <Details data={details} /> : <Laoder /> }
            </div>
            <div className="container pt-4">
                {posts.length ? <Posts name={details.name} posts={posts} /> : <Laoder />}
            </div>
        </>
    )
}

export default Userdetails;
