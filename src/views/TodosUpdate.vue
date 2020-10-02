<template>

  <div v-if="selectedTodo">
    <todo-form :todo="selectedTodo" @processTodo="updateTodo"></todo-form>
  </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
import TodoForm from "@/components/TodoForm";

export default {
  components: {
    TodoForm
  },
  computed:{
    ...mapState('todos',['selectedTodo'])
  },
  methods: {
    ...mapActions({
      _updateTodo: 'todos/addTodo'
    }),
    updateTodo(todo) {
      this.updateTodo(todo).then(() => {
        this.$router.push('/todos')
      })

    }
  }
}


</script>