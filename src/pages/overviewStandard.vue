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
            <div v-if="this.getUserLogin.status == 'admin'">
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
              @click="$router.push({ name: 'editform' })"
            />
          </div>
        </div>
      </div>
      <div class="row q-pa-sm items-baseline justify-center">
        <div class="row title">{{ this.property.name }}</div>
      </div>
    </div>
    <div class="row q-px-md">
      <div class="row title">{{ this.documentName }}</div>
    </div>

    <div class="row q-px-md justify-between">
      <div class="col">
        <div class="row q-gutter-sm">
          <div class="tagsStyle text-bold row items-center q-px-sm">
            {{ this.property.type }}
          </div>
          <div class="tagsStyle text-bold row items-center q-px-sm">
            {{ this.property.status }}
          </div>
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
    <!-- ยังอ่อนหัด -->
    <div class="q-px-none q-pt-md">
      <div v-if="modelImage.length < 2">
        <q-img
          :ratio="4 / 3"
          v-for="(data, index) in modelImage"
          :key="index"
          :src="data.url"
        />
      </div>
      <div v-else>
        <q-carousel
          animated
          swipeable
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          height="auto"
        >
          <q-carousel-slide
            v-for="(data, index) in modelImage"
            :key="index"
            :name="index"
            @click="dialog = true"
          >
            <q-img :ratio="4 / 3" :src="data.url" />
          </q-carousel-slide>
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
              :ratio="4 / 3"
            />
          </div>
          <div v-else>
            <q-carousel
              animated
              swipeable
              v-model="slide"
              transition-prev="slide-right"
              transition-next="slide-left"
              height="auto"
            >
              <q-carousel-slide
                v-for="(data, index) in modelImage"
                :key="index"
                :name="index"
                @click="dialog = true"
              >
                <q-img :ratio="4 / 3" :src="data.url" />
              </q-carousel-slide>
            </q-carousel>
          </div>
        </q-card>
      </q-dialog>
    </div>
    <!-- ยังอ่อนหัด -->
    <div class="row overviewTab items-center">
      <div class="overviewText q-ml-md">Overview</div>
    </div>
    <div class="q-pa-md">
      <div class="row detailHead text-white">รายละเอียด</div>
      <div class="row detailTitle q-px-md">ที่อยู่ :</div>
      <div class="row details q-px-lg q-py-sm">
        <div class="col">
          <div class="row justify-between">
            <div>
              <span style="color: #fcff68">บ้านเลขที่ :</span>
              {{ this.property.houseNumber }}
            </div>
            <div>
              <span style="color: #fcff68">หมู่ที่/ชั้น :</span>
              {{ this.property.swine }}
            </div>
          </div>
          <div class="row justify-between">
            <div>
              <span style="color: #fcff68">ซอย-ถนน :</span>
              {{ this.property.alley }}
            </div>
            <div>
              <span style="color: #fcff68">อาคาร/ตึก :</span>
              {{ this.property.building }}
            </div>
          </div>
          <div class="row justify-between">
            <div>
              <span style="color: #fcff68">ตำบล :</span>
              {{ this.property.subDistict }}
            </div>
            <div>
              <span style="color: #fcff68">อำเภอ :</span>
              {{ this.property.distict }}
            </div>
          </div>
          <div class="row between">
            <div>
              <span style="color: #fcff68">จังหวัด :</span>
              {{ this.property.province }}
            </div>
          </div>
        </div>
      </div>
      <q-separator class="q-my-sm" color="white" inset />
      <div class="row detailTitle q-px-md">พื้นที่ :</div>
      <div class="row details q-px-lg q-py-sm">
        <div class="col">
          <div class="row justify-between">
            <div>
              <span style="color: #fcff68">พื้นที่ดิน :</span>
              {{ this.property.areaSize }} ตร.วา
            </div>
            <div>
              <span style="color: #fcff68">พื้นที่บ้าน :</span>
              {{ this.property.houseSize }} ตร.ม.
            </div>
          </div>
          <div class="row justify-between">
            <div>
              <span style="color: #fcff68">ความกว้างหน้าบ้าน :</span>
              {{ this.property.widthFrontHouse }} ม.
            </div>
          </div>
        </div>
      </div>
      <q-separator class="q-my-sm" color="white" inset />
      <div class="row detailTitle q-px-md">รายละเอียดภายใน :</div>
      <div class="row details q-px-lg q-py-sm">
        <div class="col">
          <div class="row justify-between">
            <div>
              <span style="color: #fcff68">ห้องนอน :</span>
              {{ this.property.bedRoom }}
            </div>
            <div>
              <span style="color: #fcff68">จำนวนชั้น :</span>
              {{ this.property.floor }}
            </div>
            <div>
              <span style="color: #fcff68">ห้องน้ำ :</span>
              {{ this.property.toilet }}
            </div>
          </div>
          <div class="row justify-between">
            <div>
              <span style="color: #fcff68">เฟอร์นิเจอร์ที่ได้ :</span>
              {{ this.property.furniture }}
            </div>
          </div>
          <div class="row justify-between">
            <div>
              <span style="color: #fcff68">เครื่องใช้ไฟฟ้าที่ได้ :</span>
              {{ this.property.electronic }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="q-pa-md" style="background: white">
      <div class="description">
        <div class="row">
          <span class="detailHead" style="color: black">คำอธิบายเพิ่มเติม</span>
        </div>
        <div class="row q-pa-md" style="font-weight: 600; font-size: 16px">
          {{ this.property.otherProperty }}
        </div>
      </div>
    </div>

    <div class="q-pa-md">
      <div class="row detailHead" style="color: white">รายละเอียดเพิ่มเติม</div>
      <div class="row detailsFront q-pl-sm q-pr-xs q-py-sm">
        <div class="col q-gutter-y-sm">
          <div class="row">วิวโดยรอบ</div>
          <div class="row detailsBack">{{ this.property.surroundView }}</div>
          <div class="row">ทิศหน้าบ้าน</div>
          <div class="row detailsBack">
            {{ this.property.directionHouse }}
          </div>
          <div class="row">OCC Rate</div>
          <div class="row detailsBack">{{ this.property.occRate }}</div>
          <div class="row">ระบบความปลอดภัย</div>
          <div class="row detailsBack">
            {{ this.property.securitySystem }}
          </div>
          <div class="row">จุดเด่นทำเล</div>
          <div class="row detailsBack">{{ this.property.areaHighlight }}</div>
        </div>
        <q-separator vertical color="white" />
        <div class="col">
          <div class="marginAftSep q-gutter-y-sm">
            <div class="row">Facilities</div>
            <div class="row detailsBack">{{ this.property.facility }}</div>
            <div class="row">ระบบน้ำ/ไฟ</div>
            <div class="row detailsBack">
              {{ this.property.waterFireSystem }}
            </div>
            <div class="row">ค่าส่วนกลางตลอดปี</div>
            <div class="row detailsBack">{{ this.property.commonFee }}</div>
            <div class="row">อายุบ้าน/คอนโด</div>
            <div class="row detailsBack">{{ this.property.houserAge }}</div>
            <div class="row">เหตุผลที่ขาย</div>
            <div class="row detailsBack">{{ this.property.reasonSale }}</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="row justify-center text-bold q-pa-sm"
      style="background-color: red; color: white; font-size: 20px"
    >
      ข้อมูลต่อไปนี้ห้ามเผยแพร่
    </div>
    <div class="q-px-md q-pt-md q-pb-none agentBG" style="overflow: hidden">
      <q-img class="topRotate" src="../images/cityRT.png" />
      <q-img class="bottomRotate" src="../images/cityRT.png" />
      <div class="description">
        <div class="row detailHead">สำหรับ Agent</div>
        <div class="row q-pa-md" style="font-weight: 600; font-size: 16px">
          <div class="col q-gutter-y-md text-black">
            <div class="row">
              <div class="col">Agent เจ้าของทรัพย์ :</div>
              <div class="col">
                {{ this.agent.agentName }} <span class="q-ml-xs"></span>
                {{ this.agent.agentLastName }}
              </div>
            </div>
            <div class="row">
              <div class="col">เจ้าของทรัพย์ :</div>
              <div class="col">
                {{ this.agent.propertyOwnerName }}
                <span class="q-ml-xs"></span>
                {{ this.agent.propertyOwnerLastName }}
              </div>
            </div>
            <div class="row">
              <div class="col">เบอร์ติดต่อ 1 :</div>
              <div class="col">{{ this.agent.phoneNumber1 }}</div>
            </div>
            <div class="row">
              <div class="col">เบอร์ติดต่อ 2 :</div>
              <div class="col">{{ this.agent.phoneNumber2 }}</div>
            </div>
            <div class="row">
              <div class="col">ID Line :</div>
              <div class="col">{{ this.agent.idLine }}</div>
            </div>
            <div class="row">
              <div class="col-4">ช่องทางติดต่อเพิ่มเติม :</div>
              <div class="col-2"></div>
              <div class="col">{{ this.agent.otherContact }}</div>
            </div>
            <div class="row">
              <div class="col">วันที่เริ่มจำนอง :</div>
              <div class="col">{{ this.agent.mortgageDate }}</div>
            </div>
            <div class="row">
              <div class="col">ธนาคารที่ติดจำนอง :</div>
              <div class="col">{{ this.agent.mortgageBank }}</div>
            </div>
            <div class="row">
              <div class="col">ยอดติดจำนอง :</div>
              <div class="col">{{ this.agent.mortgagePrice }}</div>
            </div>
            <div class="row">
              <div class="col">ราคาประเมิน :</div>
              <div class="col">{{ this.agent.appraisalPrice }}</div>
            </div>
            <div class="row">
              <div class="col">ราคาตลาด :</div>
              <div class="col">{{ this.agent.marketPrice }}</div>
            </div>
            <div class="row">
              <div class="col">ราคา Last Match :</div>
              <div class="col">{{ this.agent.lastMatch }}</div>
            </div>
            <div class="row">
              <div class="col">ราคาขาย :</div>
              <div class="col">{{ this.agent.sellPrice }}</div>
            </div>
            <div class="row">
              <div class="col">ราคาเช่า :</div>
              <div class="col">{{ this.agent.rentalPrice }}</div>
            </div>
            <div class="row">
              <div class="col">ราคาต่ำสุดที่ลดได้ :</div>
              <div class="col">{{ this.agent.minDicount }}</div>
            </div>
            <div class="row">
              <div class="col">ภาษี/ภาษีธุรกิจเฉพาะ :</div>
              <div class="col">{{ this.agent.specificTax }}</div>
            </div>
            <div class="row">
              <div class="col">อากร :</div>
              <div class="col">{{ this.agent.taxation }}</div>
            </div>
            <div class="row">
              <div class="col">เงื่อนไขการโอน :</div>
              <div class="col">{{ this.agent.transterCondition }}</div>
            </div>
            <div class="row">
              <div class="col">ค่าธรรมเนียมโอน :</div>
              <div class="col">{{ this.agent.transferFee }}</div>
            </div>
            <div class="row">
              <div class="col">อัตราคอมฯ :</div>
              <div class="col">{{ this.agent.commissionRate }}</div>
            </div>
            <div class="row">
              <div class="col">อื่นๆ :</div>
              <div class="col">
                {{ this.agent.otherAgent }}
              </div>
            </div>

            <div class="row justify-around">
              <div class="col">วันที่ได้ทรัพย์มา</div>
              <div class="col">{{ this.agent.acquisitionDate }}</div>
            </div>
            <div class="row">
              <div class="col">หมายเหตุเพิ่มเติม</div>
              <div class="col">
                {{ this.agent.additionalNote }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import { Platform } from "quasar";
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
      dialog: false,
      maximizedToggle: true,
      slide: 0,
      confirm: null,
      deletePin: false,
      editPin: false,
      modelImage: [],
      documentName: null,
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
        houseSize: null, //ขนาดพื้นที่บ้าน
        areaSize: null, //ที่ดิน
        floor: null, //ชั้นที่
        bedRoom: null, //ห้องนอน
        toilet: null,
        surroundView: null, //วิวโดยรอบ
        occRate: null, //ค่าไรหนิ
        widthFrontHouse: null, //ความกว้างหน้าบ้าน
        directionHouse: null, //ทิศหน้าบ้าน
        furniture: null,
        electronic: null, //เตรื่องใช้ไฟฟ้าที่ได้
        commonFee: null, //ค่าส่วนกลางต่อปี
        houserAge: null, //อายุบ้าน
        facility: null,
        reasonSale: null, //เหตุผลที่ขาย
        securitySystem: null, //ระบบความปลอดภัย
        areaHighlight: null, //จุดเด่นของสถานที่
        waterFireSystem: null, // ระบบน้ำ/ไฟ4
        otherProperty: null, // อื่น ๆ ของทรัพย์
      },
      agent: {
        agentName: null,
        agentLastName: null,
        propertyOwnerName: null,
        propertyOwnerLastName: null,
        phoneNumber1: null,
        phoneNumber2: null,
        idLine: null,
        otherContact: null, //ช่องทางติดต่อเพิ่มเติม
        mortgageDate: null, //วันที่จำนอง
        mortgageBank: null, //ธนาคารที่ติดจำนอง
        mortgagePrice: null, //ยอดจำนอง
        appraisalPrice: null, //ราคาประเมิน
        marketPrice: null,
        lastMatch: null, //ราคา Last Match
        sellPrice: null, //ราคาขาย
        rentalPrice: null, //ราคาเช่า
        minDicount: null, //ราคาต่ำสุดที่ลดได้
        specificTax: null, //ค่าภาษีธุรกิจเฉพาะ
        commissionRate: null, //อัตราคอมฯ
        taxation: null, //ภาษีอากร
        transterCondition: null, //เงื่อนไขการโอน
        transferFee: null, //ค่าธรรมเนียมโอน
        otherAgent: null, //ค่าธรรมเนียมโอน
        acquisitionDate: null, //วันที่ได้ทรัพย์มา
        additionalNote: null, //หมายเหตุเพิ่มเติม
      }, //
      propertyId: null,
    };
  },
  async mounted() {
    if (this.$route.query.propertyId) {
      this.propertyId = this.$route.query.propertyId;
      this.queryDoc();
    } else {
      const { property, agent, documentName } = this.getDataProperty;
      this.property = property;
      this.agent = agent;
      this.documentName = documentName;
      this.propertyId = this.getDocumentId;
    }
    await this.getImage();
  },
  methods: {
    ...mapActions({
      setDataProperty: "document/setDataProperty",
    }),
    async queryDoc() {
      const db = this.$firebase.firestore();
      const docRef = db.collection("property").doc(this.propertyId);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            const { property, agent, documentName } = doc.data();
            this.property = property;
            this.agent = agent;
            this.documentName = documentName;
            this.setDataProperty({ property, agent, documentName });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
    async deleteData() {
      this.$q.loading.show();

      const { uid, email } = this.getUserLogin;

      const mapdata = {
        id: this.propertyId,
        user: {
          uid,
          email,
        },
      };

      await axios.put(`${this.getDatabaseUrl}/delete`, mapdata);

      this.$q.loading.hide();
      this.$router.go(-1);
    },
    async getImage() {
      const storageRef = this.$firebase
        .storage()
        .ref(`property/${this.propertyId}`);

      storageRef.listAll().then((res) => {
        res.items.forEach((itemRef) => {
          itemRef.getDownloadURL().then((url) => {
            console.log("🚀 ~ url", url);
            this.modelImage.push({
              url,
              name: itemRef.name,
            });
          });
        });
      });
    },
    async downloadImage() {
      if (Platform.is.ios) {
        console.log("open google photo");
        window.open("https://www.w3schools.com");
      } else {
        const storageRef = this.$firebase
          .storage()
          .ref(`property/${this.propertyId}`);

        storageRef.listAll().then((res) => {
          res.items.forEach((itemRef) => {
            itemRef.getDownloadURL().then((url) => {
              console.log(url);
              var xhr = new XMLHttpRequest();
              xhr.responseType = "blob";
              xhr.onload = (event) => {
                var a = document.createElement("a");
                a.href = window.URL.createObjectURL(xhr.response);
                a.download = itemRef.name; // Name the file anything you'd like.
                a.style.display = "none";
                document.body.appendChild(a);
                a.click();
              };
              xhr.open("GET", url);
              xhr.send();
            });
          });
        });
      }
    },
    async downloadSingleImage() {
      const { name } = this.modelImage[this.slide];

      const storageRef = this.$firebase
        .storage()
        .ref(`property/${this.propertyId}`);

      storageRef
        .child(name)
        .getDownloadURL()
        .then((url) => {
          // This can be downloaded directly:
          var xhr = new XMLHttpRequest();
          xhr.responseType = "blob";
          xhr.onload = (event) => {
            var a = document.createElement("a");
            a.href = window.URL.createObjectURL(xhr.response);
            a.download = name; // Name the file anything you'd like.
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
          };
          xhr.open("GET", url);
          xhr.send();
        });
    },
  },
};
</script>

<style scoped>
.bottomRotate {
  position: absolute;
  width: 500px;
  height: 400px;
  right: -150px;
  transform: rotate(220deg);
  top: -90px;
  opacity: 0.6;
}

.topRotate {
  width: 500px;
  height: 400px;
  left: -150px;
  position: absolute;
  transform: rotate(40deg);
  bottom: -60px;
  opacity: 0.6;
}

.agentBG {
  position: relative;
  color: #fff;
  background: #fcf75e;
}

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

.title {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.tagsStyle {
  border-radius: 5px;
  width: auto;
  min-width: 50px;
  height: 35px;
  background: #fff;
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
  color: #000000;
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

.imgwrapper {
  overflow: auto;
  max-height: 250px;
  width: 100%;
  position: relative;
}

.imgwrapper .q-img {
  height: 100%;
  width: 200%;
  vertical-align: bottom;
}
</style>