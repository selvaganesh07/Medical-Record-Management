import axios from "axios";
import { useState } from "react";
function AddProduct() {
    let [productid, setProductId] = useState();
    let [pname, setpname] = useState();
    let [price, setprice] = useState();
    let [productqty, setproductqty] = useState();
    let [cid, setcid] = useState();
    let [cname, setcname] = useState();
    async function addProduct(event) {
        event.preventDefault();
        var products = {
            _id: productid,
            pname: pname,
            price: price,
            quantity: productqty,
            cid: cid,
            categoryName: cname
        };
        try {
            let result = await axios.post("http://localhost:3000/api/admin/addProduct", products,{
                headers: { "authorization": sessionStorage.getItem("token") }
            });
            if (result.data.msg === "Unathorized request or user") {
                alert(result.data.msg);
            } else {
                document.getElementById("pmsg").innerHTML = result.data.msg;
                console.log(result);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    function cleanpmsg(){
        document.getElementById("pmsg").innerHTML = "";
    }
    return (
        <div style={{ backgroundColor: "darkseagreen", height: "100vh" }}>
            <div className="pt-5 px-5">
                <a className="btn btn-outline-dark" href="/admin">Back</a>
            </div>
            <div className="container mt-3 text-center p-3">
                <h3>Add Product!</h3>
            </div>
            <div className="container mt-3">
                <form className=" p-5 mx-auto border" onSubmit={addProduct} onKeyDown={cleanpmsg} style={{ height: "auto", width: "550px",borderRadius:"10px", boxShadow: "0px 0px 5px black", backgroundColor: "rgb(218, 245, 236)" }}>
                   
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Enter id:</label>
                        <div className="col-sm-8">
                            <input type="number" id="pid" className="form-control" onChange={(e) => setProductId(e.target.value)}  />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Product Name:</label>
                        <div className="col-sm-8">
                            <input type="text" id="pname" className="form-control" onChange={(e) => setpname(e.target.value)}  />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Product Price:</label>
                        <div className="col-sm-8">
                            <input type="number" id="price" className="form-control" onChange={(e) => setprice(e.target.value)}  />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Product quantity:</label>
                        <div className="col-sm-8">
                            <input type="number" id="qty" className="form-control" onChange={(e) => setproductqty(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Category Id:</label>
                        <div className="col-sm-8">
                            <input type="number" id="cid" className="form-control" onChange={(e) => setcid(e.target.value)}  />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Category name:</label>
                        <div className="col-sm-8">
                            <input type="text" id="cname" className="form-control" onChange={(e) => setcname(e.target.value)}/>
                        </div>
                    </div>
                    
                    <input type="submit" value="Add Product" className="mx-5 btn btn-outline-dark" />
                    <input type="reset" value="Cancel" className=" mx-5 btn btn-outline-dark" onClick={cleanpmsg}/><br /><br />
                    <span id="pmsg"></span>

                </form>
            </div>


        </div>
    )
}
export default AddProduct;