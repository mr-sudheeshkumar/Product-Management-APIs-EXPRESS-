const express = require('express');
const router = express.Router();
router.use(express.json());

const company = require("../companieslist");
const product = require("../productslist");

router.post("/addcompany",(req,res) =>{
    const companyid = req.body.companyid;
    const name = req.body.name;
    const productsid = req.body.productsid;
    const clist = company.filter((c) => c.companyid === companyid);
    if(clist.length ===  0){
        res.json({data: "Company Inserted Successfully.",companyid: companyid,name: name,productsid: productsid});
    }else{
        res.json({data: "Company ID already exists."});
    }
});

router.post("/getcomname",(req,res) =>{
    const prodname = req.query.pname;
    const prods = product.filter((p) => p.title == prodname);
    if(prods.length === 0){
        res.json({data: "Product details not found"});
    }else{
        const cid = prods[0].companyid;
        const comps = company.filter((c) => c.companyid === cid);
        if(comps.length === 0){
            res.json({data : "No company details were found."});
        }else{
            res.json({data : "Company Details of " + prodname,companyid: cid,companyname: comps[0].name});
        }
    }
});

router.post("/updatecompany",(req,res) =>{
    const cid = req.query.cid;
    const cname = req.body.cname;
    const pids = req.body.pids;
    const comp = company.filter((c) => c.companyid === cid);
    if(comp.length === 1){
        res.json({data: "Company Details Updated Successfully.",companyid: cid,updatedcompanyname: cname,updatedproductsid: pids});
    }else{
        res.json({data: "Failed to find company with id : " + cid});
    }
});

router.post("/delete/:cid",(req,res) =>{
    const cid = req.params.cid;
    const comps = company.filter((c) => c.companyid === cid);
    if(comps.length === 1){
        res.json({data: "Company id : " + cid + " ,Company Name : " + comps[0].name + " deleted Successfully"});
    }else{
        res.json({data: "Company details with id : " + cid + " not Found !!!"});
    }
});

module.exports = router;