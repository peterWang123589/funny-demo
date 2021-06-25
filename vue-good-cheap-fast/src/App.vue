<template>
  <div id="app">
<Toggler :size="3" :checked='checked[0]'  @updated='(value)=>{updateHandler(0,value)}'>Good</Toggler>
<Toggler :size="3" :checked='checked[1]' @updated='(value)=>{updateHandler(1,value)}'>Cheap</Toggler>
<Toggler :size="3" :checked='checked[2]'  @updated='(value)=>{updateHandler(2,value)}'>Fast</Toggler>
  </div>
</template>

<script>

import Toggler from './components/Tollger.vue'

export default {
  name: 'App',
  data(){
    return {
   checked:[false,false,false],
   indexs:[]
    }
  },
  components: {
Toggler

  },
  methods:{
    updateHandler(index,val){
      console.log(index,val)
      if(val&& !this.indexs.includes(index)){
        let newIndexs=[...this.indexs]
        newIndexs.push(index)
        this.indexs=newIndexs
      }
      if(!val&&this.indexs.includes(index)){
        let newIndexs=[...this.indexs]
        newIndexs.splice(this.indexs.indexOf(index),1)
         this.indexs=newIndexs
      }
      if(this.indexs.length === 3){
        let newIndexs=[...this.indexs]
        newIndexs.splice(0,1)
        this.indexs=newIndexs
      }
      
      let checked=[false,false,false]
    //  checked= this.checkHandler(1,this.checkHandler(0,this.checked))
      if(typeof this.indexs[0] !== 'undefined'){
     checked[this.indexs[0]]=true}
           if(typeof this.indexs[1] !== 'undefined'){
     checked[this.indexs[1]]=true}
      this.checked=checked
    },
  //   checkHandler(index,arr){
  //     let checked=arr
  //     console.log(this.indexs)
  //  if(typeof this.indexs[index] !== 'undefined'){
  //    checked[this.indexs[index]]=true
  //    return checked
  //  }
  //   }

  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
</style>
