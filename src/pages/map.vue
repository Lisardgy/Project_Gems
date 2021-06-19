<template>
  <q-layout view="lHh Lpr lFf" class="bg-brand">
    <q-header elevated class="bgColor">
      <q-toolbar style="height: 50px">
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
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            @click="selectMarker(m)"
          />
        </GmapMap>
        <div class="fixed-bottom-left text-left q-mb-lg q-pl-sm">
          <div class="q-mb-md">
            <q-btn
              class="mapMenu"
              rounded
              label="สถานะ"
              icon-right="filter_list"
              @click="statusModal = true"
            />
          </div>
          <div class="q-mb-md">
            <q-btn
              class="mapMenu"
              rounded
              label="เพิ่มหมุด"
              icon-right="add"
              @click="$router.push({ name: 'markermap' })"
            />
          </div>
          <div>
            <q-btn
              class="mapMenu"
              rounded
              label="ตำแหน่งของคุณ"
              icon-right="adjust"
              @click="getCurrentLocation()"
            />
          </div>
          <q-dialog v-model="statusModal">
            <q-card style="background: #010135; color: white">
              <q-card-section class="row justify-center q-pb-none">
                <div class="col-12 text-center">
                  <div class="text-h4 text-weight-bold" style="color: #ffdd02">
                    สถานะ
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="column items-center q-px-xl text-h6 text-white">
                  <q-btn
                    class="font-button-status full-width"
                    flat
                    label="รอขาย"
                    size="20px"
                  />
                  <q-btn
                    class="font-button-status full-width"
                    flat
                    label="รอเช่า"
                    size="20px"
                  /><q-btn
                    class="font-button-status full-width"
                    flat
                    label="รอเช่า/รอขาย"
                    size="20px"
                  /><q-btn
                    class="font-button-status full-width"
                    flat
                    label="ขายแล้ว"
                    size="20px"
                  />
                  <q-btn
                    class="font-button-status full-width"
                    flat
                    label="เช่าแล้ว"
                    size="20px"
                  />
                  <q-btn
                    class="font-button-status"
                    flat
                    label="ทั้งหมด"
                    size="20px"
                  />
                </div>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import Vue from "vue";
import { mapActions } from "vuex";
import "firebase/firestore";

Vue.config.productionTip = false;

import VueGeolocation from "vue-browser-geolocation";
Vue.use(VueGeolocation);

import * as VueGoogleMaps from "vue2-google-maps";
import position from "src/store/data/position";
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
      markers: [],
      statusModal: false,
    };
  },
  created() {
    //does the user have a saved center? use it instead of the default
    if (!localStorage.center) {
      this.myCoordinates = JSON.parse(localStorage.center);
    } else {
      // get user's coordinates from browser request
      this.$getLocation({})
        .then((coordinates) => {
          this.myCoordinates = coordinates;
        })
        .catch((error) => alert(error));
    }
    // does the user have a saved zoom? use it instead of the default
    if (localStorage.zoom) {
      this.zoom = parseInt(localStorage.zoom);
    }
  },
  async mounted() {
    await this.getCollectionData();
    // add the map to a data object
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
  methods: {
    ...mapActions({
      setDocumentId: "document/setDocumentId",
    }),
    async getCollectionData() {
      const db = this.$firebase.firestore();
      await db
        .collection("property")
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            const lat = doc.data().lat;
            const lng = doc.data().lng;
            const positionObject = {
              id: doc.data().id,
              type: doc.data().property.type,
              position: {
                lat,
                lng,
              },
            };
            this.markers.push(positionObject);
          });
        });
    },
    selectMarker(data) {
<<<<<<< HEAD
      const { id, type, position } = data;
=======
      const { id, type } = data;
>>>>>>> origin/week2_key
      this.setDocumentId({ id });

      if (type == "condo") {
        this.$router.push({ name: "overviewCondo" });
      } else {
        this.$router.push({ name: "overview" });
      }
    },
    getCurrentLocation() {
      console.log(Number(this.mapCoordinates.lat));
      console.log(Number(this.mapCoordinates.lng));
      this.myCoordinates = {
        lat: Number(this.mapCoordinates.lat),
        lng: Number(this.mapCoordinates.lng),
      };
    },
  },
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