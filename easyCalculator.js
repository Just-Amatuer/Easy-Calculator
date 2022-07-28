function calculatorFunction(){
    var numberOne=Number(document.getElementById("numberOne").value)
    var numberTwo=Number(document.getElementById("numberTwo").value)
    var choose=document.getElementById("choose").value
    if(choose === "collection"){
        result=document.getElementById("result").value = numberOne + numberTwo
    }else if(choose === "extraction"){
        result=document.getElementById("result").value = numberOne - numberTwo
    }else if(choose === "divide"){
        result=document.getElementById("result").value = numberOne / numberTwo        
    }else if(choose === "impact"){
        result=document.getElementById("result").value = numberOne * numberTwo
    }else{
        result=document.getElementById("result").value = "there were no results"
    }
}
