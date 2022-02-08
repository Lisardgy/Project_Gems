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
          :disableDefaultUI="true"
        >
          <GmapMarker :position="myPosition.position" :icon="myPosition.icon" />
          <GmapMarker
            style="font-size: 32px"
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :draggable="false"
            :clickable="true"
            :label="
              togglePrice && zoomLevel >= 15
                ? {
                    text: `${m.name ? m.name : ''} ${
                      m.agent.sellPrice ? m.agent.sellPrice : ''
                    }`,
                    fontSize: '15px',
                    fontWeight: 'bold',
                    color: 'black',
                    backgroundColor: 'black',
                  }
                : ''
            "
            :icon="m.icon"
            @click="openInfoWindowTemplate(m)"
          >
            <!-- <gmap-info-window
              :options="{
                maxWidth: 200,
                pixelOffset: { width: 0, height: 0 },
              }"
              :position="{
                lat: m.position.lat,
                lng: m.position.lng,
              }"
            >
              <div class="column text-center">
                <div class="text-bold" style="font-size: 12px">
                  {{ m.name }}
                </div>
                <div class="text-bold" style="font-size: 12px">
                  {{ m.agent.sellPrice }}
                </div>
              </div>
            </gmap-info-window> -->
          </GmapMarker>
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
          <div class="row q-gutter-md q-mb-md">
            <div>
              <q-btn
                class="mapMenu"
                rounded
                dense
                :disable="zoomLevel < 15"
                :icon-right="togglePrice ? 'visibility' : 'visibility_off'"
                :label="togglePrice ? 'เปิดราคา' : 'ปิดราคา'"
                @click="togglePrice = !togglePrice"
              />
            </div>
          </div>
          <div class="row q-gutter-md q-mb-md">
            <div>
              <q-btn
                class="mapMenu"
                rounded
                dense
                label="ค้นหา"
                icon-right="search"
                @click="searchModal = true"
              />
            </div>
            <div>
              <q-btn
                class="mapMenu"
                rounded
                dense
                :label="statusMarker"
                icon-right="filter_list"
                @click="statusModal = true"
              />
            </div>
          </div>
          <div class="row q-gutter-md q-mb-md">
            <div>
              <q-btn
                class="mapMenu"
                dense
                rounded
                label="ตำแหน่ง"
                icon-right="adjust"
                @click="getCurrentLocation()"
              />
            </div>
            <div>
              <q-btn
                class="mapMenu"
                rounded
                dense
                label="เพิ่มหมุด"
                icon-right="add"
                @click="$router.push({ name: 'markermap' })"
              />
            </div>
          </div>
          <q-dialog v-model="searchModal">
            <q-card
              style="background-color: #010135; color: white; width: 100%"
            >
              <q-card-section class="row justify-center q-pb-none">
                <div class="col-12 text-center">
                  <div class="text-h4 text-weight-bold" style="color: #ffdd02">
                    ค้นหาข้อมูลบ้าน
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="q-gutter-md q-pb-none">
                <div>
                  <div>ชื่อหมู่บ้าน, โซน, รหัส gems</div>
                  <q-input
                    label="ชื่อหมู่บ้าน, โซน, รหัส gems"
                    label-color="black"
                    bg-color="white"
                    dense
                    outlined
                    v-model="searchName"
                    @keyup.enter="searchMarkers"
                  />
                </div>
                <!-- <div class="row q-pb-sm">
                    <div class="col-6 q-pr-sm">
                      <div>ตำบล</div>
                      <q-input
                        label="ตำบล"
                        label-color="black"
                        bg-color="white"
                        dense
                        outlined
                        v-model="searchSubDistinct"
                      />
                    </div>
                    <div class="col-6 q-pl-sm">
                      <div>อำเภอ</div>
                      <q-input
                        label="อำเภอ"
                        label-color="black"
                        bg-color="white"
                        dense
                        outlined
                        v-model="searchDistinct"
                      />
                    </div>
                  </div> -->

                <div class="">
                  <div class="row">
                    <div class="col-6 q-pr-sm">
                      <div>ราคาเริ่มต้น</div>
                      <div>
                        <q-select
                          label="ราคาเริ่มต้น"
                          outlined
                          v-model="range.min"
                          :options="priceOptions"
                          map-options
                          emit-value
                          dense
                          label-color="black"
                          bg-color="white"
                        />
                      </div>
                    </div>
                    <div class="col-6 q-pl-sm">
                      <div>ราคาสูงสุด</div>
                      <div>
                        <q-select
                          label="ราค่าสูงสุด"
                          outlined
                          v-model="range.max"
                          :options="priceOptions"
                          map-options
                          emit-value
                          dense
                          label-color="black"
                          bg-color="white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="q-pb-none">
                <q-btn
                  class="font-button-status full-width"
                  flat
                  label="ค้นหา"
                  size="20px"
                  @click="searchMarkers"
                />
              </q-card-section>
            </q-card>
          </q-dialog>
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
    key: "AIzaSyAOYWpAyxSi3qsodJOcLWnI4COxi-F_EE8",
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
      myPosition: {
        position: {
          lat: 0,
          lng: 0,
        },
        icon: {
          url: require(`../images/Marker_icon/myposition.png`),
          scaledSize: { width: 30, height: 45, f: "px", b: "px" },
        },
      },
      zoomLevel: 14,
      togglePrice: false,
      status: null,
      statusMarker: "ทั้งหมด",
      markers: [],
      markersStorage: [],
      searchOptions: [],
      selectedLocation: null,
      infoBoxOpen: false,
      statusModal: false,
      searchModal: false,
      searchName: "",
      searchDistinct: "",
      searchSubDistinct: "",
      priceOptions: [],
      rangePrice: {
        min: 0,
        max: 0,
      },
      range: {
        min: 0,
        max: 0,
      },
    };
  },
  created() {
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

    if (localStorage.zoom) {
      this.zoom = parseInt(localStorage.zoom);
    }
  },
  async mounted() {
    try {
      this.$q.loading.show();
      await this.getCollectionData();
      this.$refs.mapRef.$mapPromise.then((map) => {
        this.map = map;
        this.map.addListener("zoom_changed", () => {
          this.zoomLevel = this.map.getZoom();
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.$q.loading.hide();
    }
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
                  labelOrigin: new google.maps.Point(20, -10),
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
      this.markers = this.markersStorage.filter((item) => item.type);

      const sortPrice = this.markersStorage
        .filter((item) => item.agent.sellPrice)
        .sort(
          (a, b) =>
            Number(a.agent.sellPrice.replace(/,/g, "")) -
            Number(b.agent.sellPrice.replace(/,/g, ""))
        )
        .map((data) => Number(data.agent.sellPrice.replace(/,/g, "")));

      this.rangePrice = {
        min: sortPrice[0],
        max: sortPrice[sortPrice.length - 1],
      };

      const loop = this.rangePrice.max / 1000000;

      for (let i = 0.5; i <= loop; i = i + 0.5) {
        this.priceOptions.push({
          label: `${i} ล้าน`,
          value: i * 1000000,
        });
      }

      this.range = {
        min: 500000,
        max: loop * 1000000,
      };
    },
    addCommaToNumber(val) {
      return val
        .toString()
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    searchMarkers() {
      const name = this.markersStorage
        .filter((item) => item.name)
        .filter((item) => item.type)
        .filter(
          (item) =>
            item.name
              .toString()
              .replace(/\s/g, "")
              .toLowerCase()
              .indexOf(this.searchName.replace(/\s/g, "").toLowerCase()) > -1
        );

      const documentName = this.markersStorage
        .filter((item) => item.documentName)
        .filter((item) => item.type)
        .filter(
          (item) =>
            item.documentName
              .toString()
              .replace(/\s/g, "")
              .toLowerCase()
              .indexOf(this.searchName.replace(/\s/g, "").toLowerCase()) > -1
        );

      const distinct = this.markersStorage
        .filter((item) => item.name)
        .filter((item) => item.type)
        .filter((item) =>
          item.property.distict
            ? item.property.distict
                .toString()
                .replace(/\s/g, "")
                .toLowerCase()
                .indexOf(this.searchName.replace(/\s/g, "").toLowerCase()) > -1
            : false
        );

      const subDistinct = this.markersStorage
        .filter((item) => item.name)
        .filter((item) => item.type)
        .filter((item) =>
          item.property.subDistict
            ? item.property.subDistict
                .toString()
                .replace(/\s/g, "")
                .toLowerCase()
                .indexOf(this.searchName.replace(/\s/g, "").toLowerCase()) > -1
            : false
        );

      let markerFilter = [
        ...name,
        ...distinct,
        ...subDistinct,
        ...documentName,
      ];

      if (markerFilter.length > 1) {
        markerFilter.filter((item) => {
          let price;

          if (item.agent.sellPrice) {
            price = Number(item.agent.sellPrice?.replace(/,/g, "")) || 0;
          } else {
            price = Number(item.agent.appraisalPrice?.replace(/,/g, "")) || 0;
          }

          if (!price) {
            return true;
          }

          return this.range.min <= price && price <= this.range.max;
        });
      }

      this.markers = markerFilter;

      if (this.markers.length) {
        const { lat, lng } = this.markers[0].position;

        this.map.setCenter({ lat, lng });
      }

      this.searchModal = false;
      this.searchName = "";
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
  watch: {
    myCoordinates(val) {
      this.myPosition.position = {
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
::ng-deep .gm-style .gm-style-iw-c button {
  display: none !important;
}

.marker-label {
  bottom: 6px;
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
