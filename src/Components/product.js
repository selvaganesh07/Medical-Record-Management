import axios from "axios";
import { useEffect,useState } from "react";
function Product(){
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
    // -------------------------------------------------------------------------------------------------
    let [Products, setAllProducts]=useState([]);
    useEffect(()=>{
        async function viewProductData() {
            try{
                let result=await axios.get("http://localhost:3000/api/admin/viewAllProducts")
                setAllProducts(result.data);
            }
            catch(error){
                console.log(error);
            } 
        }
        viewProductData();
    },[])
    let ProductData=Products.map(obj=><tr key={obj._id}><td>{obj._id}</td><td>{obj.pname}</td><td>{obj.price}</td><td>{obj.quantity}</td><td>{obj.cid}</td><td>{obj.categoryName}</td></tr>)
// ------------------------------------------------------------------------------------------------------------------------------------------------

    return (
        <div className="bg-light" style={{height:"100vh"}} >
            <body style={{backgroundColor:"rgb(179, 224, 255)", height:"100vh"}}>
            <div className="text-end pt-3 me-5 ">
                <a className="btn btn-outline-dark" href="/admin">Back<i className="fa-solid fa-arrow-right-from-bracket"></i></a>
            </div>
            <div className="container pb-4  text-center"><h3>Welcome to Product page!</h3></div>
            <div className="container">
            <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <div className="input-group" style={{ height: "auto" }}>
                                    <input type="search" className="rounded-start border form-control border-end-0 border-dark mx-auto fs-6" id="categoryName" list="datalistOptions"
                                        placeholder="Enter Product Name" name="pname" onChange={(event) => setPName(event.target.value)}
                                        aria-label="Enter Product Name" aria-describedby="button-addon2" style={{ width: "88.5%" }} />
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
            <div className="container">
            
            <h3 className="m-5 text-center">All Product Details!</h3>
            <table className=" table mx-auto border border-dark " style={{width:"70%"}}>
                <thead className="table bg-white">
                    <tr className="text-center border border-dark">
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
            </body>
    
            
           
        </div>
    )
}
export default Product;