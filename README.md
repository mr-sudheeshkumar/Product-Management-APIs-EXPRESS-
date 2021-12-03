# Product-Management-APIs(using EXPRESS)
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/mr-sudheeshkumar/Product-Management-APIs-EXPRESS-/blob/main/assignment4/app.js)

## **GOAL**
The Goal of this app is to show how data is being posted from "POSTMAN" and how it is routed thorugh our router using EXPRESS.

### ***Assignment 4***
##### *It's a simple app without MongoDB.*

## SCHEMA

#### PRODUCT
- product id : String
- title : String
- price : String
- category : Array of String
- company id : String
- seller id : Array of String


#### COMPANY
- company id : String
- name : String
- product ids : Array of String


#### SELLER 
- seller id : String
- name : String
- product ids : Array of String


## *POST REQUESTS:*


#### ADD 
- add new company
- add new seller
- add new product


#### RETRIEVE 
- fetch company details based on product name
- fetch seller details based on product name
- fetch all products of a company
- fetch all products of a seller


#### UPDATE 
- update company (add/remove products)
- update seller (add/remove products)
- update product (add/remove category)


#### DELETE 
- delete company
- delete seller
- delete product

## ***SCREENSHOTS***
- [Click Here](https://github.com/mr-sudheeshkumar/Product-Management-APIs-EXPRESS-/tree/main/assignment4/Postman)

#### ***SCREENSHOTS DEMO***
![1.png](https://github.com/mr-sudheeshkumar/Product-Management-APIs-EXPRESS-/blob/main/assignment4/Postman/1.png)
![1.png](https://github.com/mr-sudheeshkumar/Product-Management-APIs-EXPRESS-/blob/main/assignment4/Postman/8.png)
