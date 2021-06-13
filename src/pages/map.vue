<template>
  <div class="map_container">
    <q-header elevated class="bgColor">
      <q-toolbar style="height: 65px">
        <q-toolbar-title class="absolute-center headFontColor"
          >GEMS</q-toolbar-title
        >
        <q-btn
          class="absolute-right"
          style="color: #ffdd02"
          flat
          dense
          label="log out"
        />
      </q-toolbar>
    </q-header>
    <GmapMap
      :center="Currentposition"
      :zoom="15"
      map-type-id="terrain"
      style="position: absolute; top: 0; right: 0; bottom: 0; left: 0"
    >
    </GmapMap>
  </div>
</template>

<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: { key: "AIzaSyDeaWcrpy7wTOoxoxqRZnUs_LxMEo_CBCc", libraries: "places" },
  installComponents: true,
});
export default {
  data() {
    return {
      Currentposition: {},
    };
  },
  mounted() {},
  methods: {},
  created() {
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(latitude + "  " + longitude);
      const Currentposition = { lat: latitude, lng: longitude };
      this.Currentposition = Currentposition;
    };

    const error = (err) => {
      console.log(error);
    };

    // This will open permission popup
    navigator.geolocation.getCurrentPosition(success, error);
  },
};
</script>
<style>
body,
html,
#GmapMap {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#GmapMap {
  position: relative;
}
.mapMenu {
  font-size: 16px;
  background-color: white;
  color: black;
}
.headFontColor {
  color: #ffdd02;
  font-size: 35px;
  font-weight: bold;
}
.bgColor {
  background-color: #010135;
}
</style>