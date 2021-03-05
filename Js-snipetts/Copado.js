onSubmit="window.location.replace('www.copado.com/thank-you')"



setTimeout(function(){window.parent.location.replace('https://www.copado.com/thank-you');},
 2000);


    // form submit window replace listener 

    var form = document.getElementById("pardot-form")
    if(form.addEventListener){
        form.addEventListener("submit", () => {window.location.replace('https://www.copado.com/thank-you/')}, false);  //Modern browsers
    }else if(form.attachEvent){
        form.attachEvent('onsubmit', () => {window.location.replace('https://www.copado.com/thank-you/')} );            //Old IE
    }

    <script>
    // form submit window replace listener 

var form = document.getElementById("pardot-form")

if(form.addEventListener){
    form.addEventListener("submit", ()=>{window.open('https://www.copado.com/thank-you/', '_parent')}, false);  //Modern browsers
}else if(form.attachEvent){
    form.attachEvent('onsubmit', ()=>{window.open('https://www.copado.com/thank-you/', '_parent')} );            //Old IE
}
</script>

function resolveAfter2Seconds() {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve('resolved');
    }, 2000);
    });
   }

   async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }

  timeCall=()=>{ 
    setTimeout(
        window.parent.location.replace("https://www.copado.com/thank-you/")
       ,2000 )
}
  ()=>{setTimeout(
    window.parent.location.replace("https://www.copado.com/thank-you/")
   ,2000 )}
//https://www.g2.com/gated_content/tokens/1c05397a-7207-44df-978c-2d8e6807345c

var form = document.getElementById("pardot-form")

if(form.addEventListener){
    form.addEventListener("submit", ()=>{setTimeout(
        window.parent.location.replace("https://www.copado.com/thank-you/")
       ,2000 )}, false);  //Modern browsers
}else if(form.attachEvent){
    form.attachEvent('onsubmit',()=>{setTimeout(
        window.parent.location.replace("https://www.copado.com/thank-you/")
       ,2000 )} );            //Old IE
}

//<script>
// form submit window replace listener 

var form = document.getElementById("pardot-form")

if(form.addEventListener){
form.addEventListener("submit", ()=>{window.open('https://www.g2.com/reports/grid-report-for-continuous-integration-winter-2021?featured=copado&secure%5Bgated_consumer%5D=44c1bfb6-d0d6-48e3-8661-f6130ac2f3ee&secure%5Btoken%5D=6fa1d7addcb90c241065970ac76661e08069d94c581ccdca03747d14033455b8&utm_campaign=gate-789004',"_blank"); window.parent.location.replace('https://www.copado.com/thank-you/')}, false);  //Modern browsers
}else if(form.attachEvent){
form.attachEvent('onsubmit', ()=>{window.open('https://www.g2.com/reports/grid-report-for-continuous-integration-winter-2021?featured=copado&secure%5Bgated_consumer%5D=44c1bfb6-d0d6-48e3-8661-f6130ac2f3ee&secure%5Btoken%5D=6fa1d7addcb90c241065970ac76661e08069d94c581ccdca03747d14033455b8&utm_campaign=gate-789004',"_blank"); 
window.open('https://www.copado.com/thank-you/')} );            //Old IE
}
//</script>

<script>
// form submit window replace listener 

var form = document.getElementById("pardot-form")

if(form.addEventListener){
form.addEventListener("submit", ()=>{window.open('https://www.g2.com/reports/grid-report-for-continuous-integration-winter-2021?featured=copado&secure%5Bgated_consumer%5D=44c1bfb6-d0d6-48e3-8661-f6130ac2f3ee&secure%5Btoken%5D=6fa1d7addcb90c241065970ac76661e08069d94c581ccdca03747d14033455b8&utm_campaign=gate-789004',"_blank"); window.parent.location.replace('https://www.copado.com/thank-you/')}, false);  //Modern browsers
}else if(form.attachEvent){
form.attachEvent('onsubmit', ()=>{window.open('https://www.g2.com/reports/grid-report-for-continuous-integration-winter-2021?featured=copado&secure%5Bgated_consumer%5D=44c1bfb6-d0d6-48e3-8661-f6130ac2f3ee&secure%5Btoken%5D=6fa1d7addcb90c241065970ac76661e08069d94c581ccdca03747d14033455b8&utm_campaign=gate-789004',"_blank"); 
window.parent.location.replace('https://www.copado.com/thank-you/')} );            //Old IE
}
</script>

let validate = () => {
    var classesNodeList = document.querySelectorAll(".form-field");
    var classes = Array.prototype.map.call(classesNodeList, function(element) {
      return element.value;
    });
    let result = true
    for (let 1 = 0, 1< classes.length; i++) {
        if (classes[i] != true)
        result= false;
        break;
    }
    return(result)
}
// good utility function for Pardot forms ////
function validateForm() {
   var a = document.getElementById("372431_528359pi_372431_528359").value
   var b = document.getElementById("372431_528361pi_372431_528361").value
   var c = document.getElementById("372431_528363pi_372431_528363").value
   var d = document.getElementById("372431_528365pi_372431_528365").value
   var e = document.getElementById("372431_528367pi_372431_528367").value
   var f = document.getElementById("372431_528369pi_372431_528369").value

    if (a == "") {
        console.log("enter all required information")
      return false;
    } else if (b == "" ){
        console.log("enter all required information")
        return false;
    } else if (c == "" || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(c)== false) {
        console.log("enter a valid email")
        return false;
    }  else if (d == "" ){
        console.log("enter all required information")
        return false;
    } else if (e == "" ){
        console.log("enter all required information")
        return false;
    }  else if (f == "" || f == "Country*" ){
        console.log("please select a country")
        return false;
    }

    window.open('https://www.g2.com/gated_content/tokens/1c05397a-7207-44df-978c-2d8e6807345c','_blank')
  
  }