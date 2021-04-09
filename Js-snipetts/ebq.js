//Fixes webify typescript error

function browserCompatible() {
    if (window.safari !== undefined) {
		console.log("this is safari")
      $('.tb-hover-layer').wrap('<div class="tb-hover-layer-wrap tb-style1"></div>')
    }
  }


  <script>
  // form submit window replace listener 

var form = document.getElementById("pardot-form")

if(form.addEventListener){
  form.addEventListener("submit", ()=>{
      window.parent.location.replace("https://www.copado.com/thank-you/")
     }, false);  //Modern browsers
}else if(form.attachEvent){
  form.attachEvent('onsubmit',()=>{
      window.parent.location.replace("https://www.copado.com/thank-you/")
     } );            //Old IE
}
</script>

https://www.g2.com/gated_content/tokens/1c05397a-7207-44df-978c-2d8e6807345c
// utility function equalize height
function equalizeHeight(elClass) {
var maxHeight = 0;
document.querySelectorAll(elClass).forEach(element => {if(element.offsetHeight > maxHeight) {maxHeight = element.offsetHeight}})
 for (let i = 0; i < document.querySelectorAll(elClass).length; i++){
  document.querySelectorAll(elClass)[i].style.height=maxHeight+"px";
 }
 
};
equalizeHeight() 