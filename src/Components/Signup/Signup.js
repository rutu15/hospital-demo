import React, {useState} from 'react';
import "./signup.css"

function Signup(props) {
    const [getSignup, setSignup] = useState({
        userName: '',
        email: '',
        password: ''
    })
    const handleSubmit = () =>{
        localStorage.setItem("LoginInfo",JSON.stringify(getSignup))
        window.location.href = '/'
        console.log("mind")
    }
    const handleChange = e => {
        const {name, value} = e.target;
        setSignup(prevState => ({
            ...prevState,
            [name]: value
        }))

    }
    return (
        <div className="signup-form">
            <form  className="form-horizontal">
                <div className="row">
                    <div className="col-8 offset-4">
                        <h2>Sign Up</h2>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-4">Username</label>
                    <div className="col-8">
                        <input
                            onChange={handleChange}
                            type="text" className="form-control" name="userName" required="required"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-4">Email Address</label>
                    <div className="col-8">
                        <input
                            onChange={handleChange}
                            type="email" className="form-control" name="email" required="required"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-4">Password</label>
                    <div className="col-8">
                        <input onChange={handleChange} type="password" className="form-control" name="password" required="required"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-8 offset-4">
                        <button  onClick={handleSubmit} type="button" className="btn btn-primary btn-lg">Sign Up</button>
                    </div>
                </div>
            </form>
            <div className="text-center">Already have an account? <a href="/">Login here</a></div>
        </div>
    );
}

export default Signup;