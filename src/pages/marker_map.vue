<template>
  <q-layout view="lHh Lpr lFf" class="bg-brand">
    <q-header elevated class="bgColor">
      <q-toolbar style="height: 50px">
        <q-btn
          class="absolute-left"
          icon="arrow_back_ios"
          style="color: #ffdd02"
          @click="$router.go(-1)"
        />
        <q-toolbar-title class="absolute-center headFontColor">
          GEMS
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <!-- <div class="text-h6">
        {{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitude
      </div> -->
      <q-page>
        <GmapMap
          :center="myCoordinates"
          :zoom="14"
          style="position: absolute; top: 0; right: 0; bottom: 0; left: 0"
          ref="mapRef"
        >
          <GmapMarker :position="marker" :clickable="true" />
        </GmapMap>
        <div class="fixed-bottom row justify-center text-left q-mb-xs">
          <div class="q-mb-md">
            <q-btn
              class="mapMenu q-px-lg text-weight-bold"
              style="color: #ffdd02; background-color: #010135"
              rounded
              size="20px"
              label="ยืนยันตำแหน่ง"
              @click="$router.push({ name: 'form' })"
            />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import Vue from "vue";

Vue.config.productionTip = false;

import VueGeolocation from "vue-browser-geolocation";
Vue.use(VueGeolocation);

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDeaWcrpy7wTOoxoxqRZnUs_LxMEo_CBCc",
  },
  installComponents: true,
});
export default {
  data() {
    return {
      map: null,
      myCoordinates: {
        lat: 7.9015,
        lng: 98.3541,
      },
      marker: {
        lat: 0,
        lng: 0,
      },
    };
  },
  created() {
    // does the user have a saved center? use it instead of the default
    // if (!localStorage.center) {
    //   this.myCoordinates = JSON.parse(localStorage.center);
    // } else {
    //   // get user's coordinates from browser request
    //   this.$getLocation({})
    //     .then((coordinates) => {
    //       this.myCoordinates = coordinates;
    //     })
    //     .catch((error) => alert(error));
    // }
    // // does the user have a saved zoom? use it instead of the default
    // if (localStorage.zoom) {
    //   this.zoom = parseInt(localStorage.zoom);
    // }
  },
  mounted() {
    // add the map to a data object
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
  methods: {},
  computed: {
    mapCoordinates() {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0,
        };
      }
      return {
        lat: this.map.getCenter().lat().toFixed(4),
        lng: this.map.getCenter().lng().toFixed(4),
      };
    },
  },
  watch: {
    mapCoordinates(val) {
      this.marker = {
        lat: parseFloat(val.lat),
        lng: parseFloat(val.lng),
      };
    },
  },
};
</script>

<style scoped>
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
  font-size: 32px;
  font-weight: bold;
}
.bgColor {
  background-color: #010135;
}
.on-left {
  margin: 0;
}
</style>