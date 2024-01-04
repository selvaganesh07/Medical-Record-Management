import { signinbg } from '../assest/Images';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignIn() {
    let [emailid, setEmailId] = useState();
    let [password, setPassword] = useState();
    let [typeofuser, setTypeOfUser] = useState();
    let navigate = useNavigate();
    //login Function
    async function checkUserFromDb(event) {
        // alert("Its Calling")
        event.preventDefault();
        var customers = {
            email: emailid,
            password: password,
            typeOfUser: typeofuser,
        };
        // console.log(customers)
         sessionStorage.setItem("userEmail",customers.email)
         sessionStorage.setItem("userPassword",customers.password)
        // alert(customers.email)
        let result = await axios.post("http://localhost:3000/api/customer/signIn", customers);
       
        if (result.data.msg === "Admin successfully login!") {
            // alert(result.data.msg)
            sessionStorage.setItem("token", result.data.token);
            sessionStorage.setItem("userName", JSON.stringify(result.data.findUser.name))
            document.getElementById("msg").innerHTML = result.data.msg;
            navigate("/admin");
            
        } else if (result.data.msg === "Customer successfully login!") {
            // alert(result.data.msg);
            sessionStorage.setItem("token", result.data.token);
            sessionStorage.setItem("userName", JSON.stringify(result.data.findUser.name))
            document.getElementById("msg").innerHTML = result.data.msg;
            navigate("/customer");
           
        } else {
            document.getElementById("msg").innerHTML = result.data.msg;
        }

    }
    function cleanMsg() {
        document.getElementById("msg").innerHTML = "";
    }
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (
        <div>
            <div className="container-fluid border py-4" style={{
                height: "760px", borderRadius: "10px", backgroundImage: `url(${signinbg})`, backgroundSize: "100% 100%", backgroundPosition: "center",
                backgroundRepeat: "no-repeat"}}>
                <div>
                    <a href="/"><input type="button" value="Back" className=" mt-3 fs-5 px-4" style={{ marginLeft: "50px", borderRadius: "8px", backgroundColor: " rgb(227, 243, 243)" }} /></a>
                </div>
                <form className="fs-5 px-5 py-5" onSubmit={checkUserFromDb} style={{ height: "auto", marginLeft: "116px", marginTop: "90px", width: " 450px", boxShadow: "0px 0px 2px black", borderRadius: "10px", backgroundColor: "rgb(181, 222, 224)" }}>

                    <label>Type Of User: </label>
                    <input type="radio" name="typeOfUser" value="admin" className="ms-3" onClick={(e) => setTypeOfUser(e.target.value)} />Admin
                    <input type="radio" name="typeOfUser" value="customer" className="ms-3" onClick={(e) => setTypeOfUser(e.target.value)} />Customer<br /><br />
                    <label style={{ fontSize: "18px" }}>Enter Email</label><br />
                    <input type="email" id="email" name="emailid" className="w-100 border border-0 rounded" onChange={(e) => setEmailId(e.target.value)} onKeyDown={cleanMsg} /><br />
                    <label style={{ fontSize: "18px" }} className="mt-3">Password</label><br />
                    <input type="password" id="password" name="password" className="w-100 border border-0 rounded" onChange={(e) => setPassword(e.target.value)} onKeyDown={cleanMsg} /><br /><br />

                    <input type="submit" value="Login" className="mt-2 w-100  btn btn-info" style={{ color: "black", border: "1px solid black" }} />

                    <p style={{ fontSize: "medium" }} className=" mt-2">Account not found?<br />Create New Account <a href="/signup">Sign up</a> </p>
                    <span id="msg"></span>
                </form>
                <span id="detail"></span>
            </div>

        </div>
    )
}
export default SignIn;