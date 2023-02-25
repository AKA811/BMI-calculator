const express=require('express');
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
//we can get access to form data

//Calculator
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
});
app.post("/",function(req,res)
{
var num1=Number(req.body.num1);
var num2=Number(req.body.num2);
var result=num1+num2;
res.send("Added Result = "+result);
});

//BMI Calculator
app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html")
});
app.post("/bmicalculator",function(req,res)
{
var n1=Number(req.body.weight);
var n2=Number(req.body.height);
var BMI=n1/(n2*n2);
res.send("BMI Value= "+BMI)
});
app.listen(3000,function()
{
console.log("Our server started in port 3000");
});



//__dirname shows the file path in which the server is operating therby making it easy to be operable in the cloud
