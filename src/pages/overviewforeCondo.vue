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
        <div class="condoTitle">{{this.property.name}}</div>
      </div>

      <div class="row q-px-md" style="margin-left: 2rem">
        <div class="col-8">
          <div class="row">
            <div class="tagsStyle text-bold row items-center q-px-sm">
              บ้านเดี่ยว
            </div>
            <div class="q-mx-xs"></div>
            <div class="tagsStyle text-bold row items-center q-px-sm">
              รอขาย
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
      <div class="row overviewTab items-center">
        <div class="overviewText q-ml-md">Overview</div>
      </div>
      <div class="q-pa-md">
        <div class="row detailHead">รายละเอียด</div>
        <div class="row detailTitle q-px-md">ที่อยู่ :</div>
        <div class="row details q-px-lg q-py-sm">
          <div class="col">
            <div class="row justify-between">
              <div><span style="color: #fcff68">บ้านเลขที่:</span> 114/73</div>
              <div><span style="color: #fcff68">หมู่ที่/ชั้น:</span> 1</div>
            </div>
            <div class="row justify-between">
              <div><span style="color: #fcff68">ซอย:</span> มหาเศรษฐี 23</div>
              <div><span style="color: #fcff68">ถนน:</span> พัฒนาการคูขวาง</div>
            </div>
            <div class="row justify-between">
              <div><span style="color: #fcff68">ตำบล:</span> กระทู้</div>
              <div><span style="color: #fcff68">อำเภอ:</span> กระทู้</div>
            </div>
            <div class="row between">
              <div>
                <span style="color: #fcff68">จังหวัด:</span> นครศรีธรรมราช
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row overviewTab items-center justify-between">
        <div class="overviewText q-ml-md">ห้อง</div>
        <div class="q-mx-lg"><q-btn class=" addRoomBtn row items-center justify-center" label="เพิ่มห้อง +" /></div>
      </div>

      <div class="q-pa-md row justify-center q-gutter-md">
        <q-card
          class="card2"
          flat
          @click="$router.push({ name: 'overviewInCondo' })"
        >
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

          <q-card-section>
            <div class="text-h6 q-mt-sm q-mb-xs text-bold">
              หมายเลขห้อง: 5555
              <span style="font-size: 14px">(ชั้น : 5 - ตึก : 3)</span>
            </div>
            <div class="text-caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </q-card-section>
          <q-card-actions>
            <q-space />
            <q-btn color="grey" round flat dense label="ดูข้อมูลเพิ่มเติม..." />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      slide: 1,
      deletePin: false,
      editPin: false,
      expanded: false,
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
  methods() {},
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
  font-weight:bolder;
}

</style>