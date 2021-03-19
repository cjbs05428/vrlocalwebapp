import React from 'react';

//import '../Signin/signin.css';

const Signin = () =>{

        return(
            
            <div className="form_block">
                <form>
                    <h3> Sign-in </h3>
                    <div className="body">

                    <label>UserName</label>
                    <input type="text" className="form-control" placeholder="username"/>
                
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"/>
                </div>

                    <button className="loginBtn">Login</button>
                 </form>
            
            </div>
        
        )
}

export default Signin;