import React, {useState} from 'react';
import './Login.css'

const Login = (key, value) => {
    const [getLogin, setLogin] = useState({
        userName: '',
        password: '',
    })
    const handleLogin = () => {
        const loginData  =  localStorage.getItem("LoginInfo")
        const result =  JSON.parse(loginData)

        if(result !==  null){
            if(result.userName  !== getLogin.userName){
                alert("Username doesn't exists")
            }
            else  if(result.password  !== getLogin.password){
                alert("Password incorrect")
            }
            else {
                window.location.href = '/list'
                localStorage.setItem("Token", true)
            }
        }
        else alert("Please Create an account first")
    }
    const handleChange = (e) => {
        const {value, name} = e.target;
        setLogin(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <div className="login-form">
            <form className='container'>
                <h2 className="text-center">Log in</h2>
                <div className="form-group">
                    <input onChange={handleChange} name='userName' type="text" className="form-control"
                           placeholder="Username" required="required"/>
                </div>
                <div className="form-group">
                    <input onChange={handleChange} name='password' type="password" className="form-control"
                           placeholder="Password" required="required"/>
                </div>
                <div className="form-group">
                    <button onClick={handleLogin} type="button" className="btn btn-primary btn-block">Log in</button>
                </div>
            </form>
            <p className="text-center"><a href="/signup">Create an Account</a></p>
        </div>
    );
};

export default Login;