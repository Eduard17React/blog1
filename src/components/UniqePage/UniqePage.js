import { useParams } from 'react-router-dom'
import './UniqePage.css'
import customAxios from '../../axios'
import { useEffect, useState } from 'react'

const UniqePage = ({currentUser}) => {
  const params = useParams()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const res = customAxios.get('/posts')
                .then(({data}) => {
                  setPosts([...data])

                })

  }, [])
// console.log(posts);
  return (
    <>
        {
          posts.map(post => post.userId === currentUser.id ? 
            <div className="more" >
          <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
          : null)
        }
    </>
    
   
  )
}

export default UniqePage