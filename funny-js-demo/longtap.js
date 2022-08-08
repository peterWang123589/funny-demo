function longtap(selector,callback){
  const dom=document.querySelector(selector)
var longClick=0
dom.addEventListener('touchstart',function(e){
  longClick=0
  timeoutEvent=setTimeout(function(){
     console.log('这个为长按事件')
     callback(dom,e)
     longClick=1  
  },500)
  e.preventDefault()
})
dom.addEventListener('touchmove',function(e){
  clearTimeout(timeoutEvent);
  timeoutEvent = 0;
  e.preventDefault();
})
dom.addEventListener('touchend',function(){
  
  clearTimeout(timeoutEvent)
  if(timeoutEvent!=0 && !longClick){
    console.log('这个为点击事件')
  }
  return false
})
}
