import axios from "axios";
import { useEffect, useState } from "react";
import {salesGraph} from '../assest/Images';
function Order() {
    // for search order set variables
    let [order, setOrder] = useState("");
    let [custEmail, setcEmail] = useState("");
    let [oresult, setResulto] = useState(false);
    let [msgInfoO, setMsgInfoO] = useState("");
    //search order function
    async function FindOrder() {
        let result = await axios.get("http://localhost:3000/api/order/viewOrderByCustEmail/" + custEmail, {
            headers: { "authorization": sessionStorage.getItem("token") }
        });
        console.log(result.data)
        if (result.data.msg === "Unathorized request or user") {
            alert(result.data.msg);

        } else if (result.data.msg === "Record Present!") {
            setResulto(true);
            setOrder(result.data.order);
            setMsgInfoO("")
        }
        else {
            setResulto(false);
            setOrder("")
            setMsgInfoO(result.data.msg);
        }
    }
    async function cleanOrderData() {
        setResulto("");
    }
    // ------------------------------------------------------------------------------------------------------------------------------
    let [orders, setOrders] = useState([]);
    useEffect(() => {
        async function viewOrderData() {
            try {
                let result = await axios.get("http://localhost:3000/api/order/viewAllOrder", {
                    headers: { "authorization": sessionStorage.getItem("token") }
                });
                if (result.data.msg === "Unathorized request or user") {
                    alert(result.data.msg);

                } else {
                    setOrders(result.data);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        viewOrderData();
    }, [])
    let OrderData = orders.map(obj => <tr key={obj._id}><td>{obj._id}</td><td>{obj.customerEmail}</td><td>{obj.productId}</td><td>{obj.categoryId}</td><td>{obj.productqty}</td><td>{obj.dateOfOrder}</td></tr>)

    return (
        <div>
            <body style={{backgroundColor:"rgb(179, 224, 255)", height:"100vh"}}>
            <div className="py-3 text-end px-5">
                <a className="btn btn-outline-dark" href="/admin">Back<i className="fa-solid fa-arrow-right-from-bracket"></i></a>
            </div>
            <div className="container py-3 rounded shadow text-center border "><h3>Welcome to Order <i
                            className="bi bi-cart"></i> page!</h3></div>
           
            <div className="container mt-5">
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingSeven"  style={{ height: "50px" }}>
                        <div className="input-group" style={{ height: "auto", width: "auto" }}>
                            <input type="search" className="ps-3 rounded-start border  border-end-0 border-dark mx-auto fs-6"
                                placeholder="Enter Customer email" name="custEmail" onChange={(event) => setcEmail(event.target.value)}
                                aria-label="Enter Customer email" aria-describedby="button-addon2" style={{height: "50px", width: "93.8%" }} />
                            <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                id="button-addon2" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="true" style={{ height: "auto", width: "47px" }}
                                onClick={FindOrder}><i className="bi bi-search"></i></button>
                            <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                id="button-addon2" style={{ height: "25px" }} aria-controls="panelsStayOpen-collapseEight" data-bs-target="#panelsStayOpen-collapseEight" onClick={cleanOrderData}></button>
                        </div>
                        {/* </button> */}
                    </h2>
                    <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingEight">
                        <div className="accordion-body ">
                            <div className="" >
                                {msgInfoO}
                                {oresult ? "Customer Email- " + order.customerEmail : ""}<br />
                                {oresult ? "Category Id- " + order.categoryId : ""}<br />
                                {oresult ? "Product Id- " + order.productId : ""}<br />
                                {oresult ? "Product Qty Id- " + order.productqty : ""}<br />
                                {oresult ? "Date Of Order- " + order.dateOfOrder : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <h5 className="mt-5 mb-4 text-center">Order Table</h5>
            <table className=" table mx-auto border border-dark " style={{ width: "70%" }}>
                <thead className="table bg-white">
                    <tr className="text-center border border-dark shadow">
                        <th>Order Id</th>
                        <th>Customer Email</th>
                        <th>Category Id</th>
                        <th>Product Id</th>
                        <th>Product Quantity</th>
                        <th>Order date & time</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {OrderData}
                </tbody>
            </table>
            <div className="container mt-5">
                <h5 className="text-center mb-3">Order Status Table</h5>
            <table className=" table mx-auto border border-dark" style={{ width: "70%" }}>
                <thead className="table bg-white">
                    <tr className="text-center border border-dark shadow">
                        <th>Order Id</th>
                        <th>Customer Email</th>
                        <th>Order Date & Time</th>
                        <th>Product Quantity</th>
                        <th>Order Status</th>
                    </tr>
                    <tr className="text-center">
                        <td>64173e261315a3de12245056</td>
                        <td>smriti@gmail.com</td>
                         <td>2023-03-19T16:53:34.227Z</td>
                        <td>2</td>
                        <td><button type="button" className="btn btn-success rounded-pill btn-sm text-success">Completed</button></td>
                       
                    </tr>
                    <tr className="text-center border-bottom border-dark">
                        <td>64173e731315a3de1224505b</td>
                        <td>sneha@gmail.com</td>
                         <td>2023-03-19T16:54:45.108Z</td>
                        <td>1</td>
                        <td><button type="button" className="btn btn-info btn-sm rounded-pill text-info">Processing</button></td>
                        
                    </tr>
                </thead>
                </table>
                
            </div>
        <div className=" text-center mt-5">
            <h5>Order Status Graph</h5>
            <img src={salesGraph}  style={{height:"500px", width:"700px"}}/>
        </div>
        </body>
        </div>
    )
}
export default Order;