========================================================================================================================================================
Index.js
=========================================================================================================================================================


var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.post("/registercustomer", function(req, res){
    mongoClient.connect(connectionString, function(err, clientObject){
        if(!err){
            var dbo = clientObject.db("ishopdb");
            var data = {
                "UserId":req.body.UserId,
                "UserName": req.body.UserName,
                "Password": req.body.Password,
                "Email": req.body.Email,
                "Mobile": req.body.Mobile
            };
            dbo.collection("tblcustomers").insertOne(data, function(err, result){
                if(!err) {
                    console.log("Record Inserted");
                }
            })
        }
    })
})
app.get("/getcustomers", function(req, res){
    mongoClient.connect(connectionString, function(err, clientObject){
         if(!err){
             var dbo = clientObject.db("ishopdb");
             dbo.collection("tblcustomers").find().toArray(function(err, documents){
                if(!err){
                    res.send(documents);
                }
             })
         }
    })
})
app.get("/getproducts", function(req, res){
    mongoClient.connect(connectionString, function(err, clientObject){
        if(!err){
            var dbo = clientObject.db("ishopdb");
            dbo.collection("tblproducts").find().toArray(function(err, documents){
                res.send(documents);
            })
        }
    })

})
app.listen(3000);
console.log(`Server Started : http://127.0.0.1:3000`);

=============================================================================================================================================================
CustomerLogin.html
====================================================================================================================================================================================

<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <script src="../node_modules/jquery/dist/jquery.js"></script>
        <script src="../node_modules/jquery.cookie/jquery.cookie.js"></script>
        <script>
            $(function(){
                $("#btnLogin").click(function(){
                    var userid = $("#UserId").val();
                    var password = $("#Password").val();
                   
                    $.ajax({
                        method: "GET",
                        url: "http://127.0.0.1:3000/getcustomers&quot;,
                        success: function(data){
                            var userdetails = data.find(user=> user.UserId==userid);
                            if(userdetails.UserId==userid && userdetails.Password==password) {
                                alert("Login Success");
                                $.cookie("userid", userid);
                                location.href="catalog.html";
                            } else {
                                alert("Invalid UserId / Password");
                            }
                        }
                    })
                   
                })
            })
        </script>
    </head>
    <body>
        <h2>Customer Login</h2>
        <dl>
            <dt>UserId</dt>
            <dd><input type="text" id="UserId"></dd>
            <dt>Password</dt>
            <dd><input type="password" id="Password"> </dd>
        </dl>
        <button id="btnLogin">Login</button>
        <div>
            New User <a href="CustomerRegister.html">Register</a>
        </div>
    </body>
</html>

==========================================================================================================================================================
CustomerRegister.html
===========================================================================================================================================================
<!DOCTYPE html>
<html>
    <head>
        <title>Register Customer</title>
        <script src="../node_modules/jquery/dist/jquery.js"></script>
        <script>
            $(function(){
                $("#btnRegister").click(function(){
                    var userDetails = {
                        "UserId": $("#UserId").val(),
                        "UserName": $("#UserName").val(),
                        "Password": $("#Password").val(),
                        "Email": $("#Email").val(),
                        "Mobile": $("#Mobile").val()
                    };
                    $.ajax({
                        method: "POST",
                        url: "http://127.0.0.1:3000/registercustomer&quot;,
                        data: userDetails,
                    })
                    alert("Registered Successfully..");
                    location.href="CustomerLogin.html";
                })
            })
        </script>
    </head>
    <body>
        <h2>Register Customer</h2>
        <dl>
            <dt>User Id</dt>
            <dd><input type="text" id="UserId"></dd>
            <dt>User Name</dt>
            <dd><input type="text" id="UserName"></dd>
            <dt>Password</dt>
            <dd><input type="password" id="Password"></dd>
            <dt>Email</dt>
            <dd><input type="email" id="Email"></dd>
            <dt>Mobile</dt>
            <dd><input type="text" id="Mobile"></dd>
        </dl>
        <button id="btnRegister">Register</button>
        <div>
            Existing User <a href="Customerlogin.html">Login</a>
        </div>
    </body>
</html>

===================================================================================================================================================
Catalog.html
==========================================================================================================================================

<!DOCTYPE html>
<html>
    <head>
        <title>jQuery</title>
        <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
        <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">

        <script src="../node_modules/jquery/dist/jquery.js"></script>
        <script src="../node_modules/jquery.cookie/jquery.cookie.js"></script>
        <script>
            $(function(){
                 var userid = $.cookie("userid");
                 if(userid==undefined) {
                   location.href="CustomerLogin.html";
                 }
                 $("#userid").html(userid);

                 fetch('http://fakestoreapi.com/products&#39;)
                 .then(response=> response.json())
                 .then(data=> {
                     $.each(data, function(key, product){
                         $(`
                           <div class="card m-2 p-2" style="width:200px">
                             <img src=${product.image} class="card-img-top" height="150">
                             <div class="card-header" style="height:180px">
                                <p>${product.title}</p>
                             </div>
                             <div class="card-footer">
                                <p>${product.price}</p>
                                <button value=${product.id} id="add" class="btn btn-danger w-100"><span class="bi bi-cart4"></span> Add to Cart</button>
                             </div>
                           </div>
                         `).appendTo("#catalog");
                     })
                 })
                 $(document).on("click","#add",function(event){
                     alert("Add Clicked - " + event.target.value);
                 })

                 $("#btnSignout").click(function(){
                    $.removeCookie("userid");
                    location.href="CustomerLogin.html";
                    alert("Signed out Successfully..");
                 })
               
            })
        </script>
    </head>
    <body>
       <div class="container-fluid">
         <h2>Products Catalog <span id="userid"></span> <span><button id="btnSignout" class="btn btn-link">Signout</button></span> </h2>
         <div class="d-flex flex-wrap" id="catalog">

         </div>
       </div>
    </body>
</html>
