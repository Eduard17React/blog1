
import './Login.css'
import { IMAGES } from '../../img'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import customAxios from '../../axios'

const LogIn = ({currentUser, setCurrentUser}) => {
    
    const navigate = useNavigate()
    const formRef = useRef(null)

    useEffect(() => {
        if(currentUser){
            navigate('/')
        }
      }, [currentUser])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const [{value: login}, {value: password}] = formRef.current

        const { data } = await customAxios.get(`/users?email=${login}&password=${password}`)
        if(data.length){
            setCurrentUser({...data.at(0)})
        }else{
            console.log('error');
        }

        formRef.current.reset()
    }
   

    const handleClickGoReg = () => {
        navigate('/auth/registre')
    }

    return (

        <form ref={formRef} onSubmit={handleSubmit} className='form_log' >
            <img src={IMAGES.login} />

            <div className='input_div_log_1'>
                <input placeholder='Email' className='input'/>
            </div>

            <div className='input_div_log_2'>
                <input placeholder='Password'/>
            </div>

            <div className='goReg_div'>
                <a onClick={handleClickGoReg}>Do not have account?</a><br/>
                <img src={IMAGES.small_reg} width={40} />
            </div>
                        
            <button className='sub_btn'><img src={IMAGES.log_btn} width={80} /></button>

        </form>
                    
    )
}

    


export default LogIn
