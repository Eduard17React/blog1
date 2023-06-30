import { useEffect } from 'react'
import './NewPostHome.css'
import { useNavigate } from 'react-router-dom'

const NewPostHome = ({id, title, body, author}) => {
    const navigate = useNavigate()
    
    
  return (
    <div className='home_newPost_div' key={id}>
        <h1>{title}</h1>
        <span className='author_span'>Posted by <span className='author'>{author}</span></span>
        <p>{body}</p>
        <button onClick={() => navigate(`/uniqe/uniqepage/${id}`)}>Show all</button>
    </div>
  )
}

export default NewPostHome