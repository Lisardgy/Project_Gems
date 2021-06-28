<template>
  <q-layout view="lHh Lpr lFf" class="bg-brand">
    <q-header elevated class="bgColor">
      <q-toolbar style="height: 50px">
        <q-toolbar-title class="absolute-center headFontColor">
          GEMS
        </q-toolbar-title>
        <q-toolbar-title class="absolute-right headFontColor">
          <q-icon name="logout" @click="logout()" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
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
            :draggable="false"
            :clickable="true"
            @click="openInfoWindowTemplate(m)"
            :icon="m.icon"
          />
          <gmap-info-window
            :options="{
              maxWidth: 300,
              pixelOffset: { width: 0, height: -35 },
            }"
            v-if="selectedLocation !== null"
            :position="{
              lat: selectedLocation.position.lat,
              lng: selectedLocation.position.lng,
            }"
            :opened="infoBoxOpen"
            @closeclick="infoBoxOpen = false"
          >
            <div class="infoWindow">
              <div class="column text-left">
                <div class="absolute-right q-mr-xs q-mt-xs">
                  <q-btn round color="red" size="8px" icon="close" />
                </div>
                <div class="q-pr-md text-bold" style="font-size: 16px">
                  ชื่อ :
                  <span class="text-bold text-h6">
                    {{ selectedLocation.name }}
                  </span>
                </div>
                <div class="q-pr-sm text-bold" style="font-size: 16px">
                  ประเภท : {{ selectedLocation.type }}
                </div>
                <div class="q-pr-sm text-bold" style="font-size: 16px">
                  สเตตัส : {{ selectedLocation.status }}
                </div>
                <div class="q-pr-sm text-bold" style="font-size: 16px">
                  ราคาขาย : {{ selectedLocation.agent.sellPrice }}
                </div>
                <div class="text-right q-pt-md">
                  <q-btn
                    class="text-weight-bolder"
                    label="ดูเพิ่มเติม"
                    style="background-color: #ffdd02"
                    @click="selectMarker(selectedLocation)"
                  />
                </div>
              </div>
            </div>
          </gmap-info-window>
        </GmapMap>
        <div class="fixed-bottom-left text-left q-mb-lg q-pl-sm">
          <div class="q-mb-md">
            <q-btn
              class="mapMenu"
              rounded
              :label="statusMarker"
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
                    @click="setStatus('รอขาย')"
                  />
                  <q-btn
                    class="font-button-status full-width"
                    flat
                    label="รอเช่า"
                    size="20px"
                    @click="setStatus('รอเช่า')"
                  />
                  <q-btn
                    class="font-button-status full-width"
                    flat
                    label="รอเช่า/รอขาย"
                    size="20px"
                    @click="setStatus('รอเช่า/รอขาย')"
                  />
                  <q-btn
                    class="font-button-status full-width"
                    flat
                    label="ขายแล้ว"
                    size="20px"
                    @click="setStatus('ขายแล้ว')"
                  />
                  <q-btn
                    class="font-button-status full-width"
                    flat
                    label="เช่าแล้ว"
                    size="20px"
                    @click="setStatus('เช่าแล้ว')"
                  />
                  <q-btn
                    class="font-button-status"
                    flat
                    label="ทั้งหมด"
                    size="20px"
                    @click="setStatus('ทั้งหมด')"
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
import { mapActions, mapGetters } from "vuex";
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
        lat: 0,
        lng: 0,
      },
      infoWindow: {
        position: { lat: 0, lng: 0 },
        open: false,
        template: "",
      },
      status: null,
      statusMarker: "ทั้งหมด",
      markers: [],
      markersStorage: [],
      selectedLocation: null,
      infoBoxOpen: false,
      statusModal: false,
    };
  },
  created() {
    //does the user have a saved center? use it instead of the default
    if (localStorage.center) {
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
      setCollectionListCondo: "collection/setCollectionListCondo",
      setStatusCondo: "collection/setStatusCondo",
      setDataProperty: "document/setDataProperty",
    }),
    async getCollectionData() {
      const db = this.$firebase.firestore();
      await db
        .collection("property")
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            const {
              id,
              lat,
              lng,
              sub_id,
              property,
              agent,
              documentName,
              deleteBy,
            } = doc.data();
            if (!deleteBy) {
              let icon;
              if (!property.type) {
                icon = null;
              } else {
                icon = {
                  url: require(`../images/Marker_icon/${property.type}.png`),
                  scaledSize: { width: 30, height: 45, f: "px", b: "px" },
                };
              }
              const positionObject = {
                id,
                sub_id,
                name: property.name,
                type: property.type,
                status: property.status,
                position: {
                  lat: Number(lat),
                  lng: Number(lng),
                },
                property,
                agent,
                icon,
                documentName,
              };
              this.markersStorage.push(positionObject);
            }
          });
        });
      this.markers = this.markersStorage.filter((item) => item.type != null);
    },
    setStatus(status) {
      this.statusMarker = status;
      this.setStatusCondo(status);
      if (status == "ทั้งหมด") {
        this.markers = this.markersStorage;
      } else {
        this.markers = this.markersStorage.filter((data) => {
          if (data.type == "คอนโด") {
            const { id } = data;
            const find = this.markersStorage.filter(
              (item) => item.sub_id == id && item.status == status
            );

            if (find.length != 0) return data;
          } else {
            if (data.status == status) return data;
          }
        });
      }
      this.statusModal = false;
    },
    openInfoWindowTemplate(data) {
      this.selectedLocation = data;
      this.infoBoxOpen = true;
    },
    selectMarker(data) {
      const { id, type, property, agent, documentName } = data;
      this.setDocumentId({ id });
      this.setDataProperty({ property, agent, documentName });
      if (type == "คอนโด") {
        this.$router.push({ name: "overviewCondo" });
      } else {
        this.$router.push({ name: "overview" });
      }
    },
    getCurrentLocation() {
      this.map.setCenter(this.myCoordinates);
    },
    logout() {
      this.$auth.signOut().then(() => {
        this.$router.push({ name: "login" });
      });
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
        lat: this.map.getCenter().lat().toFixed(8),
        lng: this.map.getCenter().lng().toFixed(8),
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
::ng-deep .gm-style .gm-style-iw-c button {
  display: none !important;
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
