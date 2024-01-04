import { signupbg } from "../assest/Images";
import axios from "axios";
import { useState } from "react";
import {Link} from "react-router-dom";
import showPwdImg from '../assest/Images/show-password.svg';
import hidePwdImg from '../assest/Images/hide-password.svg';
import '../CSS Files/App.css'
function SignUp() {
    let [nameValue, setName] = useState();
    let [emailValue, setEmail] = useState();
    let [passwordValue, setPassword] = useState();
    let [isRevealPwd, setIsRevealPwd] = useState(false);
    let [gender, setGender] = useState();
    let [age, setAge] = useState();
    let [mobileNo, setMobileNo] = useState();
    let [address, setAddress] = useState();
    let [typeOfUser, setTypeOfUser] = useState();
    async function storeCustomerInfo(event) { 
        
        event.preventDefault();
        var customers = {
            name: nameValue,
            email: emailValue,
            password: passwordValue,
            gender: gender,
            age: age,
            mobileNo: mobileNo,
            address: address,
            typeOfUser: typeOfUser,
        };
        //   console.log(customers);
        let result = await axios.post("http://localhost:3000/api/customer/signUp", customers);
        console.log(result)

        if (result.data.msg === "Account created Successfully!") {
            document.getElementById("msg").innerHTML = result.data.msg +" Welcome! You Can Signin Now";
        } else { 
            document.getElementById("msg").innerHTML = result.data.msg;
        }
        
    }
    function reset() {
        document.getElementById("msg").innerHTML = "";
    }
    function cleanMsg() {
        document.getElementById("msg").innerHTML = "";
    }

    return (
        <div>
            <div className="container-fluid py-5 " style={{
                height: "780px", borderRadius: "10px", backgroundImage: `url(${signupbg})`, backgroundSize: "100% 100%", backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }} >
                <div>
                    <a href="/"><input type="button" value="Back" className=" mt-3 fs-5 px-4"
                        style={{ marginLeft: "50px", borderRadius: "8px", backgroundColor: "rgb(227, 243, 243)" }} /></a>
                </div>
                <form className=" p-5 border mx-auto" onSubmit={storeCustomerInfo}
                    style={{ height: "auto", width: "650px", boxShadow: "0px 0px 2px black", borderRadius: "10px", backgroundColor: " rgb(218, 245, 236)", marginTop: "50px", fontSize: "large" }}
                >
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Enter Full Name</label>
                        <div className="col-sm-8">
                            <input type="text" id="name" placeholder="Enter Your Name" className="form-control" onChange={(e) => setName(e.target.value)} onKeyDown={cleanMsg} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Email</label>
                        <div className="col-sm-8">
                            <input type="email" className="form-control" placeholder="Enter Your Email" id="email" onChange={(e) => setEmail(e.target.value)} onKeyDown={cleanMsg} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Password</label>
                        <div className="col-sm-8 pwd-container">
                            <input className="form-control" placeholder="Enter Password" type={isRevealPwd ? "text" : "password"} id="password" onChange={(e) => setPassword(e.target.value)} onKeyDown={cleanMsg} />
                            <img
                                title={isRevealPwd ? "Hide password" : "Show password"}
                                src={isRevealPwd ? hidePwdImg : showPwdImg}
                                onClick={() => setIsRevealPwd(prevState => !prevState)}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Gender:</label>
                        <input type="radio" name="gender" value="M" className="ms-3" onClick={(e) => setGender(e.target.value)} />Male
                        <input type="radio" name="gender" value="F" className="ms-4" onClick={(e) => setGender(e.target.value)} />Female<br /><br />
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Age</label>
                        <div className="col-sm-3">
                            <input type="number" className="form-control" placeholder="Enter age" id="age" onChange={(e) => setAge(e.target.value)} onKeyDown={cleanMsg} />
                        </div>
                        <label className="col-sm-3 col-form-label">Mobile No.:</label>
                        <div className="col-sm-4">
                            <input type="number" className="form-control" id="mobileNo" placeholder="Enter mobile no" onChange={(e) => setMobileNo(e.target.value)} onKeyDown={cleanMsg} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label">Address</label>
                        <div className="col-sm-9">
                            <input type="text" placeholder="Enter current address" className="form-control" id="address" onChange={(e) => setAddress(e.target.value)} onKeyDown={cleanMsg} />
                        </div>
                    </div>

                    <label>Type Of User: </label>
                    <input type="radio" name="typeOfUser" value="admin" className="ms-3" onClick={(e) => setTypeOfUser(e.target.value)} />Admin
                    <input type="radio" name="typeOfUser" value="customer" className="ms-3" onClick={(e) => setTypeOfUser(e.target.value)} />Customer<br />
                    <div className="text-center">
                    <input type="submit" value="Create Acc" className=" mt-4 fs-5 px-2 btn btn-info btn-sm"
                        style={{borderRadius: "8px", backgroundColor: "rgb(122, 239, 241)" }} />
                    <input type="reset" value="cancel" className="btn btn-info btn-sm ms-5 mt-4 fs-5 px-4" onClick={reset}
                        style={{ borderRadius: "8px", backgroundColor: "rgb(122, 239, 241)" }} /><br />
                    </div>
                    <p className="text-center">Already have an Account? <Link to="/signin">SignIn</Link></p>
                   
                    <span id="msg" ></span>
                </form>

            </div>
        </div>
    )
}
export default SignUp;