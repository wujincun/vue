<template>
    <header msg="something interesting"></header>
    <div id="app">
        <!--<h1>{{title}}</h1>-->
        <h1 v-text="title"></h1>
        <input v-model="newItem" @keyup.enter="addNew">
        <ul>
            <li v-for="item in items" :class="[liClass,{finished:item.isFinished}]" @click="toggleFinish(item)">
                {{item.label}}
            </li>
        </ul>
        <p>child tells me:{{childWords}}</p>
        <component-a v-on:child-tell-me-something="listenToMyBoy"></component-a><!--在component里注册的组件名称每一个驼峰大写的地方都要转换成-小写的形式-->
    </div>
    <Footer></Footer>
</template>

<script>
    import Store from './store'
    /*import Header from './header'
    import Footer from './footer'*/
    import ComponentA from './components/componentsA'
    export default {
        data () {
            return {
                title: 'this is a todo list!',
                items: Store.fetch(),
                liClass: 'thisisliClass',
                newItem: '',
                childWords:''//如果不在data声明，不会在p标签中显示
            }
        },
        components:{
           /* Header,
            Footer,*/
            ComponentA
        },//模块必须引入注册
        methods: {
            toggleFinish: function (item) {
                item.isFinished = !item.isFinished;
            },
            addNew: function () {
                this.items.push({
                    label: this.newItem,
                    isFinished: false
                });
                this.newItem = "";
                this.$broadcast('onAddnew',this.items)//传到子组件
            },
            listenToMyBoy:function (msg) {
                this.childWords = msg;
            }
        },
        watch:{
            items:{
                handler:function (items) {
                    Store.save(items)
                },
                deep:true//如果不这样写，没有深层赋值，那么items里只是一个key更改的话不会检测到
            }
        },
      events:{
        'child-tell-me-something': function (msg) {//子组件components里用$dispatch，用v-on获取不到，要用events
           this.childWords = msg
        }
      }

    }
</script>

<style>
    .finished {
        text-decoration: underline;
    }

    html {
        height: 100%;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    #app {
        color: #2c3e50;
        margin-top: -100px;
        max-width: 600px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
    }

    #app a {
        color: #42b983;
        text-decoration: none;
    }

    .logo {
        width: 100px;
        height: 100px
    }
</style>
