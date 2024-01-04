import { img1, adminbg } from '../assest/Images/index';
import '../CSS Files/admin.css';
import axios from "axios";
import { useState, useEffect } from "react";


function Admin() {
    // ---------------------------------------------------------------------------------------------------------------------------------------------
    // Greeting Function
    let CustomerName = sessionStorage.getItem("userName")
    var custname = CustomerName.replace(/"/g, '')
    let [greeting, setGreeting] = useState("")
    useEffect(()=>{
        function Greeting() {
            // alert(custname)
            var today = new Date();
            let hoursMin = today.getHours() + '.' + today.getMinutes();
            // console.log(hoursMin);
            if (hoursMin <= 11.59) {
                setGreeting("Good Morning🌄 " + custname);
            } else if (hoursMin >= 12.00 && hoursMin <= 15.59) {
                setGreeting("Good Afternoon🕑 " + custname);
            } else if (hoursMin >= 16.00 && hoursMin <= 20.59) {
                setGreeting("Good Evening🌆 " + custname);
            } else {
                setGreeting("Working Late 🌃 " + custname);
            }
        }
        Greeting();
    })
   
    // -----------------------------------------------------------------------------------------------------------------------------------------------------
    // Customer Data
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
        // alert(sessionStorage.getItem("token"))
        // console.log(result.data)
        if (result.data.msg === "Unathorized request or user") {
            alert(result.data.msg);

        } else if (result.data.msg === "Record Present!") {
            setResultcust(true);
            setCustomer(result.data.customer);
            setCustMsg("")
        }
        else {
            setResultp(false);
            setCustMsg(result.data.msg);
        }
    }
    function cleanCustdata() {
        setResultcust("");
        setCustMsg("")
    }
    // ----------------------------------------------------------------------------------------------------------------------------------------------------------
    // Category Data
    let [Categories, setCategories] = useState([]);
    useEffect(() => {
        async function viewCategoryData() {
            try {
                let result = await axios.get("http://localhost:3000/api/admin/viewAllCategory")

                // console.log(result.data);
                // console.log(result.data.msg);
                setCategories(result.data);
            }
            catch (error) {
                console.log(error);
            }
        }
        viewCategoryData();
    }, [])
    let CategoryData = Categories.map(obj => <tr key={obj._id}><td>{obj._id}</td><td>{obj.Cname}</td></tr>)

    // for search category
    let [category, setCategory] = useState("");
    let [cname, setCName] = useState("");
    let [cresult, setResultc] = useState(false);
    let [cmsgInfo, setMsgInfoC] = useState("");

    async function FindCategory() {
        let result = await axios.get("http://localhost:3000/api/customer/viewCategoryByName/" + cname);
        console.log(result.data)
        if (result.data.msg === "Record Present!") {
            setResultc(true);
            setCategory(result.data.category);
            // alert(result.data.msg);
            setMsgInfoC("")
        }
        else {
            setResultc(false);
            setMsgInfoC(result.data.msg);
            // alert(result.data.msg);
        }
    }
    async function cleanCategoryData() {
        setResultc("");
        setCName("");
    }
    //   -----------------------------------------------------------------------------------------------------------------------------------------------------------
    // product data
    let [Products, setProduct] = useState([]);
    useEffect(() => {
        async function viewProductData() {
            try {
                let result = await axios.get("http://localhost:3000/api/admin/viewAllProducts")

                // console.log(result.data);
                // console.log(result.data.msg);
                setProduct(result.data);
            }
            catch (error) {
                console.log(error);
            }
        }
        viewProductData();
    }, [])
    let ProductData = Products.map(obj => <tr key={obj._id}><td>{obj._id}</td><td>{obj.pname}</td><td>{obj.price}</td><td>{obj.quantity}</td><td>{obj.cid}</td><td>{obj.categoryName}</td></tr>)

    //search product function
    // for search product set variables
    let [product, setProducts] = useState("");
    let [pname, setPName] = useState("");
    let [presult, setResultp] = useState(false);
    let [pmsg, setPMsg] = useState("");
    async function FindProduct() {
        let result = await axios.get("http://localhost:3000/api/customer/viewProductByName/" + pname);
        console.log(result.data)
        if (result.data.msg === "Record Present!") {
            setResultp(true);
            setProducts(result.data.product);
            setPMsg("");
        }
        else {
            setResultp(false);
            setPMsg(result.data.msg);
            // alert(result.data.msg)
        }
    }
    async function cleanProductData() {
        setResultp("");
    }
    // ---------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Order data
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
    // --------------------------------------------------------------------------------------------------------------------------------------------------------------
    // salesman data
    let [SalesmanD, setSalesmandata] = useState([]);
    useEffect(() => {
        async function viewSalesmanData() {
            try {
                let result = await axios.get("http://localhost:3000/api/admin/viewAllSalesman", {
                    headers: { "authorization": sessionStorage.getItem("token") }
                });
                if (result.data.msg === "Unathorized request or user") {
                    alert(result.data.msg);

                } else {
                    setSalesmandata(result.data);
                }
                // console.log(result.data);
                // console.log(result.data.msg);

            }
            catch (error) {
                console.log(error);
            }
        }
        viewSalesmanData();
    }, [])
    let SalesmanData = SalesmanD.map(obj => <tr key={obj._id}><td>{obj._id}</td><td>{obj.name}</td><td>{obj.email}</td><td>{obj.password}</td><td>{obj.gender}</td><td>{obj.age}</td><td>{obj.mobileNo}</td><td>{obj.address}</td></tr>)

    // for search salesman set variables
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
            setMsgInfoS(result.data.msg)
            // alert(result.data.msg)
        }

    }
    async function cleanSalesmanData() {
        setResults("");
    }
    // ---------------------------------------------------------------------------------------------------------------------------------------------------------

    return (
        <div >
            <body >

                {/* navbar */}
                <section>
                    <nav className="navbar navbar-expand-lg   d-flex row border" style={{ backgroundColor: "rgb(74, 144, 158)" }}>
                        <div className="container-fluid ps-4">
                            <div className="">
                                <a className="navbar-brand ms-3 text-white" href="#"><img src={img1} style={{ height: "50px", width: "50px", borderRadius: "50%" }} /><b className="fs-4 ">आपली</b>Pharmacy❤️
                                </a>

                            </div>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav  mb-2 mb-lg-0 fw-normal fs-5">
                                    <li className="nav-item" style={{ marginRight: "30px", marginLeft: "400px" }}>
                                        <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item" style={{ marginRight: "30px" }}>
                                        <a className="nav-link text-white" href="#about">About</a>
                                    </li>
                                    <li className="nav-item" style={{ marginRight: "30px" }}>
                                        <a className="nav-link text-white" href="#contactus">Contact</a>
                                    </li>

                                </ul>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                </section>

                <section>
                    <div className="d-flex" style={{ height: "100%" }}>
                        {/* left-side-black-part */}
                        <div className="" style={{ width: "20%", height: "100vh", backgroundColor: "rgb(74, 144, 158)" }}>
                            <div className="ps-4">
                                <nav id="navbar-example3" className=" flex-column align-items-stretch pe-4 ">
                                    <div className="input-group my-3" style={{ height: "auto", width: "auto" }}>
                                        <input type="search" name='adminlinks' placeholder="Search" style={{ backgroundColor: "rgb(74, 144, 158)" }}
                                            className="ps-3 rounded-start border border-1 border-white border-end-0" />
                                        <button className="btn btn-outline-light border border-1 border-start-0 border-white"
                                            type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                                    </div>
                                    <nav className="nav nav-pills flex-column fs-5">
                                        <a className="nav-link text-black text-white" href="#"><i className="bi bi-vinyl-fill"></i> Dashboard</a>
                                        <a className="nav-link text-black text-white" href="/custData"><i className="bi bi-people"></i> Customers</a>
                                        <a className="nav-link text-black text-white" href="/category"><i className="bi bi-prescription2"></i> Category</a>
                                        <a className="nav-link text-black text-white" href="/product"><i className="bi bi-capsule-pill"></i> Products</a>
                                        <a className="nav-link text-black text-white" href="/order"><i className="bi bi-cart3"></i> Orders</a>
                                        <a className="nav-link text-black text-white" href="/salesman"><i className="bi bi-person-check"></i> Salesman</a>
                                    </nav>
                                </nav>
                            </div>
                        </div>
                        {/* ================================================================================================================================================================================================ */}
                        {/* right side */}
                        <div className="" style={{ width: "80%", backgroundImage: `url(${adminbg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100% 100%" }}>

                            {/* <!-- greeting --> */}
                            <div className="text-center my-3 py-3 mx-auto adminHeading fs-4 fw-semibold rounded " style={{ height: "65px", boxShadow: "0px 0px 5px blue" }}>
                                {greeting}
                            </div>

                            {/* <!--Accordions  --> */}
                            <div className="accordion mx-5 mt-5" id="accordionPanelsStayOpenExample">

                                {/* <!-- customers --> */}
                                <div className="accordion-item border-dark ">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseOne">
                                            Customers!
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body ">
                                            <div className="d-flex justify-content-evenly">
                                                <div className="" style={{ height: "auto", width: "auto" }}>
                                                    <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        View All Data
                                                    </button>
                                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                        <div className="modal-dialog modal-xl modal-dialog-centered">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body mb-5">
                                                                    <h3 className="m-5 text-center">All Details!</h3>
                                                                    <table className="table mx-auto border border-dark  bg-light shadow-sm" style={{ width: "90%" }}>
                                                                        <thead className="table ">
                                                                            <tr className="text-center border border-dark shadow bg-white">
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

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex">
                                                    <div className="text-start fs-5">Find Customer:</div>
                                                        <div className="accordion me-5 ms-2" id="accordionPanelsStayOpenExample">
                                                            <div className="accordion-item ">
                                                                <h2 className="accordion-header" id="panelsStayOpen-headingTen">
                                                                    <div className="input-group" style={{ height: "auto", width: "313px" }}>
                                                                        <input type="search" className="rounded-start border  border-end-0 border-dark mx-auto fs-6" id="categoryName"
                                                                            placeholder="Enter Customer Name" name="CustName" onChange={(event) => setCustName(event.target.value)}
                                                                            aria-label="Enter Customer Name" aria-describedby="button-addon2" style={{ width: "239px" }} />
                                                                        <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                                                            id="button-addon2" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="true"
                                                                            onClick={FindCustData}><i className="bi bi-search"></i></button>
                                                                        <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                                                            id="button-addon2" aria-controls="panelsStayOpen-collapseTen" data-bs-target="#panelsStayOpen-collapseTen" onClick={cleanCustdata}></button>
                                                                    </div>
                                                                    {/* </button> */}
                                                                </h2>
                                                                <div id="panelsStayOpen-collapseTen" className="accordion-collapse collapse"
                                                                    aria-labelledby="panelsStayOpen-headingTen">
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
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* <!-- Categories --> */}
                                <div className="accordion-item mt-4 border-dark border">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseTwo">
                                            Categories!
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingTwo">
                                        <div className="accordion-body">
                                            <div className="d-flex justify-content-evenly">
                                                <div className="" style={{ height: "auto", width: "auto" }}>
                                                    <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                                                        View Category Data
                                                    </button>
                                                    <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                        <div className="modal-dialog modal-xl modal-dialog-centered">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body mb-5">
                                                                    <h3 className="m-5 text-center">All Category Details!</h3>
                                                                    <table className=" table mx-auto border border-dark  bg-light shadow-sm" style={{ width: "50%" }}>
                                                                        <thead className="table ">
                                                                            <tr className="text-center border border-dark shadow">
                                                                                <th>Id</th>
                                                                                <th>Category Name</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody className="text-center">
                                                                            {CategoryData}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="text-start px-2 fs-5 ">Find Category:</div>
                                                    <div className="accordion me-5" id="accordionPanelsStayOpenExample">
                                                        <div className="accordion-item ">
                                                            <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                                                                <div className="input-group" style={{ height: "auto" }}>
                                                                    <input type="search" className="rounded-start border  border-end-0 border-dark mx-auto fs-6" id="categoryName"
                                                                        placeholder="Enter Category Name" name="cname" onChange={(event) => setCName(event.target.value)}
                                                                        aria-label="Enter Category Name" aria-describedby="button-addon2" style={{ width: "" }} />
                                                                    <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                                                        id="button-addon2" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="true"
                                                                        onClick={FindCategory}><i className="bi bi-search"></i></button>
                                                                    <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                                                        id="button-addon2" aria-controls="panelsStayOpen-collapseSix" data-bs-target="#panelsStayOpen-collapseSix" onClick={cleanCategoryData}></button>
                                                                </div>
                                                                {/* </button> */}
                                                            </h2>
                                                            <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse"
                                                                aria-labelledby="panelsStayOpen-headingSix">
                                                                <div className="accordion-body ">
                                                                    <div className="my-1">
                                                                        {cmsgInfo}
                                                                        {cresult ? "Category Id is " + category._id : ""}<br />
                                                                        {cresult ? "Category Name is " + category.Cname : ""}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='ms-5'>
                                                        <a href="/addCategory" target="popup" className="me-3"
                                                            onClick="window.open('/addCategory','popup','width=700,height=700'); return false;">
                                                            <input type="button" className="btn btn-outline-primary rounded-start"
                                                                value="Add Category" />
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Products! --> */}
                                <div className="accordion-item mt-4 border-dark border">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                            Products!
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <div className="d-flex justify-content-evenly">
                                                <div className="" style={{ height: "auto", width: "auto" }}>
                                                    <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                                                        View Product Data
                                                    </button>
                                                    <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                        <div className="modal-dialog modal-xl modal-dialog-centered">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body mb-5">
                                                                    <h3 className="m-5 text-center">All Product Details!</h3>
                                                                    <table className=" table mx-auto border border-dark bg-light shadow-sm" style={{ width: "70%" }}>
                                                                        <thead className="table bg-white">
                                                                            <tr className="text-center border border-dark shadow">
                                                                                <th>Id</th>
                                                                                <th>Product Name</th>
                                                                                <th>Price</th>
                                                                                <th>Quantity</th>
                                                                                <th>Category Id</th>
                                                                                <th>Category Name</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody className="text-center">
                                                                            {ProductData}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex">
                                                    <div className="text-start px-2 fs-5">Find Product:</div>
                                                    <div className="accordion me-5" id="accordionPanelsStayOpenExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                                                                <div className="input-group" style={{ height: "auto", width: "310px" }}>
                                                                    <input type="search" className="rounded-start border  border-end-0 border-dark mx-auto fs-6" id="categoryName"
                                                                        placeholder="Enter Product Name" name="pname" onChange={(event) => setPName(event.target.value)}
                                                                        aria-label="Enter Product Name" aria-describedby="button-addon2" style={{ height: "auto", width: "230px" }} />
                                                                    <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                                                        id="button-addon2" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="true" style={{ height: "auto", width: "47px" }}
                                                                        onClick={FindProduct}><i className="bi bi-search"></i></button>
                                                                    <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                                                        id="button-addon2" aria-controls="panelsStayOpen-collapseSeven" data-bs-target="#panelsStayOpen-collapseSeven" onClick={cleanProductData}></button>
                                                                </div>
                                                                {/* </button> */}
                                                            </h2>
                                                            <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse"
                                                                aria-labelledby="panelsStayOpen-headingSeven">
                                                                <div className="accordion-body ">
                                                                    <div className="" >
                                                                        {pmsg}
                                                                        {presult ? "Id- " + product._id : ""}<br />
                                                                        {presult ? "Name- " + product.pname : ""}<br />
                                                                        {presult ? "Price- " + product.price : ""}<br />
                                                                        {presult ? "Quantity- " + product.quantity : ""}<br />
                                                                        {presult ? "Category Id- " + product.cid : ""}<br />
                                                                        {presult ? "Category Name- " + product.categoryName : ""}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a href="/addProduct" target="popup" className="me-3"
                                                        onClick="window.open('/addProduct','popup','width=700,height=700'); return false;">
                                                        <input type="button" className="btn btn-outline-primary rounded-start"
                                                            value="Add Products" /></a>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Orders! --> */}
                                <div className="accordion-item mt-4 border-dark border">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseFour">
                                            Orders!
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingFour">
                                        <div className="accordion-body">
                                            <div className="d-flex justify-content-evenly">
                                                <div className="" style={{ height: "auto", width: "auto" }}>
                                                    <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
                                                        View Orders Data
                                                    </button>
                                                    <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                        <div className="modal-dialog modal-xl modal-dialog-centered">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body mb-5">
                                                                    <h3 className="m-5 text-center">All Order Details!</h3>
                                                                    <table className=" table mx-auto border border-dark bg-light shadow-sm" style={{ width: "90%" }}>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="text-start fs-5">Find Order:</div>
                                                    <div className="accordion me-5 ms-2" id="accordionPanelsStayOpenExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                                                                <div className="input-group" style={{ height: "auto", width: "auto" }}>
                                                                    <input type="search" className="rounded-start border  border-end-0 border-dark mx-auto fs-6"
                                                                        placeholder="Enter Customer email" name="custEmail" onChange={(event) => setcEmail(event.target.value)}
                                                                        aria-label="Enter Customer email" aria-describedby="button-addon2" style={{ height: "auto", width: "258px" }} />
                                                                    <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                                                        id="button-addon2" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="true" style={{ height: "auto", width: "47px" }}
                                                                        onClick={FindOrder}><i className="bi bi-search"></i></button>
                                                                    <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                                                        id="button-addon2" aria-controls="panelsStayOpen-collapseEight" data-bs-target="#panelsStayOpen-collapseEight" onClick={cleanOrderData}></button>
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
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Salesman! --> */}
                                <div className="accordion-item mt-4 border-dark border">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseFive">
                                            Salesman!
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse"
                                        aria-labelledby="panelsStayOpen-headingFive">
                                        <div className="accordion-body">
                                            <div className="d-flex justify-content-evenly">
                                                <div className="" style={{ height: "auto", width: "auto" }}>
                                                    <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
                                                        View Salesman Data
                                                    </button>
                                                    <div className="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                        <div className="modal-dialog modal-xl modal-dialog-centered">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body mb-5">
                                                                    <h3 className="m-5 text-center">All Salesman Details!</h3>
                                                                    <table className=" table mx-auto border border-dark bg-light shadow-sm" style={{ width: "70%" }}>
                                                                        <thead className="table bg-white">
                                                                            <tr className="text-center border border-dark shadow">
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex">
                                                    <div className="text-start  fs-5">Find Salesman:</div>
                                                    <div className="accordion me-5 ms-3" id="accordionPanelsStayOpenExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                                                                <div className="input-group" style={{ height: "auto", width: "auto" }}>
                                                                    <input type="search" className="rounded-start border  border-end-0 border-dark mx-auto fs-6"
                                                                        placeholder="Enter Salesman Name" name="sname" onChange={(event) => setsName(event.target.value)}
                                                                        aria-label="Enter Salesman Name" aria-describedby="button-addon2" style={{ height: "auto", width: "258px" }} />
                                                                    <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                                                        id="button-addon2" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="true" style={{ height: "auto", width: "47px" }}
                                                                        onClick={FindSalesman}><i className="bi bi-search"></i></button>
                                                                    <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                                                        id="button-addon2" aria-controls="panelsStayOpen-collapseNine" data-bs-target="#panelsStayOpen-collapseNine" onClick={cleanSalesmanData}></button>
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

                                                <div>
                                                    <a href="/addSalesman" target="popup" className="me-3"
                                                        onClick="window.open('/addSalesman','popup'); return false;">
                                                        <button className="btn btn-outline-primary" >Add Salesman <i
                                                            className="bi bi-cart"></i></button></a>
                                                </div>
                                            </div>
                                            {/* <div className="ps-5">
                                            <p id="SalesmanData">{smsgInfo}</p>
                                        </div> */}
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


            </body>
        </div >
    )
}
export default Admin;