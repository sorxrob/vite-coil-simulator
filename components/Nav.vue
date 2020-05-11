<template>
  <nav class="indigo" role="navigation">
    <div class="nav-wrapper container">
      <a id="logo-container" href="#" class="brand-logo">#gftwhackathon</a>
      <ul class="right hide-on-med-and-down">
        <li>
          <a
            target="_BLANK"
            href="https://github.com/sorxrob/vite-coil-simulator"
            >GitHub</a
          >
        </li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li>
          <a
            target="_BLANK"
            href="https://github.com/sorxrob/vite-coil-simulator"
            >GitHub</a
          >
        </li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"
        ><i class="material-icons">menu</i></a
      >
    </div>
  </nav>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      const elem = document.querySelector(".sidenav");
      const instance = new M.Sidenav(elem);
    });
  },
};
</script>
