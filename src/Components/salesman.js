import axios from "axios";
import { useState, useEffect } from "react";
function Salesman() {
    let [salesman, setSalesman] = useState("");
    let [sname, setsName] = useState("");
    let [sresult, setResults] = useState(false);
    let [smsgInfo, setMsgInfoS] = useState("");
    //search order function
    async function FindSalesman() {
        let result = await axios.get("http://localhost:3000/api/admin/viewSalesmanByName/" + sname, {
            headers: { "authorization": sessionStorage.getItem("token") }
        });
        console.log(result.data)
        if (result.data.msg === "Unathorized request or user") {
            alert(result.data.msg);

        } else if (result.data.msg === "Record Present!") {
            setResults(true);
            setSalesman(result.data.salesman);
            setMsgInfoS("")
        }
        else {
            setResults(false);
            setSalesman("");
            setMsgInfoS = (result.data.msg)
            // alert(result.data.msg)
        }

    }
    async function cleanSalesmanData() {
        setResults("");
    }
    // ------------------------------------------------------------------------------------------------------------------------------
    let [salesmans, setSalesmans]=useState([]);
    useEffect(()=>{
        async function viewSalesmanData() {
            try{
                let result=await axios.get("http://localhost:3000/api/admin/viewAllSalesman",{
                    headers:{"authorization": sessionStorage.getItem("token")}
                });
                if(result.data.msg==="Unathorized request or user"){
                    alert(result.data.msg);

                }else{
                    setSalesmans(result.data);
                } 
                // console.log(result.data);
                // console.log(result.data.msg);
                
            }
            catch(error){
                console.log(error);
            } 
        }
        viewSalesmanData();
    },[])
    let SalesmanData=salesmans.map(obj=><tr key={obj._id}><td>{obj._id}</td><td>{obj.name}</td><td>{obj.email}</td><td>{obj.password}</td><td>{obj.gender}</td><td>{obj.age}</td><td>{obj.mobileNo}</td><td>{obj.address}</td></tr>)
    
    return (
        <div>
            <body style={{ backgroundColor: "rgb(179, 224, 255)", height: "100vh" }}>
                <div className="text-end pt-3 me-5 ">
                    <a className="btn btn-outline-dark" href="/admin">Back</a>
                </div>
                <div className="container pb-4  text-center"><h3>Welcome to Salesman Data page!</h3></div>
                <div className="container">
                    <div className="accordion me-5" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingNine" style={{ height: "50px" }}>
                                <div className="input-group" style={{ height: "auto", width: "auto" }}>
                                    <input type="search" className="ps-3 rounded-start border  border-end-0 border-dark mx-auto fs-6"
                                        placeholder="Enter Salesman Name" name="sname" onChange={(event) => setsName(event.target.value)}
                                        aria-label="Enter Salesman Name" aria-describedby="button-addon2" style={{ height: "50px", width: "94.2%" }} />
                                    <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                        id="button-addon2" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="true" style={{ height: "auto", width: "40px" }}
                                        onClick={FindSalesman} ><i className="bi bi-search"></i></button>
                                    <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                        id="button-addon2" style={{ height: "25px" }} aria-controls="panelsStayOpen-collapseNine" data-bs-target="#panelsStayOpen-collapseNine" onClick={cleanSalesmanData}></button>
                                </div>
                                {/* </button> */}
                            </h2>
                            <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingNine">
                                <div className="accordion-body ">
                                    <div className="" >
                                        {smsgInfo}
                                        {sresult ? "Id- " + salesman._id : ""}<br />
                                        {sresult ? "Name- " + salesman.name : ""}<br />
                                        {sresult ? "Email- " + salesman.email : ""}<br />
                                        {sresult ? "Password- " + salesman.password : ""}<br />
                                        {sresult ? "Gender- " + salesman.gender : ""}<br />
                                        {sresult ? "Age- " + salesman.age : ""}<br />
                                        {sresult ? "MobileNo- " + salesman.mobileNo : ""}<br />
                                        {sresult ? "Address- " + salesman.address : ""}<br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h4 className="m-5 text-center">Salesman Table</h4>
                    <table className=" table mx-auto border border-dark " style={{ width: "70%" }}>
                        <thead className="table bg-white">
                            <tr className="text-center border border-dark">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Mobile No.</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {SalesmanData}
                        </tbody>
                    </table>
                </div>
            </body>
        </div>
    )
}
export default Salesman;