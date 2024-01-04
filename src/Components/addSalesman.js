import axios from "axios";
import { useState } from "react";
function AddSalesman() {
    let [id, setId] = useState();
    let [nameValue, setName] = useState();
    let [emailValue, setEmail] = useState();
    let [gender, setGender] = useState();
    let [age, setAge] = useState();
    let [mobileNo, setMobileNo] = useState();
    let [address, setAddress] = useState();
    async function addProduct(event) {
        event.preventDefault();
        var salesman = {
            _id: id,
            name: nameValue,
            email: emailValue,
            gender: gender,
            age: age,
            mobileNo: mobileNo,
            address: address,
        };
        try {
            let result = await axios.post("http://localhost:3000/api/admin/addSalesman", salesman, {
                headers: { "authorization": sessionStorage.getItem("token") }
            });
            if (result.data.msg === "Unathorized request or user") {
                alert(result.data.msg);
            } else {
                document.getElementById("msg").innerHTML = result.data.msg;
                console.log(result);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    function cleansmsg() {
        document.getElementById("msg").innerHTML = "";
    }
    return (
        <div style={{ backgroundColor: "darkseagreen", height: "100vh" }}>
            <div>
                <a href="/admin"><input type="button" value="Back" className=" mt-3 fs-5 px-4"
                    style={{ marginLeft: "50px", borderRadius: "8px", backgroundColor: "rgb(227, 243, 243)" }} /></a>
            </div>
            <form className=" p-5 border mx-auto" onSubmit={addProduct} onKeyDown={cleansmsg} 
                style={{ height: "auto", width: "650px", boxShadow: "0px 0px 2px black", borderRadius: "10px", backgroundColor: "rgb(218, 245, 236)",  marginTop: "50px", fontSize: "large" }}>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Enter Id:</label>
                    <div className="col-sm-8">
                        <input type="number" id="sid" className="form-control" onChange={(e) => setId(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Enter Full Name</label>
                    <div className="col-sm-8">
                        <input type="text" id="sname" className="form-control" onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Email</label>
                    <div className="col-sm-8">
                        <input type="email" className="form-control" id="semail" onChange={(e) => setEmail(e.target.value)}  />
                    </div>
                </div>

                <div>
                    <label>Gender:</label>
                    <input type="radio" name="gender" value="male" className="ms-3" onClick={(e) => setGender(e.target.value)} />Male
                    <input type="radio" name="gender" value="female" className="ms-4" onClick={(e) => setGender(e.target.value)} />Female<br /><br />
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Age</label>
                    <div className="col-sm-3">
                        <input type="number" className="form-control" id="age" onChange={(e) => setAge(e.target.value)}  />
                    </div>
                    <label className="col-sm-3 col-form-label">Mobile No.:</label>
                    <div className="col-sm-4">
                        <input type="number" className="form-control" id="mobileno" onChange={(e) => setMobileNo(e.target.value)}  />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label">Address</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="address" onChange={(e) => setAddress(e.target.value)}  />
                    </div>
                </div>


                <input type="submit" value="Create Acc" className=" mt-3 fs-5 px-2"
                    style={{ marginLeft: "130px", borderRadius: "8px", backgroundColor: "rgb(122, 239, 241)" }} />
                <input type="reset" value="cancel" onClick={cleansmsg} className="ms-5 mt-3 fs-5 px-4"
                    style={{ borderRadius: "8px", backgroundColor: "rgb(122, 239, 241)" }} /><br /><br />
                <span id="msg"></span>
            </form>

        </div>
    )
}
export default AddSalesman;