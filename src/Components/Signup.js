import React,{useState} from 'react'
import { auth,fs } from '../Config/Config';
import { Link  } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export  const Signup = () => {

  const history = useHistory();

      const [fullName, setFullName]=useState('');
      const [email, setEmail]=useState('');
      const [password,setPassword]=useState('');

      const [errorMsg, setErrorMsg]=useState('');
      const [successMsg, setSuccessMsg]=useState('');

      const handleSignup=(e)=>{
        e.preventDefault();
       /*  console.log(fullName,email,password); */
       auth.createUserWithEmailAndPassword(email, password).then((Credentials)=>{
         console.log(Credentials);
         fs.collection('users').doc(Credentials.user.uid).set({
           FullName:fullName,
           Email:email,
           Password:password

         }).then(()=>{
           setSuccessMsg('Signup Successfull. You will now automatically get redirected to Login')
           setFullName('');
           setEmail('');
           setPassword('');
           setErrorMsg('');
           setTimeout(()=>{
                setSuccessMsg('');
                history.push('/login');
           },3000)
         }).catch(error=>setErrorMsg(error.message))
       }).catch((error)=>{
         setErrorMsg(error.message)
       })
      }


  return (
    <div className='container'>
      <br></br>
      <br></br>
      <h1>Sign Up</h1>
      <hr></hr>
      {successMsg&&<>
        <div className='success-msg'>{successMsg}</div>
        <br></br>
      </>}
      <form className='form-group' autoComplete='off' onSubmit={handleSignup}>
          <label>Full Name</label>
          <input type='text' className='form-control' required placeholder='Your Name' onChange={(e)=>setFullName(e.target.value)} value={fullName}></input>
          <br></br>
          <label>Email</label>
          <input type='email' className='form-control' required placeholder='Email address' onChange={(e)=>setEmail(e.target.value)} value={email}></input>
          <br></br>
          <label>Password</label>
          <input type='password' className='form-control' required placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}></input>
          <br></br>
              <button type='submit' className='btn btn-success btn-md mybtn'>Sign Up</button>
              <br></br>
              <br></br>
          <div className='btn-box'>
            <span>Already have an account Login
              <Link to="login" className='link'>Here</Link>
            </span>
          </div>

      </form>
      {errorMsg&&<>
        <br></br>
        <div className='error-msg'>{errorMsg}</div>
      </>}
    </div>
  )
}

export default Signup
