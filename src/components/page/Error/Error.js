import { useNavigate } from 'react-router-dom'
import { IMAGES } from '../../../img'
import './Error.css'

const Error = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }
  return (
    <>
        <div className='error_div'>
            <img src={IMAGES.error} />
        </div>
        <div className='white_div_cover'> </div>
        <button onClick={handleClick} className='back_btn_error'>Back to home</button>
    </>
  )
}

export default Error