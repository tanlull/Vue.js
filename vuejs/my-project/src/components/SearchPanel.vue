<template>
 <div class="ui teal center aligned segment">
   <div class="ui fluid action input">
     <a class="ui teal ribbon label">
       <h4>Contacts</h4>
     </a>
     <input type="text" placeholder="Search...">
     <div class="ui button">Search</div>
     <div class="ui orange button" @click="onClickedAdd">Add</div>
   </div>
 </div>
</template>

<script>
export default {
 name: 'searchpanel',
 methods:{
    onClickedAdd(){
        this.$emit('onClickedAdd')
    }
 },
 data () {
   return {
     msg: 'Welcome to Search Panel'
   }
 }
}
</script>
