import { useEffect, useState } from 'react'
import './MyPosts.css'
import customAxios from '../../axios'
import NewPost from '../NewPost/NewPost'

const MyPosts = ({ currentUser }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    customAxios.get(`/posts?userId=${currentUser.id}`)
                .then(({data}) => {
                  setPosts([...data])
                })
  }, [])

  const delItem = async (id) => {
    try {
      await customAxios.delete(`/posts${id}`)
      setPosts([...posts.filter(post => post.id !== id)])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {
        posts.map(post => <NewPost
                                  key={post.id}
                                  id={post.id}
                                  title={post.title}
                                  body={post.body}
                                  author={post.author}
                                  delItem={delItem} />)
      }
    </div>
  )
}

export default MyPosts