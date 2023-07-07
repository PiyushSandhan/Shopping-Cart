function validate(){  
    var num=document.getElementById("Numberr").value;  
 
var firstpassword=document.getElementById("psw").value;  
var secondpassword=document.getElementById("psw-repeat").value; 

    var x=document.getElementById("email").value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
      return false;  
    }
    if (isNaN(num)){  
        alert("Enter Numeric value only");  
        return false;  
      }


     
    if(firstpassword==secondpassword){  
                return true;  
                }  
                else{  
                alert("password must be same!");  
                return false;  
                }
    }