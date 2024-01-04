import axios from "axios";
import { useState } from "react";
function AddCategory() {
    let [categoryid, setCategoryId] = useState();
    let [cname, setCname] = useState();
async function addCategory(event){
    event.preventDefault();
    var category = { _id: categoryid, Cname: cname };
    try {
        let result = await axios.post("http://localhost:3000/api/admin/addCategory", category, {
            headers: { "authorization": sessionStorage.getItem("token") }
        });
        if (result.data.msg === "Unathorized request or user") {
            alert(result.data.msg);
        } else {
            document.getElementById("cmsg").innerHTML = result.data.msg;
            console.log(result);
        }
    }
    catch (error) {
        console.log(error);
    }
}
function cleanMsg(){
    document.getElementById("cmsg").innerHTML = "";
}
    return (
        <div style={{ backgroundColor: "darkseagreen", height: "100vh" }}>
            <div>
                <a href="/admin"><input type="button" value="Back" className=" mt-3 fs-5 px-4"
                    style={{ marginLeft: "50px", borderRadius: "8px", backgroundColor: "rgb(227, 243, 243)" }} /></a>
            </div>
            <div className="container mt-2 text-center p-3">
                <h3>Add Category!</h3>
            </div>
            <div className="container mt-3">
                <form className="p-3 pt-5 mt-3 border mx-auto" onSubmit={addCategory} onKeyDown={cleanMsg}
                    style={{height: "auto", width:"500px",borderRadius:"10px", boxShadow: "0px 0px 5px greenyellow", backgroundColor:"rgb(218, 245, 236)"}}>

                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Enter id:</label>
                        <div className="col-sm-8">
                            <input type="number" id="id" className="form-control"  onChange={(e) => setCategoryId(e.target.value)} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Category Name:</label>
                        <div className="col-sm-8">
                            <input type="text" id="cname" className="form-control" onChange={(e) => setCname(e.target.value)}  />
                        </div>
                    </div>
                    <div className="text-center">
                        <input type="submit" value="Add Category" className="m-3 btn btn-outline-dark"  />
                        <input type="reset" value="Cancel" className="m-3 btn btn-outline-dark"  onClick={cleanMsg}/><br /><br />
                    </div>
                <div className="text-center">
                    <span  id="cmsg"></span>
                    </div>
                </form>
            </div>
            </div>
        )
}
            export default AddCategory;