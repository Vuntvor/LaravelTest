<template>
    <div class="errors-place">Пожалуйста, выберите {{ error.name }}.</div>
    <!--    <div class="alert alert-danger" role="alert">-->
    <!--    Ошибка! Введите имя задачи!-->
    <!--    </div>-->
</template>

<script>


export default {
    props: ['error'],
    name: "Error",

}


</script>

<style>
.errors-place {
    position: static;
    border-radius: 30px;
    padding: 1rem 1rem;
    border: 5px solid #f5c2c7;
    margin-bottom: 1rem;
    color: #842029;
    background-color: #f8d7da;
}
</style>
