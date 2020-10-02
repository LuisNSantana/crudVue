<template>

    <div class="mt-5">
      <b-row>
        <!-- 6 columnas !-->
        <b-col cols="6">
          <h2>Todos pendientes</h2>
          <todo-list :todos="pending"></todo-list>
        </b-col>
        <b-col cols="5">
          <h2>Todos Finalizados</h2>
          <todo-list :todos="done"></todo-list>
        </b-col>
      </b-row>

    </div>
</template>

<script>
//las funciones de getter devuelven un array de todos
import {mapActions, mapGetters} from 'vuex'
import TodoList from "@/components/TodoList";
export default{
  name: "Todos.vue",
  components: {
    TodoList
  },
  mounted() {
    this.fetchTodos()

  },
  methods: {
    ...mapActions('todos', ['fetchTodos'])
  },
  computed: {
    ...mapGetters('todos', ['pending', 'done'])
  }
}
</script>

