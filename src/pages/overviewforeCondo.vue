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
            @click="$router.push({ name: 'map' })"
          >
            <div style="padding-left: 0px">ย้อนกลับ</div>
          </q-btn>
        </div>
        <div class="col q-pt-md q-px-md">
          <div class="row justify-end">
            <div v-if="this.getRoleUser.delete.includes(this.getUserLogin.uid)">
              <q-btn
                class="operationBtn row items-center justify-center"
                label="ลบ"
                @click="confirm = true"
              />
            </div>
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
              @click="$router.push({ name: 'editcondo' })"
            />
          </div>
        </div>
      </div>
      <div class="row q-pa-md justify-center">
        <div class="condoTitle">{{ this.property.name }}</div>
      </div>
      <div class="row q-px-md">
        <div class="row condoTitle">{{ this.documentName }}</div>
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
              size="18px"
              icon="file_download"
              @click="downloadImage"
            />
          </div>
        </div>
      </div>
      <div class="q-px-none q-pt-md">
        <div v-if="modelImage.length < 2">
          <q-img
            v-for="(data, index) in modelImage"
            :key="index"
            :src="data.url"
            @click="dialog = true"
            style="max-height: 200px"
          />
        </div>
        <div v-else>
          <q-carousel
            animated
            swipeable
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            height="200px"
          >
            <q-carousel-slide
              v-for="(data, index) in modelImage"
              :key="index"
              :name="index"
              :img-src="data.url"
              @click="dialog = true"
            />
          </q-carousel>
        </div>

        <q-dialog
          v-model="dialog"
          persistent
          :maximized="maximizedToggle"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
          <q-card class="bg-black text-white">
            <div class="row justify-end">
              <div class="">
                <q-btn
                  dense
                  flat
                  rounded
                  icon="close"
                  size="18px"
                  v-close-popup
                />
              </div>
            </div>
            <div class="row justify-between q-mt-md q-mb-xl">
              <div class="text-h5 q-mx-md">{{ this.property.name }}</div>
              <div class="text-h5 q-mx-md">
                <q-btn
                  class="downloadIamges row items-centers justify-center"
                  size="18px"
                  icon="file_download"
                  @click="downloadSingleImage()"
                />
              </div>
            </div>
            <div v-if="modelImage.length < 2">
              <q-img
                v-for="(data, index) in modelImage"
                :key="index"
                :src="data.url"
                @click="dialog = true"
                style="max-height: 200px"
              />
            </div>
            <div v-else>
              <q-carousel
                animated
                swipeable
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                height="200px"
              >
                <q-carousel-slide
                  v-for="(data, index) in modelImage"
                  :key="index"
                  :name="index"
                  :img-src="data.url"
                  @click="dialog = true"
                />
              </q-carousel>
            </div>
          </q-card>
        </q-dialog>
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
      <div class="q-mx-md q-mt-md row justify-end">
        <q-btn
          style="background-color: #ffff01"
          class="text-bold"
          rounded
          :label="statusMarker"
          icon="filter_list"
          @click="statusModal = true"
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

      <div
        class="q-pa-md row justify-center"
        v-for="(item, index) in listCondoPreview"
        :key="index"
      >
        <q-card class="card2 full-width" flat @click="setCondoOverview(item)">
          <div v-if="item.url != null">
            <q-img :src="item.url" height="200px" />
          </div>
          <q-card-section>
            <div class="text-h6 q-mt-sm q-mb-xs text-bold">
              หมายเลขห้อง : {{ item.data.property.houseNumber }}
            </div>
            <div class="col row q-pa-none q-ma-none items-center">
              <div class="col-6 row justify-start">
                <div class="text-bold" style="font-size: 15px">
                  ชั้น : {{ item.data.property.swine }}
                </div>
                <div class="text-bold q-px-sm" style="font-size: 15px">
                  อาคาร/ตึก : {{ item.data.property.building }}
                </div>
              </div>
              <div class="col-6 row justify-end">
                <div
                  class="
                    tagsCondoStyle
                    text-bold
                    row
                    items-center
                    q-px-sm q-ml-sm
                  "
                >
                  {{ item.data.property.status }}
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
      getRoleUser: "user_config/getRoleUser",
      getDatabaseUrl: "databaseUrl/getDatabaseUrl",
      getStatusCondo: "collection/getStatusCondo",
    }),
  },
  data() {
    return {
      slide: 1,
      dialog: false,
      maximizedToggle: true,
      modelImage: [],
      deletePin: false,
      editPin: false,
      expanded: false,
      confirm: null,
      documentName: null,
      statusMarker: "ทั้งหมด",
      currentCarouselDonwload: null,
      statusModal: false,
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
      listCondoStorage: [],
      listImageCondo: [],
    };
  },
  async mounted() {
    await this.getImage();
    await this.getListCondoById();
  },
  methods: {
    ...mapActions({
      setCollectionCondo: "collection/setCollectionCondo",
    }),
    async getListCondoById() {
      const { property, agent, documentName } = this.getDataProperty;
      this.property = property;
      this.agent = agent;
      this.documentName = documentName;

      const db = this.$firebase.firestore();
      await db
        .collection("property")
        .where("sub_id", "==", this.getDocumentId)
        .get()
        .then((snap) => {
          snap.forEach(async (doc) => {
            const { deleteBy, id } = doc.data();
            if (!deleteBy) {
              const storageRef = this.$firebase.storage().ref(`property/${id}`);
              await storageRef.list({ maxResults: 1 }).then((res) => {
                if (!res.items[0]) {
                  this.listCondoStorage.push({
                    data: doc.data(),
                    url: null,
                  });
                } else {
                  res.items.forEach((itemRef) => {
                    itemRef.getDownloadURL().then((url) => {
                      this.listCondoStorage.push({
                        data: doc.data(),
                        url,
                      });
                    });
                  });
                }
              });
            }
          });
        });
      this.listCondoPreview = this.listCondoStorage;
    },
    setStatus(status) {
      this.statusMarker = status;
      if (status == "ทั้งหมด") {
        this.listCondoPreview = this.listCondoStorage;
      } else {
        this.listCondoPreview = this.listCondoStorage.filter(
          (item) => item.data.property.status == status
        );
      }
      this.statusModal = false;
    },
    setCondoOverview(item) {
      this.setCollectionCondo(item.data);
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
    async getImage() {
      const storageRef = this.$firebase
        .storage()
        .ref(`property/${this.getDocumentId}`);

      await storageRef.listAll().then((res) => {
        res.items.forEach((itemRef) => {
          itemRef.getDownloadURL().then((url) => {
            this.modelImage.push({
              url,
              name: itemRef.name,
            });
          });
        });
      });
    },
    async downloadImage() {
      const storageRef = this.$firebase
        .storage()
        .ref(`property/${this.getDocumentId}`);

      storageRef.listAll().then((res) => {
        res.items.forEach((itemRef) => {
          itemRef.getDownloadURL().then((url) => {
            console.log(url);
            var xhr = new XMLHttpRequest();
            xhr.responseType = "blob";
            xhr.onload = (event) => {
              var blob = xhr.response;
            };
            xhr.open("GET", url);
            xhr.send();
          });
        });
      });
    },
    async downloadSingleImage() {
      const { url, name } = this.modelImage[this.slide];

      const storageRef = this.$firebase
        .storage()
        .ref(`property/${this.getDocumentId}`);

      storageRef
        .child(name)
        .getDownloadURL()
        .then((url) => {
          console.log(url);
          var xhr = new XMLHttpRequest();
          xhr.responseType = "blob";
          xhr.onload = (event) => {
            var blob = xhr.response;
          };
          xhr.open("GET", url);
          xhr.send();
        });
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
  padding-right: 10px;
  word-break: break-all;
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