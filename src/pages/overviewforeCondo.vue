<template>
  <q-layout view="lHh Lpr lFf">
    <div class="body">
      <div class="row items-center">
        <div class="col q-pt-md">
          <q-btn
            align="left"
            size="20px"
            icon="arrow_back_ios"
            style="color: #ffff01"
            class="overflow-hidden"
            @click="$router.go(-1)"
          >
            <div style="padding-left: 0px">ย้อนกลับ</div>
          </q-btn>
        </div>
        <!-- <div class="col q-pt-md q-px-md">
          <div class="row justify-end">
            <q-btn
              class="operationBtn row items-center justify-center"
              label="ลบ"
              @click="deletePin"
            />
            <div class="q-mx-xs"></div>
            <q-btn
              class="operationBtn row items-center justify-center"
              label="แก้ไข"
              @click="editPin"
            />
          </div>
        </div> -->
      </div>
      <div class="row q-px-md justify-center">
        <div class="condoTitle">{{ this.property.projectName }}</div>
      </div>
      <div class="row q-px-md q-mb-md">
        <div class="projectTitle">{{ this.property.name }}</div>
      </div>
      <div class="row q-px-md">
        <div class="col-8">
          <div class="row">
            <div class="tagsStyle text-bold row items-center q-px-sm">
              {{ this.property.type }}
            </div>
            <div class="q-mx-xs"></div>
            <div class="tagsStyle text-bold row items-center q-px-sm">
              {{ this.property.status }}
            </div>
          </div>
        </div>
      </div>
      <div class="q-px-none q-pt-md q-px-sm" style="padding-bottom: 2px">
        <!-- <q-carousel
          animated
          swipeable
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          height="200px"
        >
          <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel> -->
      </div>
      <div class="row overviewTab items-center">
        <div class="overviewText q-ml-md">Overview</div>
      </div>
      <div class="q-pa-md">
        <div class="row detailHead">รายละเอียด</div>
        <div class="row detailTitle q-px-md">ที่อยู่ :</div>
        <div class="row details q-px-lg q-py-sm">
          <div class="col">
            <div class="row justify-between">
              <div>
                <span style="color: #fcff68">บ้านเลขที่:</span>
                {{ this.property.houseNumber }}
              </div>
              <!-- <div>
                <span style="color: #fcff68">หมู่ที่/ชั้น:</span>
                {{ this.property.swine }}
              </div> -->
            </div>
            <div class="row justify-between">
              <div>
                <span style="color: #fcff68">ซอย/ถนน:</span>
                {{ this.property.alley }}
              </div>
            </div>
            <div class="row justify-between">
              <div>
                <span style="color: #fcff68">ตำบล:</span>
                {{ this.property.subDistict }}
              </div>
              <div>
                <span style="color: #fcff68">อำเภอ:</span>
                {{ this.property.distict }}
              </div>
            </div>
            <div class="row between">
              <div>
                <span style="color: #fcff68">จังหวัด:</span>
                {{ this.property.province }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row overviewTab items-center justify-between">
        <div class="overviewText q-ml-md">ห้อง</div>
        <div class="q-mx-lg">
          <q-btn
            class="addRoomBtn row items-center justify-center"
            label="เพิ่มห้อง +"
            @click="$router.push({ name: 'addform' })"
          />
        </div>
      </div>

      <div class="q-pa-md row justify-center q-gutter-md">
        <div class="" v-for="(data, index) in listCondo" :key="index">
          <q-card class="card2" flat @click="clickCondo(data)">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
            <q-card-section>
              <div class="text-h6 q-my-sm text-bold">
                หมายเลขห้อง: {{ data.houseNumber }}
                <span style="font-size: 14px"
                  >(ชั้น : {{ data.swine }} - ตึก : {{ data.building }})</span
                >
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="row">
                    <div class="tagsListStyle text-bold row items-center">
                      {{ data.type }}
                    </div>
                    <div class="q-mx-xs"></div>
                    <div class="tagsListStyle text-bold row items-center">
                      {{ data.status }}
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getDocumentId: "document/getDocumentId",
      getPosition: "position/getPosition",
    }),
  },
  name: "PageIndex",
  data() {
    return {
      slide: 1,
      deletePin: false,
      editPin: false,
      expanded: false,
      lat: null,
      lng: null,
      property: {
        projectName: null,
        name: null, //ชื่อคอนโด
        type: null,
        status: null,
        houseNumber: null,
        building: null, //อาคาร
        swine: null, //หมู่
        alley: null, //ซอย
        distict: null, //อำเภอ
        subDistict: null, //ตำบล
        province: null, //จังหวัด
      },
      listCondo: [],
    };
  },
  async mounted() {
    // await this.findCollectionById();
    // await this.findListCondoByLatLong();
  },
  methods: {
    ...mapActions({
      setLocationCondo: "location_condo/setLocationCondo",
      setDocumentId: "document/setDocumentId",
    }),
    async findCollectionById() {
      const db = this.$firebase.firestore();
      await db
        .collection("property")
        .doc(`${this.getDocumentId}`)
        .get()
        .then((doc) => {
          this.setData(doc.data());
        });
    },
    async findListCondoByLatLong() {
      const db = this.$firebase.firestore();
      await db
        .collection("property")
        .where("lat", "==", this.getPosition.lat)
        .where("lng", "==", this.getPosition.lng)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const Condo = {
              id: doc.data().id,
              houseNumber: doc.data().property.houseNumber,
              building: doc.data().property.building,
              swine: doc.data().property.swine,
              type: doc.data().property.type,
              status: doc.data().property.status,
            };
            this.listCondo.push(Condo);
          });
        });
    },
    setData(data) {
      this.lat = data.lat;
      this.lng = data.lng;
      this.property = data.property;

      this.setLocationCondo({
        lat: data.lat,
        lng: data.lng,
        property: this.property,
      });
    },
    clickCondo(data) {
      const { id } = data;
      this.setDocumentId({ id });
      this.$router.push({ name: "overviewInCondo" });
    },
  },
};
</script>

