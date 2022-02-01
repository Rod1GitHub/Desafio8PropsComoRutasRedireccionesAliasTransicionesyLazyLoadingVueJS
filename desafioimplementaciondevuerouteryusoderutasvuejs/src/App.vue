<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Portada</router-link> |
      <router-link to="/sobremi">Sobre Mi</router-link> |
      <router-link to="/contacto">Contacto</router-link> |
      <router-link to="/post/1">UltimoPost</router-link> |
      <router-link to="/rutasinexistentes">Rutas Inexistentes</router-link> |
      <router-link to="/administrador">Administrador</router-link>
    </div>
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "",
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path;
      const fromDepth = from.path;
      if (fromDepth === "/" && toDepth === "/contacto") {
        this.transitionName = "fade";
      } else {
        this.transitionName = "";
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
