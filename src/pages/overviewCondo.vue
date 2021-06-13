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
      <div class="row q-px-md justify-center">
        <div class="condoTitle">อิราวดีคอนโด</div>
      </div>
      <div class="row q-px-md q-mb-md">
        <div class="projectTitle">อิราวดี</div>
      </div>
      <div class="row q-px-md" style="margin-left: 2rem">
        <div class="col-8">
          <div class="row">
            <div class="tagsStyle row items-center q-px-sm">บ้านเดี่ยว</div>
            <div class="q-mx-xs"></div>
            <div class="tagsStyle row items-center q-px-sm">รอขาย</div>
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
        <q-separator class="q-my-sm" color="white" inset />
        <div class="row detailTitle q-px-md">พื้นที่ :</div>
        <div class="row details q-px-lg q-py-sm">
          <div class="col">
            <div class="row justify-between">
              <div>
                <span style="color: #fcff68">พื้นที่ดิน :</span> 18 ตร.วา
              </div>
              <div>
                <span style="color: #fcff68">พื้นที่บ้าน :</span> 60 ตร.ม.
              </div>
            </div>
            <div class="row justify-between">
              <div>
                <span style="color: #fcff68">ความกว้างหน้าบ้าน :</span> 6 ม.
              </div>
            </div>
          </div>
        </div>
        <q-separator class="q-my-sm" color="white" inset />
        <div class="row detailTitle q-px-md">รายละเอียดภายใน :</div>
        <div class="row details q-px-lg q-py-sm">
          <div class="col">
            <div class="row justify-between">
              <div><span style="color: #fcff68">ห้องนอน :</span> 2</div>
              <div><span style="color: #fcff68">ห้องน้ำ :</span> 1</div>
            </div>
            <div class="row justify-between">
              <div>
                <span style="color: #fcff68">เฟอร์นิเจอร์ที่ได้ :</span> โซฟา
                โต๊ะทำงาน ตู้เสื้อผ้า เตียง เก้าอี้ โคมไฟ
              </div>
            </div>
            <div class="row justify-between">
              <div>
                <span style="color: #fcff68">เครื่องใช้ไฟฟ้าที่ได้ :</span>
                แอร์ในห้องนอน 2 เครื่อง
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
            lectus tincidunt sem finibus accumsan.
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
            <div class="row detailsBack">ชุมชนหลังมุม</div>
            <div class="row">ทิศหน้าบ้าน</div>
            <div class="row detailsBack">ตะวันออกเฉียงเหนือ</div>
            <div class="row">OCC Rate</div>
            <div class="row detailsBack">>90%</div>
            <div class="row">ระบบความปลอดภัย</div>
            <div class="row detailsBack">ไม่มี</div>
            <div class="row">จุดเด่นทำเล</div>
            <div class="row detailsBack">ใกล้ ม.อ เป็นแหล่งชุมชม</div>
          </div>
          <q-separator vertical color="white" />
          <div class="col">
            <div class="marginAftSep q-gutter-y-sm">
              <div class="row">Facilities</div>
              <div class="row detailsBack">ไม่มี</div>
              <div class="row">ระบบน้ำ/ไฟ</div>
              <div class="row detailsBack">จ่ายกับประปาและการไฟฟ้าตามปกติ</div>
              <div class="row">ค่าส่วนกลางตลอดปี</div>
              <div class="row detailsBack">ไม่มี</div>
              <div class="row">อายุบ้าน/คอนโด</div>
              <div class="row detailsBack">21ปีแต่ทำการรีโนเวทใหม่ทั้งหลัง</div>
              <div class="row">เหตุผลที่ขาย</div>
              <div class="row detailsBack">รีโนเวทเพื่อขาย</div>
            </div>
          </div>
        </div>
      </div>

      <div class="q-px-md q-pt-md q-pb-none" style="background: white">
        <div class="description">
          <div class="row detailHead" style="color: black">สำหรับ Agent</div>
          <div class="row q-pa-md" style="font-weight: 600; font-size: 16px">
            <div class="col q-gutter-y-md">
              <div class="row">
                <div class="col">Agent เจ้าของทรัพย์ :</div>
                <div class="col">มหันตภัยร้ายแรง นายซึนามิ</div>
              </div>
              <div class="row">
                <div class="col">เจ้าของทรัพย์ :</div>
                <div class="col">มหันตภัยร้ายแรง นายซึนามิ</div>
              </div>
              <div class="row">
                <div class="col">เบอร์ติดต่อ 1 :</div>
                <div class="col">088-8888888</div>
              </div>
              <div class="row">
                <div class="col">เบอร์ติดต่อ 2 :</div>
                <div class="col">-</div>
              </div>
              <div class="row">
                <div class="col">ID Line :</div>
                <div class="col">@Gems</div>
              </div>
              <div class="row">
                <div class="col-4">ช่องทางติดต่อเพิ่มเติม :</div>
                <div class="col-2"></div>
                <div class="col">Facebook : Gems</div>
              </div>
              <div class="row">
                <div class="col">วันที่เริ่มจำนอง :</div>
                <div class="col">16-May-52</div>
              </div>
              <div class="row">
                <div class="col">ธนาคารที่ติดจำนอง :</div>
                <div class="col">ธอส</div>
              </div>
              <div class="row">
                <div class="col">ยอดติดจำนอง :</div>
                <div class="col">700,000</div>
              </div>
              <div class="row">
                <div class="col">ราคาประเมิน :</div>
                <div class="col">2,500,000</div>
              </div>
              <div class="row">
                <div class="col">ราคาตลาด :</div>
                <div class="col">2,500,000</div>
              </div>
              <div class="row">
                <div class="col">ราคา Last Match :</div>
                <div class="col">2,500,000</div>
              </div>
              <div class="row">
                <div class="col">ราคาขาย :</div>
                <div class="col">2,500,000</div>
              </div>
              <div class="row">
                <div class="col">ราคาเช่า :</div>
                <div class="col">2,500,000</div>
              </div>
              <div class="row">
                <div class="col">ราคาต่ำสุดที่ลดได้ :</div>
                <div class="col">2,500,000</div>
              </div>
              <div class="row">
                <div class="col">ค่าภาษีธุรกิจเฉพาะ :</div>
                <div class="col">ไม่มี</div>
              </div>
              <div class="row">
                <div class="col">อากร :</div>
                <div class="col">ไม่มี</div>
              </div>
              <div class="row">
                <div class="col">เงื่อนไขการโอน :</div>
                <div class="col">คนละครึ่ง</div>
              </div>
              <div class="row">
                <div class="col">ค่าธรรมเนียมโอน :</div>
                <div class="col">คนละครึ่ง</div>
              </div>
              <div class="row">
                <div class="col">อัตราคอมฯ :</div>
                <div class="col">3 %</div>
              </div>
              <div class="row">
                <div class="col">อื่นๆ :</div>
                <div class="col">
                  ค่าภาษีเงินได้ผู้ขายรับ/ค่าจดจำนองผู้ซื้อรับ
                </div>
              </div>

              <div class="row justify-around">
                <div class="">
                  <div>วันที่ได้ทรัพย์มา</div>
                  <div>11/9/1963</div>
                </div>
                <div class="">
                  <div>วันที่มีการอัพเดทข้อมูล</div>
                  <div>05/10/1964</div>
                </div>
              </div>
              <div class="row">
                <div class="col">หมายเหตุเพิ่มเติม</div>
                <div class="col">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus a lectus tincidunt sem accumsan.
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
export default {
  name: "PageIndex",
  data() {
    return {
      slide: 1,
      deletePin: false,
      editPin: false,
    };
  },
  mounted() {
    this.showLoading();
  },
  methods: {
    showLoading() {
      this.$q.loading.show();

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        this.timer = void 0;
      }, 500);
    },
  },

  beforeDestroy() {
    if (this.timer !== void 0) {
      clearTimeout(this.timer);
      this.$q.loading.hide();
    }
  },
};
</script>

<style scoped>
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

.backBtn {
  overflow: hidden;
}
</style>