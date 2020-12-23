<template>
    <div class="addItem">
        <input type="text" v-model="item.name">
        <font-awesome-icon icon="plus-square" @click="addItem" :class="[item.name ?'active' : 'inactive', 'plus']"/>
    </div>
</template>

<script>

export default {
    data: function(){
        return{
            item:{
                name: ""
            }
        }
    },

  methods:{
      addItem: function(){
          if(this.item.name == ''){
              return;
          }

          axios.post('api/item/store',{
              item: this.item,
          }).then(response => {
              if(response.status == 201){
                  this.item.name = '';
                  this.$emit('reloadList');
              }
          }).catch( error => {
              console.log(error);
          });
      },
  }

}
</script>

<style  scoped>
.addItem{
    display: flex;
    justify-content: center;
    align-items: center;
}
input{
    background: #f7f7f7;
    outline: none;
    width: 100%;
    margin: 10px;
    padding: 5px;
    border: 0px;
}
.plus{
    font-size: 20px;
}
.active{
    color: #00CE25;
}
.inactive{
    color: dimgrey;
}
</style>
