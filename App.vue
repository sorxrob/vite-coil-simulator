<template>
  <div>
    <Nav />
    <Banner />
    <div class="container">
      <div class="row">
        <div class="col s12" style="text-align: center;">
          <Loader v-if="isLoading" />
          <h1 v-else-if="isMonetized">
            Ad removed! I've made
            <br />
            {{ totalFixed }} {{ assetCode }}
          </h1>
          <h1 v-else>
            <div
              class="tenor-gif-embed"
              data-postid="16797420"
              data-share-method="host"
              data-width="100%"
              data-aspect-ratio="1.7535211267605635"
            >
              <a
                href="https://tenor.com/view/coffin-meme-coffin-dance-meme-funny-lol-gif-16797420"
              >Coffin Meme Coffin Dance GIF</a> from
              <a href="https://tenor.com/search/coffinmeme-gifs">Coffinmeme GIFs</a>
            </div>
            <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
            <a href="#" @click="showHelp">Remove this Ad?</a>
          </h1>
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
