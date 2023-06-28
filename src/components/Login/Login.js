import { Formik } from 'formik'
import * as yup from 'yup'
import './Login.css'
import { IMAGES } from '../../img'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    const navigate = useNavigate()
    const validationSchema_log = yup.object().shape({
        email: yup.string().email('Incorrect Email').required('Is mandatory'),
        password: yup.string().typeError('Must be String').required('Is mandatory')
    })

    const handleClickGoReg = () => {
        navigate('/auth/registre')
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }} 

            validateOnBlur

            onSubmit={(values) => {
                console.log(values)}

            }

            
            validationSchema={validationSchema_log}
            
            >
                

            {
                 ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (

                    <form onSubmit={handleSubmit} className='form_log' >
                        <img src={IMAGES.login} />

                        <div className='input_div_log_1'>
                            <input className='input'
                                type={'email'}
                                name={'email'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder='Email'
                            />

                            {touched.email && errors.email && <p style={{color: 'red', marginRight: '-450px', marginTop: '-33px',}} className='error'>{errors.email}</p>}
                        </div>

                        <div className='input_div_log_2'>
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

                        <div className='goReg_div'>
                            <a onClick={handleClickGoReg}>Do not have account?</a><br/>
                            <img src={IMAGES.small_reg} width={40} />

                        </div>
                        
                            <button
                                    className='sub_btn'
                                    disabled={!isValid && !dirty}
                            ><img src={IMAGES.log_btn} width={80} /></button>
                    </form>
                    
                )
            }

        </Formik>
    )
}

export default LogIn




// import { Formik } from 'formik'
// import './Login.css'
// import * as yup from 'yup'
// const Login = () => {
//     const validationSchema = yup.object().shape({
//         username: yup.string().typeError('Must be text').required('Is required'),
//         password: yup.string().typeError('Must be text or number').required('Is required')
//     })
//   return (
//     <Formik
//         initialValues={{
//             username: '',
//             password: ''
//         }}

//         onSubmit={(values) => {
//             console.log(values);
//         }}

//         validateOnBlur

//         validationSchema={validationSchema}
//     >

//         {
//             ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (

//                 <form className='form' onSubmit={handleSubmit}>

//                     {/* <span className='sign_in'>Sign in</span> */}

//                     <div className='log_div'>
//                         <input
//                             className='log_input'
//                             type='text'
//                             name='name'
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.username}
//                             placeholder='Username'
//                         />
//                         <div className='cut'></div>
//                         {/* <label htmlFor='name' className='placeholder'></label> */}
//                         {touched.name && errors.name && <span className='error'>{errors.name}</span>}
//                     </div>
                    

//                     <div>
//                         <input
//                             className='log_input'
//                             type='text'
//                             name='password'
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.password}
//                             placeholder='Password'
//                         />

//                         <div className='cut'></div>

//                         {touched.password && errors.password && <span>{errors.password}</span>}

//                     </div>

//                     <div>
//                         <button
//                             className='sub_btn'
//                             disabled={!isValid || !dirty}
//                         >Sign in</button>
//                     </div>



//                 </form>
//             )
//         }

//     </Formik>
//   )
// }

// export default Login