import './NewPost.css'

const NewPost = ({id, title, body, delItem}) => {
  return (
    <div key={id} className='new_post_div'>
        <h1>{title}</h1>
        <p>{body}</p>
        <div className='btns_div'>
            <button>Edit</button>
            <button onClick={() => delItem(id)}>Delete</button>
        </div>
    </div>
  )
}

export default NewPost