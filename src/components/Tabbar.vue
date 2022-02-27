<template>
    <nav>
        <ul>
            <!-- 聲明式導航-->
            <!-- tag 為此<router-link>要以什麼dom元素呈現 -->
            <!-- activeClass 綁定匹配到相應路由時所要呈現的style -->
            <router-link to="/center" tag="li" activeClass="myactive">Center</router-link>
            <router-link to="/film" tag="li" activeClass="myactive">Film</router-link>
            <router-link to="/sinema" tag="li" activeClass="myactive">Senima</router-link>
            <router-link to="/test" tag="li" activeClass="myactive">Test</router-link>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    .myactive{
        color: red;
    }
    nav{
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        ul{
            display: flex;
            li{
                text-align: center;
            }
        }
    }
</style>
