<template>
  <q-layout view="lHh Lpr lFf" class="bg-brand">
    <q-header elevated class="bgColor">
      <q-toolbar style="height: 50px">
        <q-toolbar-title class="absolute-center headFontColor"
          >GEMS</q-toolbar-title
        >
        <q-btn
          class="absolute-right q-pr-xs"
          style="color: #ffdd02"
          flat
          dense
          icon="logout"
          @click="$router.go(-1)"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <GmapMap
          :center="myCoordinates"
          :zoom="13"
          style="position: absolute; top: 0; right: 0; bottom: 0; left: 0"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :title="m.title"
            @click="markerEvent(m)"
            ref="mapRef"
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
                  />
                  <q-btn
                    class="font-button-status full-width"
                    flat
                    label="รอเช่า"
                  /><q-btn
                    class="font-button-status full-width"
                    flat
                    label="รอเช่า/รอขาย"
                  /><q-btn
                    class="font-button-status full-width"
                    flat
                    label="ขายแล้ว"
                  />
                  <q-btn
                    class="font-button-status full-width"
                    flat
                    label="เช่าแล้ว"
                  />
                  <q-btn class="font-button-status" flat label="ทั้งหมด" />
                  <!-- <div class="q-my-xs">รอเช่า</div>
                  <div class="q-my-xs">รอเช่า/รอขาย</div>
                  <div class="q-my-xs">ขายแล้ว</div>
                  <div class="q-my-xs">เช่าแล้ว</div>
                  <div class="q-my-xs">ทั้งหมด</div> -->
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
      markers: [
        {
          position: {
            lat: 7.9015,
            lng: 98.3541,
          },
          title: "บ้านเดี่ยว",
          type: "single_house",
        },
        {
          position: {
            lat: 7.8711,
            lng: 98.3577,
          },
          title: "คอนโด",
          type: "condo",
        },
      ],
      statusModal: false,
      slide: 1,
      lorem:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!",
      stars: 3,
      slideVol: 39,
      slideAlarm: 56,
      slideVibration: 63,
    };
  },
  created() {
    //does the user have a saved center? use it instead of the default
    if (!localStorage.center) {
      this.Currentposition = JSON.parse(localStorage.center);
    } else {
      // get user's coordinates from browser request
      this.$getLocation({})
        .then((coordinates) => {
          this.Currentposition = coordinates;
        })
        .catch((error) => alert(error));
    }
  },
  methods: {
    async markerEvent(data) {
      switch (data.type) {
        case "condo":
          this.$router.push({ name: "overviewCondo" });
          break;
        case "single_house":
          this.$router.push({ name: "overview" });
          break;
      }
    },
  },
};
</script>
<style>
/* div {
  border: dashed;
} */

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
.font-button-status {
  font-size: 20px;
  width: 100%;
}
</style>