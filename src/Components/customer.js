import { custPharmacyLogo, offer,img12,img13,img14,img15,img16,img17, img18, img19, img20, bpmonitor, inheler, cyrup } from "../assest/Images";
import '../CSS Files/App.css'
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
function Customer() {
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Greeting
    let CustomerName = sessionStorage.getItem("userName")
    var custname = CustomerName.replace(/"/g, '')

    let [greeting, setGreeting] = useState("")
    useEffect(() => {
        function Greeting() {

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

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------
    // category data
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

    // for search category set variables
    let [category, setCategory] = useState("");
    let [cname, setCName] = useState("");
    let [cresult, setResultc] = useState(false);
    let [cmsg, setcMsg] = useState("");

    async function FindCategory() {
        let result = await axios.get("http://localhost:3000/api/customer/viewCategoryByName/" + cname);
        // console.log(result.data)
        if (result.data.msg === "Record Present!") {
            setResultc(true);
            setCategory(result.data.category);
            setcMsg("");
            // alert(result.data.msg);
        }
        else {
            setResultc(false);
            // setCategory(result.data.msg);
            // alert(result.data.msg);
            setcMsg(result.data.msg)
        }
    }
    async function cleanCategoryData() {
        setResultc("");
        setCName("");
        setcMsg("");
    }
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------
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
    let [pmsg, setpMsg] = useState("");
    async function FindProduct() {
        let result = await axios.get("http://localhost:3000/api/customer/viewProductByName/" + pname);
        console.log(result.data)
        if (result.data.msg === "Record Present!") {
            setResultp(true);
            setProducts(result.data.product);
            setpMsg("")
        }
        else {
            setResultp(false);
            // setProducts(result.data.msg);
            setpMsg(result.data.msg)
            // alert(result.data.msg)
        }
    }
    async function cleanProductData() {
        setResultp("");
        setpMsg("");
    }
    // ------------------------------------------------------------------------------------------------------------------------------------------------------------

    // OWn data view
    let [customer, setCustomer] = useState("");
    // let [cemail, setCemail] = useState("");
    let [custresult, setResultcust] = useState(false);
    let pass = (sessionStorage.getItem("userPassword"));
    useEffect(() => {
        async function FindCustData() {
            try {
                let cemail = (sessionStorage.getItem("userEmail"));
                let result = await axios.get("http://localhost:3000/api/customer/findCustomerByEmail/" + cemail, {
                    headers: { "authorization": sessionStorage.getItem("token") }
                })
                console.log(result.data)
                if (result.data.msg === "Unathorized request or user") {
                    alert(result.data.msg);

                } else if (result.data.msg === "Record Present!") {
                    setResultcust(true);
                    setCustomer(result.data.customer);
                }
                else {
                    setResultp(false);
                    setCustomer(result.data.msg);
                    // alert(result.data.msg)
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        FindCustData();
    })

    // find own order
    let [order, setOrder] = useState("");
    let [oresult, setResulto] = useState(false);
    let [msgInfoO, setMsgInfoO] = useState("");
    let custEmail = sessionStorage.getItem("userEmail")
    //search order function
    useEffect(() => {
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
        FindOrder();
    })

    // // Delete Customer Acoount
    let cemail = (sessionStorage.getItem("userEmail"));
    let navigate = useNavigate();
    async function deleteEmployee() {
        let result = await axios.delete("http://localhost:3000/api/customer/deleteCustAccount/" + cemail)
        alert(result.data.msg)
        navigate("/");
    }




    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (
        <div>
            <body>

                <div className="text-center my-3 py-3 mx-auto adminHeading fs-4 fw-semibold " style={{ height: "65px", boxShadow: "0px 0px 5px blue" }}>
                    {greeting}
                </div>
                <div className="p-3 text-end mt-3 pe-5">
                    <a className="btn btn-outline-dark" href="/">Log Out</a>
                </div>
                {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                {/* Search Buttons */}
                <div className="container d-flex flex-wrap justify-content-evenly mx-5 ">
                    <div className="" style={{ width: "49%" }}>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item ">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <div className="input-group" style={{ height: "auto" }}>
                                        <input type="search" className="rounded-start border ps-2 border-end-0 border-dark mx-auto fs-6" id="categoryName"
                                            placeholder="Enter Category Name" name="cname" onChange={(event) => setCName(event.target.value)}
                                            aria-label="Enter Category Name" aria-describedby="button-addon2" style={{ width: "88.5%" }} />
                                        <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                            id="button-addon2" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                            onClick={FindCategory}><i className="bi bi-search"></i></button>
                                        <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                            id="button-addon2" aria-controls="panelsStayOpen-collapseOne" data-bs-target="#panelsStayOpen-collapseOne" onClick={cleanCategoryData}></button>
                                    </div>
                                    {/* </button> */}
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body ">
                                        <div className="my-1">
                                            {cmsg}
                                            {cresult ? "Category Id is " + category._id : ""}<br />
                                            {cresult ? "Category Name is " + category.Cname : ""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-2" style={{ width: "49%" }}>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <div className="input-group" style={{ height: "auto" }}>
                                        <input type="search" className="rounded-start border form-control border-end-0 border-dark mx-auto fs-6" id="categoryName" list="datalistOptions"
                                            placeholder="Enter Product Name" name="pname" onChange={(event) => setPName(event.target.value)}
                                            aria-label="Enter Product Name" aria-describedby="button-addon2" style={{ width: "85%" }} />
                                        <datalist id="datalistOptions">
                                            <option value="Vicks Vaporub"></option>
                                            <option value="Vicks Inhaler"></option>
                                        </datalist>
                                        <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                            id="button-addon2" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
                                            onClick={FindProduct}><i className="bi bi-search"></i></button>
                                        <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                            id="button-addon2" aria-controls="panelsStayOpen-collapseTwo" data-bs-target="#panelsStayOpen-collapseTwo" onClick={cleanProductData}></button>
                                    </div>
                                    {/* </button> */}
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body ">
                                        <div className="" >
                                            {pmsg}
                                            {presult ? "Product Id is " + product._id : ""}<br />
                                            {presult ? "Product Name is " + product.pname : ""}<br />
                                            {presult ? "Product Price is " + product.price : ""}<br />
                                            {presult ? "Product Quantity is " + product.quantity : ""}<br />
                                            {presult ? "Product Category Id " + product.cid : ""}<br />
                                            {presult ? "Product Category Name is " + product.categoryName : ""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                {/* Buttons */}
                <div className="container d-flex flex-wrap justify-content-evenly mt-5">
                    {/* Customer own data */}
                    <div>
                        <div className="card-body">
                            <button type="button" className="btn-outline-dark btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >My Details <i className="bi bi-person"></i></button>
                        </div>
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                            <div className="modal-dialog  modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">My Details!</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body mb-5 ps-5">
                                        <div className="my-1">
                                            {custresult ? "Name- " + customer.name : ""}<br />
                                            {custresult ? "Email- " + customer.email : ""}<br />
                                            <span>Password- {pass}</span><br />
                                            {/* {custresult ? "Password- "+customer.password:""}<br /> */}
                                            {custresult ? "Gender- " + customer.gender : ""}<br />
                                            {custresult ? "Age- " + customer.age : ""}<br />
                                            {custresult ? "MobileNo- " + customer.mobileNo : ""}<br />
                                            {custresult ? "Address- " + customer.address : ""}<br />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button className="btn btn-warning" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Delete Account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body text-center mt-3">
                                        <h5>Are You Sure To Delete Account?</h5>
                                    </div>
                                    <div className="text-center m-4">
                                        <button type="button" className="btn btn-secondary mx-4" data-bs-target="#staticBackdrop" data-bs-toggle="modal" >Cancel</button>
                                        <button type="button" className="btn btn-danger mx-4" onClick={deleteEmployee} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Category data */}
                    <div className="">
                        <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
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
                                            <thead className="table bg-white">
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

                    {/* Product Data */}
                    <div className="" >
                        <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
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

                    {/* Add Order  */}
                    <div>
                        <a href="/addOrder" target="popup" className="me-3"
                            onClick="window.open('/addOrder','popup','width=700,height=700'); return false;">
                            <button className="btn btn-outline-dark" >Shop Now <i
                                className="bi bi-cart"></i></button>
                        </a>
                    </div>

                    {/* Customer Own order */}
                    <div>
                        <div className="card-body">
                            <button type="button" className="btn-outline-dark btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop4" >My Order <i className="bi bi-cart"></i></button>
                        </div>
                        <div className="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                            <div className="modal-dialog  modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">My Order!</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body mb-5">
                                        <div className="" >
                                            {msgInfoO}
                                            {oresult ? "Email- " + order.customerEmail : ""}<br />
                                            {oresult ? "Category Id- " + order.categoryId : ""}<br />
                                            {oresult ? "Product Id- " + order.productId : ""}<br />
                                            {oresult ? "Product Qty Id- " + order.productqty : ""}<br />
                                            {oresult ? "Date Of Order- " + order.dateOfOrder : ""}
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* info with logo part */}
                <div className="container pt-5 d-flex flex-wrap " style={{ height: "420px" }}>
                    <div className="p-3 " style={{ height: "350px", width: " 47%" }}>
                        <img src={custPharmacyLogo} style={{ height: "100%", width: "100%" }} />
                    </div>

                    <div className='text-center ms-5' style={{ width: "45%", padding: "70px 30px" }}>
                        <h4 style={{ fontStyle: "oblique" }}>"Medication is our business - your health,<br />our mission. "</h4>
                        <p className=" text-center " style={{ fontSize: "19px" }}>A pharmacy that respects the autonomy and dignity of each patient. A pharmacy that promotes the right of self-determination and recognizes individual self-worth by encouraging patients to participate in decisions about their health. A pharmacy communicates with patients in terms that are understandable. In all cases, this is the pharmacy that respects personal and cultural differences among patients.</p>
                    </div>
                </div>
               {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
               {/* Product part */}
                <section>
                    <div className="container mt-5">
                        <h3 className='text-center text-success'>Products Available <i className="bi bi-capsule-pill"></i></h3>
                        <div className="d-flex flex-wrap">
                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img12} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body">
                                    <div className='text-center'>
                                        <button className=" mt-3  categoryProduct  btn fs-5 fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop7" >Vicks Vaporub</button>
                                    </div>
                                    <div className="modal fade" id="staticBackdrop7" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel7" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5 text-center" id="staticBackdropLabel7">Vicks Vaporub</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className='d-flex justify-content-center row'>
                                                        <div className='col-6'>
                                                            <h5>Vicks Vaporub 25ml Relief From Cold Cough Headache And Body Pain</h5>
                                                            <h6 className="ms-3 "><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>85</span><span className="text-decoration-line-through fw-lighter "><i className="bi bi-currency-rupee fw-lighter"></i>99</span></h6>
                                                        </div>
                                                        <div className='col-6'>
                                                            <img src={img12} className="card-img-top category-Product-img" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer" data-bs-dismiss="modal">
                                                    <Link to="/addOrder" target="_blank" type="button" className='btn btn-primary' style={{ textDecoration: "none" }}>Add to cart<i className="bi bi-cart"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img13} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body">
                                    <button className=" fs-5  categoryProduct  btn  fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop8" >Himalaya Baby Powder</button>
                                    <div className="modal fade" id="staticBackdrop8" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel8" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel8">Himalaya Baby Powder</h1>

                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className='d-flex justify-content-center row'>
                                                        <div className='col-6 p-5'>
                                                            <h5>Himalaya Baby Powder Bottle Of 400 G</h5>
                                                            <h6 className="ms-3 mt-4"><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>225</span><span className="text-decoration-line-through fw-lighter "><i className="bi bi-currency-rupee fw-lighter"></i>250</span></h6>
                                                        </div>
                                                        <div className='col-6'>
                                                            <img src={img13} className="card-img-top category-Product-img" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer" data-bs-dismiss="modal">
                                                    <Link to="/addOrder" target="_blank" type="button" className='btn btn-primary' style={{ textDecoration: "none" }}>Add to cart<i className="bi bi-cart"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img14} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body text-center">
                                    <button className=" mt-3  categoryProduct  btn fs-5 fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop9" >Vicks Inhaler</button>
                                    <div className="modal fade" id="staticBackdrop9" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel3" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel9">Vicks Inhaler</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className='d-flex justify-content-center row'>
                                                        <div className='col-6 p-4'>
                                                            <h5>Vicks Inhaler Keychain Pack Of 1</h5>
                                                            <h6 className="ms-3 mt-4"><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>62</span><span className="text-decoration-line-through fw-lighter "><i className="bi bi-currency-rupee fw-lighter"></i>75</span></h6>
                                                        </div>
                                                        <div className='col-6'>
                                                            <img src={img14} className="card-img-top category-Product-img" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer" data-bs-dismiss="modal">
                                                    <Link to="/addOrder" target="_blank" type="button" className='btn btn-primary' style={{ textDecoration: "none" }}>Add to cart<i className="bi bi-cart"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img15} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body text-center">
                                    <button className="  categoryProduct  btn fs-5 fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop10" >Optruma Eye Drops</button>
                                    <div className="modal fade" id="staticBackdrop10" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel10" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel10">Optruma Eye Drops</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className='d-flex justify-content-center row'>
                                                        <div className='col-6 p-4'>
                                                            <h5>Optruma Eye Drops, 10 ml</h5>
                                                            <h6 className="ms-3 mt-4"><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>118</span><span className="text-decoration-line-through fw-lighter "><i className="bi bi-currency-rupee fw-lighter"></i>225</span></h6>
                                                        </div>
                                                        <div className='col-6'>
                                                            <img src={img15} className="card-img-top category-Product-img" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer" data-bs-dismiss="modal">
                                                    <Link to="/addOrder" target="_blank" type="button" className='btn btn-primary' style={{ textDecoration: "none" }}>Add to cart<i className="bi bi-cart"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img16} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body text-center">
                                    <button className="  categoryProduct  btn fs-5 fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop11" >Himalaya Neem Face Wash</button>
                                    <div className="modal fade" id="staticBackdrop11" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel11" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel11">Himalaya Neem Face Wash</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className='d-flex justify-content-center row'>
                                                        <div className='col-6 p-4'>
                                                            <h5>Himalaya Purifying Neem Face Wash 150ml</h5>
                                                            <h6 className="ms-3 mt-4"><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>180</span><span className="text-decoration-line-through fw-lighter "><i className="bi bi-currency-rupee fw-lighter"></i>199</span></h6>
                                                        </div>
                                                        <div className='col-6'>
                                                            <img src={img16} className="card-img-top category-Product-img" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer" data-bs-dismiss="modal">
                                                    <Link to="/addOrder" target="_blank" type="button" className='btn btn-primary' style={{ textDecoration: "none" }}>Add to cart<i className="bi bi-cart"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img17} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body text-center">
                                    <button className="categoryProduct  btn fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop12" >Blood Glucose Monitoring System</button>
                                    <div className="modal fade" id="staticBackdrop12" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel12" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel12">Blood Glucose Monitoring System</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className='d-flex justify-content-center row'>
                                                        <div className='col-6'>
                                                            <h5>Blood Glucose Monitoring System APG01 with 25 Test Strips, 1 kit</h5>
                                                            <h6 className="ms-3 mt-4"><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>499</span><span className="text-decoration-line-through fw-lighter "><i className="bi bi-currency-rupee fw-lighter"></i>615</span></h6>
                                                        </div>
                                                        <div className='col-6'>
                                                            <img src={img17} className="card-img-top category-Product-img" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer" data-bs-dismiss="modal">
                                                    <Link to="/addOrder" target="_blank" type="button" className='btn btn-primary' style={{ textDecoration: "none" }}>Add to cart<i className="bi bi-cart"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                {/* -------------------------------------------------------------------------------------------------------------------------------------------*/}
                {/* Lab test offers */}
                <div className="container mt-4">
                    <div className="p-3">
                        <h3>Booked Lab Tests <i className="bi bi-clipboard2-pulse-fill"></i></h3>
                    </div>
                    <div className="d-flex flex-wrap my-3 justify-content-evenly">
                        <div className=" border border-1 border-dark rounded-4 "
                            style={{ height: "300px", width: "400px", backgroundImage: "linear-gradient(to bottom right, rgb(249, 249, 141), rgb(169, 245, 236))" }}>
                            <div className=" ps-3">
                                <span className="btn ms-2 rounded-4" style={{ backgroundColor: "rgb(216, 143, 143)" }}>73% OFF</span>
                                <img src={offer} className="" height="70px" style={{ marginLeft: "170px" }} />
                            </div>
                            <div className="d-flex justify-content-evenly">
                                <div className="ps-3">

                                    <h5 className=" text-center text-dark fw-bold">Full Body Health Checkup</h5>
                                    <p> It covers the Health Test like Heart, Kidney Function Test, Liver Function Test</p>
                                    <h6 className="ms-3 "><i className="bi bi-currency-rupee fw-lighter"></i><span
                                        className="text-decoration-line-through fw-lighter ">999</span><span
                                            className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>750</span></h6>
                                </div>
                                <div className="pe-2">
                                    <img src={img18} height="160px" width="150px" className="rounded-4" alt="..." />
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-outline-primary'><Link to="/AddOrder" style={{ textDecoration: "none" }}>Book Now</Link></button>
                            </div>
                        </div>

                        <div className=" border border-1 border-dark rounded-4 "
                            style={{ height: "300px", width: "400px", backgroundImage: "linear-gradient(to bottom right, rgb(249, 249, 141), rgb(169, 245, 236))" }}>
                            <div className=" ps-3">
                                <span className="btn ms-2 rounded-4" style={{ backgroundColor: "rgb(216, 143, 143)" }}>73% OFF</span>
                                <img src={offer} className="" height="70px" style={{ marginLeft: "170px" }} />
                            </div>
                            <div className=" d-flex justify-content-evenly">
                                <div className="ps-3">
                                    <h5 className="my-1 text-center text-dark">Kids Health Checkup</h5>
                                    <p>Check your child's blood pressure, vision, hearing, weight and height, calculate body mass index (BMI) </p>
                                    <h6 className="ms-3 "><i className="bi bi-currency-rupee fw-lighter"></i><span className="text-decoration-line-through fw-lighter ">999</span><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>750</span></h6>
                                </div>
                                <div className="pe-2">
                                    <img src={img19} height="150px" width="140px" className="rounded-4" alt="..." />
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-outline-primary'><Link to="/AddOrder" style={{ textDecoration: "none" }}>Book Now</Link></button>
                            </div>
                        </div>

                        <div className=" border border-1 border-dark rounded-4 "
                            style={{ height: "300px", width: "400px", backgroundImage: "linear-gradient(to bottom right, rgb(249, 249, 141), rgb(169, 245, 236))" }}>
                            <div className=" ps-3">
                                <span className="btn ms-2 rounded-4" style={{ backgroundColor: "rgb(216, 143, 143)" }}>73% OFF</span>
                                <img src={offer} className="" height="70px" style={{ marginLeft: "170px" }} />
                            </div>
                            <div className=" d-flex justify-content-evenly">
                                <div className="ps-3">
                                    <h5 className="my-1 text-center text-dark">Diabetes Checkup</h5>
                                    <p>Checks your average blood sugar levels over the past 2 or 3 months and how close they are to normal.</p>
                                    <h6 className="ms-3 "><i className="bi bi-currency-rupee fw-lighter"></i><span className="text-decoration-line-through fw-lighter ">999</span><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>750</span></h6>
                                </div>
                                <div className="pe-2">
                                    <img src={img20} height="160px" width="150px" className="rounded-4" alt="..." />
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-outline-primary'><Link to="/AddOrder" style={{ textDecoration: "none" }}>Book Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
                {/* products offer */}
                <div className="container mt-4">
                    <div className="p-3">
                        <h3>Best Products For you😍 </h3>
                    </div>

                    <div className="d-flex flex-wrap my-3 justify-content-evenly">

                        <div className=" border border-1 border-dark rounded-4 bg-light" style={{ height: "300px", width: "400px" }}>
                            <div className=" ps-3">
                                <span className="btn ms-2 rounded-4 btn-info" style={{}}>73% OFF</span>
                                <img src={offer} className="" height="80px" style={{ marginLeft: "150px" }} />
                            </div>
                            <div className=" d-flex justify-content-evenly">
                                <div className="ms-3">
                                    <h5>Blood Pressure Monitor</h5>
                                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet.</p>
                                    <h6 className="ms-3 fw-lighter text-decoration-line-through"><i
                                        className="bi bi-currency-rupee fw-lighter"></i>999</h6>
                                    <h5 className="ms-3"><i className="bi bi-currency-rupee"></i>450</h5>
                                </div>
                                <div className="p-2">
                                    <img src={bpmonitor} height="140px" width="150px" className="rounded-4"
                                        alt="bpmonitor" />
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-outline-primary'><Link to="/AddOrder" style={{ textDecoration: "none" }}>Book Now</Link></button>
                            </div>
                        </div>
                        <div className=" border border-1 border-dark rounded-4 bg-light" style={{ height: "300px", width: "400px" }}>
                            <div className=" ps-3">
                                <span className="btn ms-2 rounded-4 btn-info" style={{}}>73% OFF</span>
                                <img src={offer} className="" height="80px" style={{ marginLeft: "150px" }} />
                            </div>
                            <div className=" d-flex justify-content-evenly">
                                <div className="ms-3">
                                    <h5>Vicks Vaporub</h5>
                                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet.</p>
                                    <h6 className="ms-3 fw-lighter text-decoration-line-through"><i
                                        className="bi bi-currency-rupee fw-lighter"></i>999</h6>
                                    <h5 className="ms-3"><i className="bi bi-currency-rupee"></i>450</h5>
                                </div>
                                <div className="p-2">
                                    <img src={inheler} height="140px" width="150px" className="rounded-4"
                                        alt="bpmonitor" />
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-outline-primary'><Link to="/AddOrder" style={{ textDecoration: "none" }}>Book Now</Link></button>
                            </div>
                        </div>
                        <div className=" border border-1 border-dark rounded-4 bg-light" style={{ height: "300px", width: "400px" }}>
                            <div className=" ps-3">
                                <span className="btn ms-2 rounded-4 btn-info" style={{}}>73% OFF</span>
                                <img src={offer} className="" height="80px" style={{ marginLeft: "150px" }} />
                            </div>
                            <div className=" d-flex justify-content-evenly">
                                <div className="ms-3">
                                    <h5>Maxtra Syrup</h5>
                                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet.</p>
                                    <h6 className="ms-3 fw-lighter text-decoration-line-through"><i
                                        className="bi bi-currency-rupee fw-lighter"></i>999</h6>
                                    <h5 className="ms-3"><i className="bi bi-currency-rupee"></i>450</h5>
                                </div>
                                <div className="p-2">
                                    <img src={cyrup} height="140px" width="150px" className="rounded-4"
                                        alt="bpmonitor" />
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-outline-primary'><Link to="/AddOrder" style={{ textDecoration: "none" }}>Book Now</Link></button>
                            </div>
                        </div>


                    </div>
                </div>

            </body>
        </div >
    )
}
export default Customer;