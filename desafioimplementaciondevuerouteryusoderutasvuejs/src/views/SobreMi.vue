<template>
  <div class="sobremi">
    <!-- CONTENIDO PARA LA VISTA DE 'SOBRE MÍ' -->

    <nav>
      <router-link :to="{ name: 'SobreMiTransicion' }"> Sobre Mi </router-link>
      |
      <router-link :to="{ name: 'ContactoTransicion' }"> Contacto </router-link>
    </nav>

    <transition name="slide-fade" mode="out-in">
      <router-view> </router-view>
    </transition>
  </div>
</template>
