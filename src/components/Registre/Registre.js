import { Formik } from 'formik'
import * as yup from 'yup'
import './Registre.css'
import { useNavigate } from 'react-router-dom'
import { IMAGES } from '../../img'
import customAxios from '../../axios'


const RegForm = () => {
    const navigate = useNavigate()

    const validationSchema = yup.object().shape({
        name: yup.string().typeError('Must be String').required('Is mandatory'),
        email: yup.string().email('Incorrect email').required('Is mandatory'),
        password: yup.string().typeError('Must be String').required('Is mandatory'),
        confirmPassword: yup.string().typeError('Must be String').oneOf([yup.ref('password')], 'Passwords do not match').required('Is mandatory'),
    })


    const handleClickHome = () => {
        navigate('/')
    }


    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }} 

            validateOnBlur

            onSubmit={ async (values, { resetForm }) => {
                try {
                    const res = await customAxios.post('/users', values)
                    resetForm()
                    navigate('/auth/login')
                    // console.log(res)
                } catch (error) {
                    console.log(error)
                    
                }
                 
            }}
            
            validationSchema={validationSchema}
            
            >

                
            
            {
                ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    
                    <form onSubmit={handleSubmit} className='form' >
                        <span className='goHome' onClick={handleClickHome}><img src={IMAGES.logo} width={100} /></span>
                        <img src={IMAGES.reg} />

                        <div className='input_div_1'>
                            <input className='input'
                                type={'text'}
                                name={'name'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                placeholder='Name'
                            />

                            {touched.name && errors.name && <p style={{color: 'red', marginRight: '-450px', marginTop: '-33px',}} className='error'>{errors.name}</p>}
                        </div>

                        <div className='input_div_2'>
                            <input
                               type={'text'}
                               name={'email'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.email}
                               placeholder='Email' 
                            />

                            {touched.email && errors.email && <p style={{color: 'red', marginRight: '-450px', marginTop: '-33px',}} className='error'>{errors.email}</p>}
                        </div>

                        <div className='input_div_3'>
                            <input
                               type={'password'}
                               name={'password'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.password}
                               placeholder='Password' 
                            />

                            {touched.password && errors.password && <p style={{color: 'red', marginRight: '-450px', marginTop: '-33px',}} className='error'>{errors.password}</p>}
                        </div>

                        <div className='input_div_4'>
                            <input
                               type={'password'}
                               name={'confirmPassword'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.confirmPassword}
                               placeholder='Confirm Password' 
                            /> <br/>

                            {touched.confirmPassword && errors.confirmPassword && <p style={{color: 'red', marginRight: '-500px', marginTop: '-33px',}} className='error'>{errors.confirmPassword}</p>}
                        </div>
                        
                            <button
                                    className='sub_btn'
                                    disabled={!isValid && !dirty}
                            ><img src={IMAGES.reg_btn} width={180} /></button>
                    </form>
                    
                )
            }
            
        </Formik>
    )
}


export default RegForm