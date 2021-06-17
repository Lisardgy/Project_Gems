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
              @click="deletePin"
            />
            <div class="q-mx-xs"></div>
            <q-btn
              class="operationBtn row items-center justify-center"
              label="แก้ไข"
              @click="$router.push({ name: 'editform' })"
            />
          </div>
        </div>
      </div>
      <div class="row q-px-md" style="margin: 1rem 0">
        <div class="title">{{ this.property.projectName }}</div>
      </div>
      <div class="row q-px-md" style="margin-left: 2rem">
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
        <div class="col items-center">
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
      <div class="q-px-none q-pt-md q-px-sm" style="padding-bottom: 2px">
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
                <span style="color: #fcff68">ซอย:</span>
                {{ this.property.alley }}
              </div>
              <div>
                <span style="color: #fcff68">ถนน:</span>
                {{ this.property.road }}
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
            <span class="detailHead" style="color: black"
              >คำอธิบายเพิ่มเติม</span
            >
          </div>
          <div class="row q-pa-md" style="font-weight: 600; font-size: 16px">
            {{ this.property.otherProperty }}
          </div>
        </div>
      </div>

      <div class="q-pa-md">
        <div class="row detailHead" style="color: white">
          รายละเอียดเพิ่มเติม
        </div>
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
          <div class="row detailHead" style="color: black">สำหรับ Agent</div>
          <div class="row q-pa-md" style="font-weight: 600; font-size: 16px">
            <div class="col q-gutter-y-md">
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
                <div class="">
                  <div>วันที่ได้ทรัพย์มา</div>
                  <div>{{ this.agent.acquisitionDate }}</div>
                </div>
                <div class="">
                  <div>วันที่มีการอัพเดทข้อมูล</div>
                  <div>**ไม่มี</div>
                </div>
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
    </div>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getDocumentId: "document/getDocumentId",
    }),
  },
  name: "PageIndex",
  data() {
    return {
      slide: 1,
      deletePin: false,
      editPin: false,
      property: {
        projectName: null,
        name: null, //ชื่อคอนโด
        type: null,
        status: null,
        houseNumber: null,
        building: null, //อาคาร
        swine: null, //หมู่
        alley: null, //ซอย
        road: null, //ถนน
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
  async mounted() {
    await this.findCollectionById();
  },
  methods: {
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
    setData(data) {
      console.log(data);
      console.log(data.property.projectName);

      this.property.projectName = data.property.projectName;
      this.property.name = data.property.name; //ชื่อคอนโด
      this.property.type = data.property.type;
      this.property.status = data.property.status;
      this.property.houseNumber = data.property.houseNumber;
      this.property.building = data.property.building; //อาคาร
      this.property.swine = data.property.swine; //หมู่
      this.property.alley = data.property.alley; //ซอย
      this.property.distict = data.property.distict; //อำเภอ
      this.property.subDistict = data.property.subDistict; //ตำบล
      this.property.province = data.property.province; //จังหวัด
      this.property.houseSize = data.property.houseSize; //ขนาดพื้นที่บ้าน
      this.property.areaSize = data.property.areaSize; //ที่ดิน
      this.property.floor = data.property.floor; //ชั้นที่
      this.property.bedRoom = data.property.bedRoom; //ห้องนอน
      this.property.toilet = data.property.toilet;
      this.property.surroundView = data.property.surroundView; //วิวโดยรอบ
      this.property.occRate = data.property.occRate; //ค่าไรหนิ
      this.property.widthFrontHouse = data.property.widthFrontHouse; //ความกว้างหน้าบ้าน
      this.property.directionHouse = data.property.directionHouse; //ทิศหน้าบ้าน
      this.property.furniture = data.property.furniture;
      this.property.electronic = data.property.electronic; //เตรื่องใช้ไฟฟ้าที่ได้
      this.property.commonFee = data.property.commonFee; //ค่าส่วนกลางต่อปี
      this.property.houserAge = data.property.houserAge; //อายุบ้าน
      this.property.facility = data.property.facility;
      this.property.reasonSale = data.property.reasonSale; //เหตุผลที่ขาย
      this.property.securitySystem = data.property.securitySystem; //ระบบความปลอดภัย
      this.property.areaHighlight = data.property.areaHighlight; //จุดเด่นของสถานที่
      this.property.waterFireSystem = data.property.waterFireSystem; // ระบบน้ำ/ไฟ4
      this.property.otherProperty = data.property.otherProperty; // อื่น ๆ ของทรัพย์

      this.agent.agentName = data.agent.agentName;
      this.agent.agentLastName = data.agent.agentLastName;
      this.agent.propertyOwnerName = data.agent.propertyOwnerName;
      this.agent.propertyOwnerLastName = data.agent.propertyOwnerLastName;
      this.agent.phoneNumber1 = data.agent.phoneNumber1;
      this.agent.phoneNumber2 = data.agent.phoneNumber2;
      this.agent.idLine = data.agent.idLine;
      this.agent.otherContact = data.agent.otherContact; //ช่องทางติดต่อเพิ่มเติม
      this.agent.mortgageDate = data.agent.mortgageDate; //วันที่จำนอง
      this.agent.mortgageBank = data.agent.mortgageBank; //ธนาคารที่ติดจำนอง
      this.agent.mortgagePrice = data.agent.mortgagePrice; //ยอดจำนอง
      this.agent.appraisalPrice = data.agent.appraisalPrice; //ราคาประเมิน
      this.agent.marketPrice = data.agent.marketPrice;
      this.agent.lastMatch = data.agent.lastMatch; //ราคา Last Match
      this.agent.sellPrice = data.agent.sellPrice; //ราคาขาย
      this.agent.rentalPrice = data.agent.rentalPrice; //ราคาเช่า
      this.agent.minDicount = data.agent.minDicount; //ราคาต่ำสุดที่ลดได้
      this.agent.specificTax = data.agent.specificTax; //ค่าภาษีธุรกิจเฉพาะ
      this.agent.commissionRate = data.agent.commissionRate; //อัตราคอมฯ
      this.agent.taxation = data.agent.taxation; //ภาษีอากร
      this.agent.transterCondition = data.agent.transterCondition; //เงื่อนไขการโอน
      this.agent.transferFee = data.agent.transferFee; //ค่าธรรมเนียมโอน
      this.agent.otherAgent = data.agent.otherAgent; //ค่าธรรมเนียมโอน
      this.agent.acquisitionDate = data.agent.acquisitionDatel; //วันที่ได้ทรัพย์มา
      this.agent.additionalNote = data.agent.additionalNote; //หมายเหตุเพิ่มเติม
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
}

.topRotate {
  width: 500px;
  height: 400px;
  left: -150px;
  position: absolute;
  transform: rotate(40deg);
  bottom: -60px;
}

.agentBG {
  position: relative;
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
  font-size: 19px;
  font-weight: bold;
  margin-left: 1rem;
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

.agentBG {
  background: linear-gradient(#ffffff, rgb(255, 255, 255));
}
</style>