<style lang="scss" scoped>
.q-layout {
  background: #010135;
}

.backText {
  color: white;
  margin-left: -15px;
  font-size: 12px;
}

.operationBtn {
  text-align: center;
  border-radius: 5px;
  border: solid #ffff01 2px;
  width: 53px;
  height: 30px;
  color: #ffff01;
  font-weight: bold;
}

.projectTitle {
  color: white;
  font-size: 19px;
  font-weight: bold;
  margin-left: 1rem;
}

.condoTitle {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.tagsStyle {
  border-radius: 5px;
  width: auto;
  height: 35px;
  background: #fff;
  text-align: center;
}

.tagsListStyle {
  border-radius: 5px;
  width: auto;
  height: 35px;
  padding: 10px;
  color: white;
  background: #000;
  text-align: center;
}

.downloadIamges {
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background: #ffff01;
  padding-right: 1px;
  color: #010135;
}

.q-carousel__slide,
.q-carousel .q-carousel--padding {
  padding: 0;
}

.overviewTab {
  height: 39px;
  background: #ffff01;
  align-items: center;
}

.overviewText {
  color: #010135;
  font-size: 18px;
  font-weight: bold;
}

.detailHead {
  font-weight: bold;
  color: #ffff01;
  font-size: 20px;
}

.detailTitle {
  font-weight: 700;
  color: #ffff01;
  font-size: 18px;
}

.details {
  font-weight: 700;
  color: #ffffff;
  font-size: 16px;
}

.detailsFront {
  font-weight: 700;
  color: #fcff68;
  font-size: 16px;
}

.detailsBack {
  font-weight: 700;
  color: #ffffff;
  font-size: 16px;
  margin-left: 1em;
}

.marginAftSep {
  margin-left: 1.2em;
}

.card2 {
  display: block;
  top: 0px;
  position: relative;
  z-index: 0;
  overflow: hidden;

  &:hover {
    transition: all 0.2s ease-out;
    top: -5px;
  }
}

.addRoomBtn {
  text-align: center;
  border-radius: 5px;
  border: solid #ffff01 2px;
  width: auto;
  height: 30px;
  color: #000000;
  background: #f8fa94;
  font-weight: bolder;
}
</style>