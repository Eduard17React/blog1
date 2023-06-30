import { useEffect, useState } from 'react'
import './Home.css'
import customAxios from '../../axios'
import NewPostHome from '../NewPostHome/NewPostHome'

const Home = ({ currentUser }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const res = customAxios.get('/posts')
                .then(({data}) => {
                  setPosts([...data])
                console.log(data);

                })

  }, [])


  return (
    <div>
      {
        posts.map(post => <NewPostHome
                                  key={post.id}
                                  id={post.id}
                                  title={post.title}
                                  body={post.body.slice(0, post.body.indexOf('.') + 1)}
                                  author={post.author} />)
      }
    </div>
  )
}

export default Home