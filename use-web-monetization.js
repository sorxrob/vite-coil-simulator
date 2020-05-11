import { ref, onMounted } from "vue";

export const useWebMonetization = () => {
  const isMonetized = ref(false);
  const isLoading = ref(true);

  onMounted(() => {
    if (document.monetization === undefined) {
      // No web monetization polyfill is installed (e.g. Coil).
      isLoading.value = false;
      isMonetized.value = false;
      return;
    }

    // Check the value of document.monetization.state
    // to see if a user is web monetized.
    const { state } = document.monetization;

    if (state === "stopped") {
      // Not currently sending micropayments, nor trying to.
      isLoading.value = false;
      isMonetized.value = false;
    }

    // Determine when Web Monetization has started actively paying
    document.monetization.addEventListener("monetizationstart", (event) => {
      console.log("monetizationstart", event.detail);

      isLoading.value = false;
      isMonetized.value = true;
    });
  });

  return {
    isMonetized,
    isLoading,
  };
};
