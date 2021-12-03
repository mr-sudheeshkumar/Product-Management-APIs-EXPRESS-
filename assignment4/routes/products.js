const express = require('express');
const router = express.Router();
router.use(express.json());

const product = require('../productslist');
const company  = require("../companieslist");
const seller = require("../sellerslist");
const { json } = require('body-parser');


router.post("/addprod",(req,res) =>{
    const pid = req.body.productid;
    const title = req.body.title;
    const price = req.body.price;
    const category = req.body.category;
    const companyid = req.body.companyid;
    const sellerid = req.body.sellerid;
    const prods = product.filter((p) => p.productid === pid);
    if(prods.length === 0){
        return res.json({data: "Product inserted successfully.",productid: pid,title: title,price: price,category: category,companyid: companyid,sellerid: sellerid});
    }else{
        return res.json({data: "Product  id already exists."});
    }
});

router.get("/getallprods",(req,res) =>{
    const cid = req.query.cid;
    const cname = company.filter((c) => c.companyid === cid);
    if(cname.length > 0){
        const prods = product.filter((p) => p.companyid === cid);
        if(prods.length > 0){
            var i = 0;
            var heading = "Products List of Company Name : " + cname[0].name;
            var result = " ";
            while(i < prods.length){
                result = result + JSON.stringify({productid: prods[i].productid,productname: prods[i].title,price: prods[i].price,category: prods[i].category}) + ",";
                i=i+1;
            }
            res.json( heading + result);
        }else{
            res.json({data: "No products found of Company Name : " + cname[0].name});
        }
    }else{
        res.json({data: "Company details not found."});
    }
    
});

router.get("/getallsellers",(req,res) =>{
    const sid = req.query.sid;
    const sname = seller.filter((s) => s.sellerid === sid);
    if(sname.length > 0 ){
        const prods = product.filter((p) => p.sellerid === sid);
        if(prods.length > 0){
            var i = 0;
            var heading = "Products List of Seller Name: " + sname[0].name;
            var result = " ";
            while(i < prods.length){
                result = result + JSON.stringify({productid: prods[i].productid,productname: prods[i].title,price: prods[i].price,category: prods[i].category}) + ",";
                i=i+1;
            }
            res.json( heading + result);
        }else{
            res.json({data: "No products found of Seller Name : " + sname[0].name});
        }
    }else{
        res.json({data: "Seller details Not Found !!!"});
    }
});

router.post("/updateproducts",(req,res) =>{
    const pid = req.query.pid;
    const pname = req.body.pname;
    const price = req.body.price;
    const category = req.body.category;
    const sellerid  = req.body.sid;
    const prods = product.filter((p) => p.productid === pid);
    if(prods.length === 1){
        res.json({data: "Product Details Updated Successfully.",productid: pid,updatedproductname: pname,updatedproductprice: price,updatedproductcategory: category,updatedsellerid: sellerid});
    }else{
        res.json({data: "Failed to find Product with id : " + pid});
    }
});

router.post("/delete/:pid",(req,res) =>{
    const pid = req.params.pid;
    const prods = product.filter((p) => p.productid === pid);
    if(prods.length ===1){
        res.json({data: "Product id : " + pid + " ,Product Name : " + prods[0].title + " deleted Successfully"});
    }else{
        res.json({data: "Product details with id : " + pid + " not Found !!!"});
    }
});

module.exports = router;