<template>
    <header id="header">
        <h1>橙子电影</h1>
    </header>
</template>
<script>
export default {
    name: 'Header'
    
}
</script>
<style scoped>
    #header{
        width: 100%; height: 50px;
        color: #fff; background: #e54847;
        border-bottom: 1px solid #e54847;
        position: fixed;
    }
    #header h1{
        font-size: 18px;
        text-align: center; line-height: 50px; font-weight: normal;
    }
</style>