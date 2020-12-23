<template>
  <div class="main">
      <div class="heading">
          <h5 id="title">ToDo Lsit</h5>
          <addItemForm v-on:reloadList="getList()"/>
      </div>
      <listView :items="items" v-on:reloadList="getList()"/>
  </div>
</template>

<script>
import addItemForm from './addItemForm.vue';
import listView from './lsitView.vue';

export default {
   components:{
       addItemForm,
       listView,
   },

   data(){
       return{
           items:[]
       }
   },

   methods: {
       getList(){
           axios.get('api/items').then(response => {
               this.items = response.data;
           }).catch( error => {
               console.log(error);
           });
       }
   },

   created() {
       this.getList();
   }
}
</script>

<style scoped>
 .main{
     width: 350px;
     margin: auto;
 }
 .heading{
     background-color: #e6e6e6;
     padding: 10px;
 }

 #title{
     text-align: center;
 }
</style>

