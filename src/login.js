import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import image from "./assets/platformholly.jpg"; 


function login() {
  return (
    <div className='gauche login template d-flex justify-content-center align-items-center vh-100' style={{ backgroundImage:`url(${image})` ,backgroundRepeat:"no-repeat",backgroundSize:"contain" ,height:600,width:1400}}>
        <div className = 'droit form_container rounded bg-white'>
            <form>
                <h3 className='text-center'>Sign In</h3>
                <div className='mb-2'>
                    <label htmlFor="name" >Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control' />
                </div>
                <div className='mb-2'>
                    <label htmlFor="password" >Password</label>
                    <input type="password" placeholder='Enter Password' className='form-control' />
                </div>
                <div className='d-grid'>
                    <button className='btn btn-primary btn-lg btn-block'>Sign in</button>
                </div>
                <p className="text-end mt-2" className="mt-2">
                    Forgot<a href ="">Password?</a><a to="/signup" className="ms-2">Sign up</a>
                </p>
            </form>
        </div>
    </div>
  )
}

export default login