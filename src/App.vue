<template>
  <div id="app">
      

              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap" rel="stylesheet">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cats">Cats</router-link> |
      <router-link to="/dogs">Dogs</router-link> |
      <router-link to="/pets">Pets</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
 @import './assets/styles/styles.css';
 @import './assets/styles/responsive.css';
</style>
