<template>
  <div id="help_modal" class="modal">
    <div class="modal-content">
      <h4>Testing Instructions</h4>
      <ol>
        <li>
          Make sure the Coil extension (
          <a
            target="_BLANK"
            href="https://chrome.google.com/webstore/detail/coil/locbifcbeldmnphbgkdigjmkbfkhbnca"
          >Chrome</a> |
          <a target="_BLANK" href="https://addons.mozilla.org/en-US/firefox/addon/coil/">Firefox</a>) is installed. You
          don't need to log in.
        </li>
        <li>
          Drag
          <a
            href="javascript:(function()%7B(function%20()%20%7B%22use%20strict%22%3Bif%20(document.monetization)%20%7Bvar%20randomGuid%20%3D%20%22c7ff7da9-8a41-4660-98a8-ca4df0176fbe%22%2Cmeta%20%3D%20document.querySelector('meta%5Bname%3D%22monetization%22%5D')%2CmetaContent%20%3D%20null%3Bif%20((meta%20%26%26%20(metaContent%20%3D%20meta.getAttribute(%22content%22))%2C%20metaContent))%20%7Bvar%20resolvedEndpoint%20%3D%20metaContent.replace(%2F%5E%5C%24%2F%2C%20%22https%3A%2F%2F%22)%2CmonetizationstartEvent%20%3D%20new%20CustomEvent(%22monetizationstart%22%2C%20%7Bdetail%3A%20%7BrequestId%3A%20randomGuid%2Cid%3A%20randomGuid%2CmetaContent%3A%20metaContent%2CresolvedEndpoint%3A%20resolvedEndpoint%2C%7D%2C%7D)%2CmonetizationprogressEvent%20%3D%20new%20CustomEvent(%22monetizationprogress%22%2C%20%7Bdetail%3A%20%7B%20amount%3A%20String(Math.floor(50000%20%2B%20Math.random()%20*%20100000))%2C%20assetCode%3A%20%22USD%22%2C%20assetScale%3A%209%20%7D%2C%7D)%3Bdocument.monetization.dispatchEvent(monetizationstartEvent)%2C(document.monetization.state%20%3D%20%22started%22)%2Cdocument.monetization.dispatchEvent(monetizationprogressEvent)%2CsetInterval(function%20()%20%7Bdocument.monetization.dispatchEvent(monetizationprogressEvent)%3B%7D%2C%202e3)%3B%7D%20else%20alert(%22monetization%20meta%20tag%20is%20not%20correctly%20configured.%22)%3B%7D%20elsealert(%22for%20this%20bookmarklet%20to%20work%2C%20you%20must%20have%20the%20coil%20extension%20installed.%22)%3B%7D)()%7D)()"
          >Simulate Monetization</a> onto your bookmarks bar.
        </li>
        <li>Reload this page</li>
        <li>Click "Simulate Monetization" in your bookmarks bar.</li>
      </ol>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close btn-flat">Close</a>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      const elem = document.querySelector(".modal");
      const instance = new M.Modal(elem);
    });
  }
};
</script>
