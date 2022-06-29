<template>
    <div class="content">{{ task.taskName }}, {{ task.taskCategory }}, {{ task.taskSelect }}</div>
</template>

<script>
export default {
    props: ['task'],
    name: "TaskPage"
}
</script>

<style scoped>

</style>
