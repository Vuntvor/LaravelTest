export const state = () => ({
    tasks: [],
    errors: []
})


export const mutations = {
    ADD_TASK(state, task) {

        state.tasks = [{
            taskName: task.taskName,
            taskCategory: task.taskCategory,
            taskSelect: task.taskSelect,
            done: false
        }, ...state.tasks];
        //state.tasks.push({ content: task, done: false })
        //state.tasks.unshift({ content: task, done: false })
    },

    REMOVE_TASK(state, task) {
        state.tasks.splice(state.tasks.indexOf(task), 1);
    },

    TOGGLE_TASK(state, task) {
        task.done = !task.done;
    },
    REVERSE_TASK(state, task) {
        state.tasks.reverse();
    },
    ADD_ERROR(state, error) {
        state.errors = [{message: error.errorMessage, name: error.errorName}, ...state.errors];
        //console.log(this.state.errors);
    },
    REMOVE_ERROR(state, error) {
        state.errors.splice(state.errors.indexOf(error), 1);
    }
}

