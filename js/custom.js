
var thumb1 =  document.getElementById("thumb1");
var thumb1Src =  document.getElementById("thumb1").src;
var thumb2 =  document.getElementById("thumb2");
var thumb2Src =  document.getElementById("thumb2").src;
var thumb3 =  document.getElementById("thumb3");
var thumb3Src =  document.getElementById("thumb3").src;


thumb1.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb1Src
})
thumb2.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb2Src
})
thumb3.addEventListener("click",function(){
	document.getElementById("mainImg").src = thumb3Src
})





var thumb11 =  document.getElementById("thumb11");
var thumb11Src =  document.getElementById("thumb11").src;
var thumb22 =  document.getElementById("thumb22");
var thumb22Src =  document.getElementById("thumb22").src;
var thumb33 =  document.getElementById("thumb33");
var thumb33Src =  document.getElementById("thumb33").src;


thumb11.addEventListener("click",function(){
	document.getElementById("mainImg1").src = thumb11Src
})
thumb22.addEventListener("click",function(){
	document.getElementById("mainImg1").src = thumb22Src
})
thumb33.addEventListener("click",function(){
	document.getElementById("mainImg1").src = thumb33Src
})





/******* Sleder WRAPPER  PASSA PARA O LADO********/

const wrapper = document.querySelector('.wrapper')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }

  this.scrollLeft += startX - e.clientX
})



/******* Sleder WRAPPER  PASSA PARA O LADO********/



const wrapper2 = document.querySelector('.wrapper2')

let pressed1 = false
let startX1 = 0

wrapper2.addEventListener('mousedown', function (e) {
  pressed1 = true
  startX1 = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper2.addEventListener('mouseleave', function (e) {
  pressed1 = false
})

window.addEventListener('mouseup', function (e) {
  pressed1 = false
  wrapper2.style.cursor = 'grab'
})

wrapper2.addEventListener('mousemove', function (e) {
  if(!pressed1) {
    return
  }

  this.scrollLeft += startX1 - e.clientX
})

