<template>
    <main>
        <h1>TO DO LIST</h1>
        <p>Create a list of tasks :</p>

        <div class="create-new">
            <input class="input-one" type="text" v-model="newTaskName" placeholder="Add a new task"/>
            <input class="input-one" type="text" v-model="newTaskCategory" placeholder="Add a new category"/>
            <!--            <v-select :options="[{label: 'Canada', code: 'ca'}]"></v-select>-->
            <!--            <input class="input-one" type="text" v-model="newTaskSelect" placeholder="Select" />-->
            <select v-model="newTaskSelect">
                <option disabled value="">Please select one</option>
                <option value="выбор1">Значение 1</option>
                <option value="выбор2">Значение 2</option>
                <option value="выбор3">Значение 3</option>
            </select>
            <button @click="addTask()">ADD</button>
            <button v-if="isAllowedTasksCount()" @click="reverseTask">Reverse</button>
        </div>

        <div class="tasks">
            <Task v-for="(task, i) in $store.state.tasks"
                  :key="i"
                  :task="task"/>
        </div>
        <div class="error-block">

            <ErrorsBlock/>
        </div>
        <button @click="gotoGoogle()">Google</button>
    </main>
</template>

<script>
import Task from './Task'
import ErrorsBlock from './ErrorsBlock'

export default {
    components: {Task, ErrorsBlock},
    data() {
        return {
            newTaskName: '',
            newTaskCategory: '',
            newTaskSelect: '',
        }
    },
    methods: {
        addTask() {

            if (this.validate()) {
                // console.log(this.newTaskSelect);
                this.$store.commit('ADD_TASK', {
                    taskName: this.newTaskName,
                    taskCategory: this.newTaskCategory,
                    taskSelect: this.newTaskSelect,
                });
                this.newTaskName = '';
                this.newTaskCategory = '';
                this.newTaskSelect = '';
            }
        },
        reverseTask() {
            if (this.isAllowedTasksCount) {
                this.$store.commit('REVERSE_TASK');
            }
        },
        isAllowedTasksCount() {
            return this.$store.state.tasks.length > 2
        },
        validate() {
            if (this.$store.state.errors.length > 0) {
                for (let n = this.$store.state.errors.length; n--;) {
                    this.$store.commit('REMOVE_ERROR', this.error);
                }
            }
            let errorsArray = ['имя задачи', this.newTaskName, 'категорию задачи', this.newTaskCategory, 'тип задачи', this.newTaskSelect];
            if (errorsArray.includes("")) {
                for (let i in errorsArray) {
                    if (errorsArray[i] === "") {
                        this.$store.commit('ADD_ERROR', {
                            errorMessage: "ОШИБКА",
                            errorName: errorsArray[i - 1],
                        })
                    }
                }
                this.$store.state.errors.reverse()
            } else {
                return true
            }
        },
        gotoGoogle() {
            window.open("/new-page");
        },
    }
}

</script>


<style>

main {
    background-color: lightblue;
}

input {
    color: #ff0000

}

main .input-one {
    border-color: #2c3e50;

}



</style>
