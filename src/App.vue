<template>
  <div>
    <header>
    </header>
    <div id="app">
      <transition name="slide-fade">
        <router-view/>
      </transition>
    </div>
    <footer>
      <p>kimura portfolio</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Hiragino Kaku Gothic Pro";
  width: 1200px;
  margin: 0 auto;
}
header {
  background: #fff;
  width: 100%;
  height: 40px;
}
footer {
  background: #eee;
  font-size: 12px;
  color: #aaa;
  clear: both;
  width: 100%;
  height: 40px;
  display: inline-block;
  text-align: center;
  margin: 40px 0 0 0;
}

.slide-fade-enter-active {
  transition: all 1.5s ease;
}
/*.slide-fade-leave-active {*/
  /*transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
/*}*/
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
