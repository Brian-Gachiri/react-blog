import {useEffect, useState} from "react";
import Article from "./Article";
import Search from "./Search";




const Articles = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {

        const getPosts = async () => {

            const data = await fetchPosts()
            setPosts(data)

        }

        getPosts()
    }, [])

    const fetchPosts = async () => {

        const res = await fetch('http://localhost:5000/posts')
        return await res.json()

    }
    return (
        <div className={'container'}>
            <h1 className={'text-center'}>Articles</h1>
            <Search />
            <div className={'row justify-content-center mt-3'}>
                {posts.map((post) => (
                    <Article key={post.id} article={post}/>
                ))}
            </div>
        </div>
    )
}

export default Articles