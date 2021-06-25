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
        <div class="col q-pt-md q-px-md">
          <div class="row justify-end">
            <q-btn
              class="operationBtn row items-center justify-center"
              label="ลบ"
              @click="confirm = true"
            />
            <q-dialog v-model="confirm" persistent>
              <q-card>
                <q-card-section class="row items-center">
                  <q-avatar icon="delete" color="red" text-color="white" />
                  <span class="q-ml-sm text-weight-bold text-h5">
                    ยืนยันการลบข้อมูล
                  </span>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn
                    class="text-bold"
                    color="primary"
                    label="ยกเลิก"
                    v-close-popup
                  />
                  <q-btn
                    class="text-bold"
                    color="red"
                    label="ยืนยัน"
                    @click="deleteData()"
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>
            <div class="q-mx-xs"></div>
            <q-btn
              class="operationBtn row items-center justify-center"
              label="แก้ไข"
            />
          </div>
        </div>
      </div>
      <div class="row q-pa-md justify-center">
        <div class="condoTitle">{{ this.property.name }}</div>
      </div>

      <div class="row q-px-md justify-between">
        <div class="col">
          <div class="row q-gutter-sm">
            <div class="tagsStyle text-bold row items-center q-px-sm">
              {{ this.property.type }}
            </div>
            <!-- <div class="tagsStyle text-bold row items-center q-px-sm">
              {{ this.property.status }}
            </div> -->
          </div>
        </div>
        <div class="items-center">
          <div class="row justify-end">
            <q-btn
              class="downloadIamges row items-centers justify-center"
              style="font-size: 28px"
            >
              <span class="material-icons">file_download</span>
            </q-btn>
          </div>
        </div>
      </div>
      <div class="q-px-none q-pt-md">
        <q-carousel
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
        </q-carousel>
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
              <div>
                <span style="color: #fcff68">หมู่ที่/ชั้น:</span>
                {{ this.property.swine }}
              </div>
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
            @click="$router.push({ name: 'addcondo' })"
          />
        </div>
      </div>

      <div
        class="q-pa-md row justify-center"
        v-for="(data, index) in listCondoPreview"
        :key="index"
      >
        <q-card class="card2 full-width" flat @click="setCondoOverview(data)">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

          <q-card-section>
            <div class="text-h6 q-mt-sm q-mb-xs text-bold">
              หมายเลขห้อง : {{ data.property.houseNumber }}
            </div>
            <div class="col row q-pa-none q-ma-none items-center">
              <div class="col-6 row justify-start">
                <div class="text-bold" style="font-size: 15px">
                  ชั้น : {{ data.property.swine }}
                </div>
                <div class="text-bold q-px-sm" style="font-size: 15px">
                  อาคาร/ตึก : {{ data.property.building }}
                </div>
              </div>
              <div class="col-6 row justify-end">
                <div class="tagsCondoStyle text-bold row items-center q-px-sm">
                  {{ data.property.type }}
                </div>
                <div
                  class="
                    tagsCondoStyle
                    text-bold
                    row
                    items-center
                    q-px-sm q-ml-sm
                  "
                >
                  {{ data.property.status }}
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-layout>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getDocumentId: "document/getDocumentId",
      getDataProperty: "document/getDataProperty",
      getUserLogin: "user_config/getUserLogin",
      getDatabaseUrl: "databaseUrl/getDatabaseUrl",
    }),
  },
  data() {
    return {
      slide: 1,
      deletePin: false,
      editPin: false,
      expanded: false,
      confirm: null,
      property: {
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
      listCondoPreview: [],
    };
  },
  async mounted() {
    await this.getListCondoById();
  },
  methods: {
    ...mapActions({
      setCollectionCondo: "collection/setCollectionCondo",
    }),
    async getListCondoById() {
      const { property, agent } = this.getDataProperty;
      this.property = property;
      this.agent = agent;

      const db = this.$firebase.firestore();
      await db
        .collection("property")
        .where("sub_id", "==", this.getDocumentId)
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            const { deleteBy } = doc.data();
            if (!deleteBy) {
              this.listCondoPreview.push(doc.data());
            }
          });
        });
    },
    setCondoOverview(data) {
      this.setCollectionCondo(data);
      this.$router.push({ name: "overviewInCondo" });
    },
    async deleteData() {
      this.$q.loading.show();

      const mapdata = {
        id: this.getDocumentId,
        uid: this.getUserLogin.uid,
      };

      await axios.put(`${this.getDatabaseUrl}/delete`, mapdata);

      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        this.timer = void 0;
        this.$router.go(-1);
      }, 0);
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

.tagsCondoStyle {
  border-radius: 5px;
  width: auto;
  height: 35px;
  color: #fff;
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