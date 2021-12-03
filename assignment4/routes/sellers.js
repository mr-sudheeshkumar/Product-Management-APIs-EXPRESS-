const express = require('express');
const router = express.Router();
router.use(express.json());

const sellers = require("../sellerslist");
const products = require("../productslist");
const seller = require('../sellerslist');

router.post("/addseller",(req,res) =>{
    const sellerid = req.body.sellerid;
    const name = req.body.name;
    const productid = req.body.productid;

    const seller = sellers.filter((s) => s.sellerid === sellerid);
    if(seller.length === 0){
        res.json({data: "Seller Added successfully.",sellerid: sellerid,name: name,productid: productid});
    }else{
        res.json({data: "Seller id is already taken."});
    }
});

router.post("/getseller",(req,res) =>{
    const pname = req.query.pname;
    const prods = products.filter((p) => p.title === pname);
    if(prods.length === 0){
        res.json({data: "Product details not found."});
    }else{
        const sid = prods[0].sellerid;
        const seller = sellers.filter((s) => s.sellerid === sid);
        if(seller.length === 0){
            res.json({data: "Seller details not found."});
        }else{
            res.json({data: "Seller details",sellerid: sid,name: seller[0].name,productid: seller[0].productid});
        }
    }
});

router.post("/updatesellers",(req,res) =>{
    const sid = req.query.sid;
    const sname = req.body.sname;
    const pids = req.body.pids;
    const sellers = seller.filter((s) => s.sellerid === sid);
    if(sellers.length === 1){
        res.json({data: "Seller Details Updated Successfully.",sellerid: sid,updatedsellername: sname,updatedproductsid: pids});
    }else{
        res.json({data: "Failed to find Seller with id : " + sid});
    }
});

router.post("/delete/:sid",(req,res) =>{
    const sid = req.params.sid;
    const sellers = seller.filter((s) => s.sellerid === sid);
    if(sellers.length === 1){
        res.json({data: "Seller id : " + sid + " ,Seller Name : " + sellers[0].name + " deleted Successfully"});
    }else{
        res.json({data: "Seller details with id : " + sid + " not Found !!!"});
    }
});

module.exports = router;