<template>
  <div id="app">
    <b-container>
      <b-nav tabs>
        <b-nav-item exact to="/todos">Listado de todos</b-nav-item>
        <b-nav-item exact to="/todos/create">Crear todo</b-nav-item>

      </b-nav>
      <router-view/>
    </b-container>
  </div>
</template>

