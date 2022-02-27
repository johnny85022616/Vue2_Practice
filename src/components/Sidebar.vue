<template>
    <aside>
        Sidebar
        <ul>
            <li>1111</li>
            <li>2222</li>
            <li>3333</li>
        </ul>
    </aside>
</template>

//加上scoped 屬性之後該style只會影響該組件
<style lang="scss" scoped>
    ul{
        li{
            background: blue ;
        }
    }
</style>
