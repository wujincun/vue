<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <button @click="onClickMe">open mouse!</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello from component a!'
            }
        },
        methods:{
            onClickMe:function () {
                //this.$emit('child-tell-me-something',this.msg)
                this.$dispatch('child-tell-me-something',this.msg)//传到父组件
            }
        },
        events:{
          'onAddnew':function (items) {
            console.log(items)
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }
</style>
