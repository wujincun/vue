<template>
    <div id="app">
        <!--<h1>{{title}}</h1>-->
        <h1 v-text="title"></h1>
        <input v-module="newItem" v-on:keyup.enter="addNew">
        <ul>
            <li v-for="item in items" :class="[liClass,{finished:item.isFinished}]" @click="toggleFinish(item)">
                {{item.label}}
            </li>
        </ul>
    </div>
</template>

<script>


    export default {
        data () {
            return {
                title: 'this is a todo list!',
                items: [
                    {
                        label: 'coding',
                        isFinished: false
                    },
                    {
                        label: 'walking',
                        isFinished: true
                    }
                ],
                liClass:'thisisliClass',
                newItem:''
            }
        },
        methods:{
            toggleFinish:function (item) {
                item.isFinished = !item.isFinished;
            },
            addNew:function () {
                console.log(this.newItem)
            }
        }
    }
</script>

<style>
    .finished{
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
