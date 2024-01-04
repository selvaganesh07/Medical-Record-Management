import axios from "axios";
import { useState, useEffect } from "react";
function CustData() {
    // for search customer
    let [customer, setCustomer] = useState("");
    let [CustName, setCustName] = useState("");
    let [custresult, setResultcust] = useState(false);
    let [cmsg, setCustMsg] = useState("");
    // let pass = (sessionStorage.getItem("userPassword"));
    async function FindCustData() {
        let result = await axios.get("http://localhost:3000/api/customer/findCustomerByName/" + CustName, {
            headers: { "authorization": sessionStorage.getItem("token") }
        })
        console.log(result.data)
        if (result.data.msg === "Unathorized request or user") {
            alert(result.data.msg);

        } else if (result.data.msg === "Record Present!") {
            setResultcust(true);
            setCustomer(result.data.customer);
            setCustMsg("")
        }
        else {
            setResultcust(false);
            setCustMsg(result.data.msg);
        }
    }
    function cleanCustdata() {
        setResultcust("");
        setCustMsg("")
    }
    // --------------------------------------------------------
    let [customers, setCustomers] = useState([]);
    useEffect(() => {
        async function viewCustData() {
            try {
                let result = await axios.get("http://localhost:3000/api/admin/findAllCustomers", {
                    headers: { "authorization": sessionStorage.getItem("token") }
                });

                if (result.data.msg === "Unathorized request or user") {
                    alert(result.data.msg);

                } else {
                    setCustomers(result.data);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        viewCustData();
    }, [])
    
    let custData = customers.map(obj => <tr key={obj._id}><td>{obj._id}</td><td>{obj.name}</td><td>{obj.email}</td><td>{obj.gender}</td><td>{obj.age}</td><td>{obj.mobileNo}</td><td>{obj.address}</td></tr>)


    // --------------------------------------------------------------------------------------------------------------------
    return (
        <div>
            <body style={{ backgroundColor: "rgb(179, 224, 255)", height: "100vh" }}>
                <div className="text-end pt-3 me-5 ">
                    <a className="btn btn-outline-dark" href="/admin">Back</a>
                </div>
                <div className="container pb-4  text-center"><h3>Welcome to Customer Data page!</h3></div>

                <div className="container">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item ">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne" style={{ height: "50px" }}>
                                <div className="input-group" style={{ height: "auto" }}>
                                    <input type="search" className="ps-3 rounded-start border  border-end-0 border-dark mx-auto fs-6"
                                        placeholder="Enter Customer Name" name="CustName" onChange={(event) => setCustName(event.target.value)}
                                        aria-label="Enter Customer Name" aria-describedby="button-addon2" style={{ height: "50px", width: "94%" }} />
                                    <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                        id="button-addon2" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                        onClick={FindCustData} style={{ width: "45px" }}><i className="bi bi-search"></i></button>
                                    <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                        id="button-addon2" style={{ height: "25px" }} aria-controls="panelsStayOpen-collapseOne" data-bs-target="#panelsStayOpen-collapseOne" onClick={cleanCustdata}></button>
                                </div>
                                {/* </button> */}
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body ">
                                    <div className="my-1">
                                        <div className="my-1">
                                            {cmsg}
                                            {custresult ? "Id- " + customer._id : ""}<br />
                                            {custresult ? "Name- " + customer.name : ""}<br />
                                            {custresult ? "Email- " + customer.email : ""}<br />
                                            {/* {custresult ? "Password- "+customer.password:""}<br /> */}
                                            {custresult ? "Gender- " + customer.gender : ""}<br />
                                            {custresult ? "Age- " + customer.age : ""}<br />
                                            {custresult ? "MobileNo- " + customer.mobileNo : ""}<br />
                                            {custresult ? "Address- " + customer.address : ""}<br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h4 className="m-5 mb-3  text-center">Customer Table</h4>
                    <table className=" table ms-5 border border-dark" style={{ width: "90%" }}>
                        <thead className="table bg-light shadow">
                            <tr className="text-center border border-dark">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Mobile No.</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {custData}
                        </tbody>
                    </table>
                </div>
            </body>
        </div>
    )
}
export default CustData;