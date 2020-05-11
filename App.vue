<template>
  <div>
    <Nav />
    <Banner />
    <div class="container">
      <div class="row">
        <div class="col s12" style="text-align: center;">
          <Loader v-if="isLoading" />
          <div v-else>
            <h1 v-if="isMonetized">
              I've made
              <br />
              {{ totalFixed }} {{ assetCode }}
            </h1>
            <h1 v-else>
              Not receiving any.
              <a href="#" @click="showHelp">Help?</a>
            </h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <HelpModal />
  </div>
</template>

<script>
import { useWebMonetization } from "./use-web-monetization";
import Nav from "./components/Nav.vue";
import Banner from "./components/Banner.vue";
import Loader from "./components/Loader.vue";
import HelpModal from "./components/HelpModal.vue";
import { onMounted, ref, computed } from "vue";

export default {
  components: {
    Banner,
    Nav,
    Loader,
    HelpModal
  },
  setup() {
    const total = ref(0);
    const scale = ref(9);
    const assetCode = ref("");
    const modalInstance = ref(null);

    const totalFixed = computed(() => {
      return (total.value * Math.pow(10, -scale.value)).toFixed(scale.value);
    });

    onMounted(() => {
      const elem = document.querySelector(".modal");
      const instance = M.Modal.init(elem);
      modalInstance.value = instance;

      if (document.monetization === undefined) {
        return;
      }

      document.monetization.addEventListener("monetizationprogress", event => {
        console.log("monetizationprogress", event.detail);

        if (!total.value) {
          scale.value = event.detail.assetScale;
          assetCode.value = event.detail.assetCode;
        }

        total.value += Number(event.detail.amount);
      });
    });

    const { isLoading, isMonetized } = useWebMonetization();

    function showHelp(e) {
      e.preventDefault();
      modalInstance.value.open();
    }

    return {
      isLoading,
      isMonetized,
      totalFixed,
      assetCode,
      showHelp
    };
  }
};
</script>
