<template>
    <div id="footers">
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "footers",
        data() {
            return {
                msg: "底部内容123456789"
            }
        }
    }
</script>

<style scoped>
    #footers {
        line-height: 80px;
        float: left;
        background-color: #7b7b7b;
        width: 100%;
        height: 80px;
    }
</style>