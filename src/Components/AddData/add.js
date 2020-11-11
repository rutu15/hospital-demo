import React, {useState} from 'react';
import "./Add.css";
import Header from "../Header/header";
import { v4 as uuidv4 } from 'uuid';

function Add(props) {
    const arr = JSON.parse( localStorage.getItem('PatientInfo') ) || [];
    const [getPtData, setPtData] = useState({
        ptName: '',
        ptAge: 0,
        ptAddress: '',
        ptGender: '',
        id:uuidv4()

    })
    const handleSubmit = () => {
        arr.push({
            getPtData
        });
        localStorage.setItem("PatientInfo", JSON.stringify(arr))
        window.location.href = '/list'
    }
    const handleChange = e => {
        const {name, value} = e.target;
        setPtData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <>
            <Header/>
            <div className="signup-form">

                <form className="form-horizontal">
                    <div className="row">
                        <div className="col-8 offset-4">
                            <h2>Add Patient Information</h2>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-4">Patient Name</label>
                        <div className="col-8">
                            <input
                                onChange={handleChange}
                                type="text" className="form-control" name="ptName" required="required"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-4">Patient Age</label>
                        <div className="col-8">
                            <input
                                onChange={handleChange}
                                type="number" className="form-control" name="ptAge" required="required"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-4">Patient Address</label>
                        <div className="col-8">
                            <input onChange={handleChange} type="text" className="form-control" name="ptAddress"
                                   required="required"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-4">Patient Gender</label>
                        <div className="col-8">
                            <select name="ptGender" value={getPtData.ptAge} onChange={handleChange} required={true}>
                                <option selected value="Please select value">Please select</option>
                                <option selected value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-8 offset-4">
                            <button onClick={handleSubmit} type="button" className="btn btn-primary btn-lg">Add
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </>
    );
}

export default Add;