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
              @click="$router.push({ name: 'editroom' })"
            />
          </div>
        </div>
      </div>
      <div class="row q-pa-sm q-ma-sm items-baseline justify-left">
        <div class="row title">หมายเลขห้อง {{ this.property.houseNumber }}</div>
      </div>
    </div>

    <div class="row q-px-md justify-between">
      <div class="col">
        <div class="row q-gutter-sm">
          <div class="tagsStyle text-bold row items-center q-px-sm">
            {{ this.property.status }}
          </div>
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
    <!-- ยังอ่อนหัด -->
    <div class="q-px-none q-pt-md">
      <div v-if="modelImage.length < 2">
        <q-img
          v-for="(data, index) in modelImage"
          :key="index"
          :src="data.url"
          @click="dialog = true"
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
          <div class="">
            <div class="text-h5 q-mx-md">
              หมายเลขห้อง : {{ this.property.houseNumber }}
            </div>
          </div>
          <div v-for="(data, index) in modelImage" :key="index">
            <div class="row justify-end q-mx-sm">
              <q-btn
                class="downloadIamges row items-centers justify-center"
                size="20px"
                icon="file_download"
                @click="downloadSingleImage(data)"
              >
              </q-btn>
            </div>
            <div class="q-my-sm">
              <q-img :src="data.url" />
            </div>
          </div>
        </q-card>
      </q-dialog>
    </div>
    <!-- ยังอ่อนหัด -->
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
              <span style="color: #fcff68">หมายเลขห้อง:</span>
              {{ this.property.houseNumber }}
            </div>
            <div>
              <span style="color: #fcff68">ชั้น:</span>
              {{ this.property.swine }}
            </div>
          </div>
          <div class="row justify-between">
            <div>
              <span style="color: #fcff68">ซอย-ถนน:</span>
              {{ this.property.alley }}
            </div>
            <div>
              <span style="color: #fcff68">อาคาร/ตึก</span>
              {{ this.property.building }}
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
              <span style="color: #fcff68">ห้องน้ำ :</span
              >{{ this.property.toilet }}
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
              <span style="color: #fcff68">เครื่องใช้ไฟฟ้าที่ได้ :</span
              >{{ this.property.electronic }}
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
        <div class="row detailHead text-black">สำหรับ Agent</div>
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
              <div class="col">ค่าภาษีธุรกิจเฉพาะ :</div>
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
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getDocumentId: "document/getDocumentId",
      getCollectionCondo: "collection/getCollectionCondo",
      getUserLogin: "user_config/getUserLogin",
      getDatabaseUrl: "databaseUrl/getDatabaseUrl",
    }),
  },
  data() {
    return {
      dialog: false,
      maximizedToggle: true,
      slide: 1,
      deletePin: false,
      editPin: false,
      confirm: null,
      modelImage: [],
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
    };
  },
  mounted() {
    this.getImage();
    const { property, agent } = this.getCollectionCondo;
    this.property = property;
    this.agent = agent;
  },
  methods: {
    async deleteData() {
      this.$q.loading.show();

      const mapdata = {
        id: this.getCollectionCondo.id,
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
        .ref(`property/${this.getCollectionCondo.id}`);

      storageRef
        .listAll()
        .then((res) => {
          res.items.forEach((itemRef) => {
            itemRef.getDownloadURL().then((url) => {
              this.modelImage.push({
                url,
                name: itemRef.name,
              });
            });
          });
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });
    },
    async downloadSingleImage(data) {
      const { url, name } = data;

      const storageRef = this.$firebase
        .storage()
        .ref(`property/${this.getDocumentId}`);

      storageRef
        .child(data.name)
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

.imgwrapper {
  overflow: auto;
  max-height: 500px;
  position: relative;
}

.imgwrapper .q-img {
  height: 100%;
  width: 200%;
  vertical-align: bottom;
}
</style>