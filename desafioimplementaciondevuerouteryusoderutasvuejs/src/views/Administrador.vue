<template>
  <div>
    <nav>
      <router-link :to="{ name: 'Avanzado' }"> Avanzado </router-link> |
      <router-link :to="{ name: 'Simple' }"> Simple </router-link>
    </nav>

    <transition name="slide-fade" mode="out-in">
      <router-view> </router-view>
    </transition>
  </div>
</template>
