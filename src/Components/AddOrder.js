import axios from "axios";
import { useState } from "react";

function AddOrder() {
    //order function
    let [customerEmail, setcustomerEmail] = useState();
    let [categoryId, setcategoryId] = useState();
    let [productId, setproductId] = useState();
    let [productqty, setproductqty] = useState();
    let [dateOfOrder] = useState(new Date());

    async function order(event) {
        event.preventDefault();
        var order = {
            customerEmail: customerEmail,
            categoryId: categoryId,
            productId: productId,
            productqty: productqty,
            dateOfOrder: dateOfOrder,
        };
        // console.log(order);
        try {
            let result = await axios.post("http://localhost:3000/api/order/addOrder", order);
            document.getElementById("order").innerHTML = result.data.msg;
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    }

    function cleanOrderMsg() {
        document.getElementById("order").innerHTML = "";
    }

    return (
        <div className="border" style={{ backgroundColor: "darkseagreen", height: "100vh" }}>
            <div className="pt-5 px-5">
                <a className="btn btn-outline-dark" href="/customer">Back</a>
            </div>
            <div className="container mt-2 p-3">
                <h3 className="text-center">Welcome to order page!</h3>
            </div>
            <div className="container" style={{ marginLeft: "500px" }}>
                <form className="p-4 rounded  mt-3 border bg-light" onKeyDown={cleanOrderMsg} onSubmit={order} style={{ height: "auto", width: "500px", boxShadow: "0px 0px 5px greenyellow" }}>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Customer Email:</label>
                        <div className="col-sm-8">
                            <input type="text" id="custEmail" className="form-control" onChange={(e) => setcustomerEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Category Id:</label>
                        <div className="col-sm-8">
                            <input type="number" id="cid" className="form-control" onChange={(e) => setcategoryId(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Product Id:</label>
                        <div className="col-sm-8">
                            <input type="number" id="pid" className="form-control" onChange={(e) => setproductId(e.target.value)} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">Product quantity:</label>
                        <div className="col-sm-8">
                            <input type="number" id="qty" className="form-control" onChange={(e) => setproductqty(e.target.value)} />
                        </div>
                    </div>
                    <div className="text-center">
                        <input type="submit" value="Order" className="m-3 btn btn-outline-dark" />
                        <input type="reset" value="Cancel" className="m-3 btn btn-outline-dark" onClick={cleanOrderMsg} /><br /><br />
                    </div>
                    <span id="order"></span>
                </form>

            </div>
        </div>
    )
}
export default AddOrder;