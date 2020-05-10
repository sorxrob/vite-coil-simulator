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
            href="javascript:(function()%7B%22use%20strict%22%3Bif(document.monetization)%7Bvar%20randomGuid%3D%22c7ff7da9-8a41-4660-98a8-ca4df0176fbe%22%2Cmeta%3Ddocument.querySelector('meta%5Bname%3D%22monetization%22%5D')%2CmetaContent%3Dnull%3Bif(meta%26%26(metaContent%3Dmeta.getAttribute(%22content%22))%2CmetaContent)%7Bvar%20resolvedEndpoint%3DmetaContent.replace(%2F%5E%5C%24%2F%2C%22https%3A%2F%2F%22)%2CmonetizationstartEvent%3Dnew%20CustomEvent(%22monetizationstart%22%2C%7Bdetail%3A%7BrequestId%3ArandomGuid%2Cid%3ArandomGuid%2CmetaContent%3AmetaContent%2CresolvedEndpoint%3AresolvedEndpoint%7D%7D)%2CmonetizationprogressEvent%3Dnew%20CustomEvent(%22monetizationprogress%22%2C%7Bdetail%3A%7Bamount%3A%22200000%22%2CassetCode%3A%22USD%22%2CassetScale%3A9%7D%7D)%3Bdocument.monetization.dispatchEvent(monetizationstartEvent)%2Cdocument.monetization.state%3D%22started%22%2Cdocument.monetization.dispatchEvent(monetizationprogressEvent)%2CsetInterval(function()%7Bdocument.monetization.dispatchEvent(monetizationprogressEvent)%7D%2C2e3)%7Delse%20alert(%22monetization%20meta%20tag%20is%20not%20correctly%20configured.%22)%7Delse%20alert(%22for%20this%20bookmarklet%20to%20work%2C%20you%20must%20have%20the%20coil%20extension%20installed.%22)%3B%7D)()"
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
