<template>
    <div>
        <ul>
            <router-link to="/film/nowplaying" tag="li" active-class="myactive">正在熱映</router-link>
             <router-link to="/film/commingsoon" tag="li" active-class="myactive">正在上映</router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .myactive{
        color:orange;
        border-bottom: 2px solid orange
    }
    ul{
        display: flex;
        li{
            text-align: center;
            height:30px;
        }
    }
</style>
