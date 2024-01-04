import axios from "axios";
import { useState, useEffect } from "react";

function Category(){
    let [category, setCategory] = useState("");
    let [cname, setCName] = useState("");
    let [cresult, setResultc] = useState(false);
    let [cmsg,setCMsg]=useState("")

    async function FindCategory() {
       
        let result = await axios.get("http://localhost:3000/api/customer/viewCategoryByName/" + cname);
        console.log(result.data)
        if (result.data.msg === "Record Present!") {
            setResultc(true);
            setCategory(result.data.category);
            // alert(result.data.msg);
        }
        else {
            setResultc(false);
            setCMsg(result.data.msg);
            // alert(result.data.msg);
        }
    }
    async function cleanCategoryData() {
        setResultc("");
        setCName("");
    }
// --------------------------------------------------------
let [Categories, setCategories]=useState([]);
useEffect(()=>{
    async function viewCategoryData() {
        try{
            let result=await axios.get("http://localhost:3000/api/admin/viewAllCategory")
            setCategories(result.data);
        }
        catch(error){
            console.log(error);
        } 
    }
    viewCategoryData();
},[])
    let CategoryData=Categories.map(obj=><tr key={obj._id}><td>{obj._id}</td><td>{obj.Cname}</td></tr>)


 // --------------------------------------------------------------------------------------------------------------------
    return(
        <div>
            <body style={{backgroundColor:"rgb(179, 224, 255)", height:"100vh"}}>
            <div className="text-end pt-3 me-5 ">
                <a className="btn btn-outline-dark" href="/admin">Back<i className="fa-solid fa-arrow-right-from-bracket"></i></a>
            </div>
            <div className="container pb-4  text-center"><h3>Welcome to category page!</h3></div>
            
            <div className="container">
             <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item ">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne" style={{ height: "50px" }}>
                                <div className="input-group" style={{ height: "auto" }}>
                                    <input type="search" className="ps-3 rounded-start border  border-end-0 border-dark mx-auto fs-6" id="categoryName"
                                        placeholder="Enter Category Name" name="cname" onChange={(event) => setCName(event.target.value)}
                                        aria-label="Enter Category Name" aria-describedby="button-addon2" style={{height: "50px", width: "94%" }} />
                                    <button className=" btn btn-outline-secondary border border-1 border-start-0 border-dark" type="button" data-bs-toggle="collapse"
                                        id="button-addon2" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                        onClick={FindCategory} style={{ width: "45px" }}><i className="bi bi-search"></i></button>
                                    <button className="btn btn-close border border-1 border-dark border-start-0 p-2 pb-3" type="button" data-bs-toggle="collapse"
                                        id="button-addon2" style={{ height: "25px" }} aria-controls="panelsStayOpen-collapseOne" data-bs-target="#panelsStayOpen-collapseOne" onClick={cleanCategoryData}></button>
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
            <div className="container">
            
            <h4 className="m-5 mb-3 text-center">Category Table</h4>
            <table className=" table mx-auto border border-dark  bg-light shadow-sm" style={{width:"50%"}}>
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
            </body>
        </div>
    )
}
export default Category;