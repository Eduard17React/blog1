import { useRef } from 'react'
import './NewPosts.css'
import { IMAGES } from '../../img'
import customAxios from '../../axios'
import { useNavigate } from 'react-router-dom'

const NewPosts = ({ currentUser }) => {
  const navigate = useNavigate()
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: currentUser.id,
      author: currentUser.name,
      title: formRef.current[0].value,
      body: formRef.current[1].value
    }

    try {
      const res = await customAxios.post('/posts', newPost)
      console.log(res);
      navigate('/myposts')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form className='new_post_form' ref={formRef} onSubmit={handleSubmit}>
      <input required placeholder='Title' />
      <textarea placeholder='Text about' cols="30" rows="5"></textarea>
      <button className='add_btn'><img src={IMAGES.add_btn} width={100} /></button>
    </form>
  )
}

export default NewPosts