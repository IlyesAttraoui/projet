import React from 'react';
import login from './login.css';

function Login() {
  return (

 <div className="container">


    <div className="forme">
    <div className='iconn'><i class="fas fa-user-md"></i></div>



<div className='right'>
     <form >
          <h1> easydoc </h1>
           <div className="inputwithicone">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="user name" id ="name" name=""/>
            </div>
            <div className="inputwithicon">
             <i class="fas fa-lock"></i>
             <input type="password" placeholder="password" id ="psw" name=""/>
             </div>

            <div className="control">
            <input type="submit" value="login" />
            </div>
        </form>
        </div>
        </div>
  </div>





  );
}

export default Login;
