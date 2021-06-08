<template>
  <q-layout view="lHh Lpr lFf">
    <div class="body">
      <div class="q-py-md">
        <div class="row items-center q-px-md">
          <div class="col">
            <div class="row items-center">
              <img
                src="../images/white_back.png"
                alt=""
                width="45px"
                height="45px"
              />
              <span class="backText">ย้อนกลับ</span>
            </div>
          </div>
          <div class="col">
            <div class="row justify-end">
              <div class="operationBtn row items-center justify-center">
                <div class="operationText">ลบ</div>
              </div>
              <div class="q-mx-xs"></div>
              <div class="operationBtn row items-center justify-center">
                <div class="operationText">แก้ไข</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row q-px-md" style="margin: 1rem 0">
          <div class="col">
            <div class="title">อิราวดี</div>
          </div>
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
              <div
                class="downloadIamges row items-centers justify-center"
                style="font-size: 28px"
              >
                <span class="material-icons">file_download</span>
              </div>
            </div>
          </div>
        </div>
        <!-- ยังอ่อนหัด -->
        <div class="q-px-none q-pt-md q-px-sm" style="padding-bottom: 2px">
          <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            padding
            height="200px"
            class="bg-grey-1 shadow-2 rounded-borders"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div class="row fit justify-start items-center no-wrap">
                <q-img
                  class="rounded-borders full-height"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div
                class="
                  row
                  fit
                  justify-start
                  items-center
                  q-gutter-xs q-col-gutter
                  no-wrap
                "
              >
                <q-img
                  class="rounded-borders full-height"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
              <div
                class="
                  row
                  fit
                  justify-start
                  items-center
                  q-gutter-xs q-col-gutter
                  no-wrap
                "
              >
                <q-img
                  class="rounded-borders full-height"
                  src="https://cdn.quasar.dev/img/linux-avatar.png"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap">
              <div
                class="
                  row
                  fit
                  justify-start
                  items-center
                  q-gutter-xs q-col-gutter
                  no-wrap
                "
              >
                <q-img
                  class="rounded-borders full-height"
                  src="https://cdn.quasar.dev/img/donuts.png"
                />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <!-- ยังอ่อนหัด -->
        <div class="row overviewTab items-center">
          <div class="overviewText q-ml-md">Overview</div>
        </div>
        <div class="q-pa-md">
        <div class="row detailHead ">รายละเอียด</div>
        <div class="row detailTitle q-px-md">ที่อยู่ :</div>
        <div class="row details q-px-lg q-py-sm">
          <div class="col">
            <div class="row justify-between">
              <div><span style="color:#ffff01">บ้านเลขที่:</span> 114/73</div>
              <div><span style="color:#ffff01">หมู่ที่/ชั้น:</span> 1</div>
            </div>
            <div class="row justify-between ">
              <div ><span style="color:#ffff01">ซอย:</span> มหาเศรษฐี 23</div>
              <div><span style="color:#ffff01">ถนน:</span> พัฒนาการคูขวาง</div>
            </div>
            <div class="row justify-between">
              <div><span style="color:#ffff01">ตำบล:</span> กระทู้</div>
              <div>อำเภอ: กระทู้</div>
            </div>
            <div class="row between"><div><span style="color:#ffff01">จังหวัด:</span> นครศรีธรรมราช</div></div>
          </div>
          
        </div>
          <q-separator class="q-my-sm" color="white" inset />
          <div class="row detailTitle q-px-md">พื้นที่ :</div>
        <div class="row details q-px-lg q-py-sm">
          <div class="col">
            <div class="row justify-between">
              <div><span style="color:#ffff01">พื้นที่ดิน :</span>  18 ตร.วา</div>
              <div><span style="color:#ffff01">พื้นที่บ้าน :</span> 60 ตร.ม.</div>
            </div>
            <div class="row justify-between ">
              <div ><span style="color:#ffff01">ความกว้างหน้าบ้าน :</span> 6 ม.</div>
              
            </div>
            
            </div>
          </div>
          <q-separator class="q-my-sm" color="white" inset />
          <div class="row detailTitle q-px-md">รายละเอียดภายใน :</div>
        <div class="row details q-px-lg q-py-sm">
          <div class="col">
            <div class="row justify-between">
              <div><span style="color:#ffff01">ห้องนอน :</span> 2</div>
              <div><span style="color:#ffff01">ห้องน้ำ :</span> 1</div>
            </div>
            <div class="row justify-between">
              <div><span style="color:#ffff01">เฟอร์นิเจอร์ที่ได้ :</span> โซฟา โต๊ะทำงาน ตู้เสื้อผ้า เตียง เก้าอี้ โคมไฟ</div>
            </div>
            <div class="row justify-between">
              <div><span style="color:#ffff01">เครื่องใช้ไฟฟ้าที่ได้ :</span> แอร์ในห้องนอน 2 เครื่อง</div>
            </div>
            </div>
          </div>
        </div>
        <div class="q-pa-md" style="background:white">
          <div class="description">
            <div class="row"><span class="detailHead" style="color:black">คำอธิบายเพิ่มเติม</span></div>
            <div class="row q-pa-md" style="font-weight:600;font-size:16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a lectus tincidunt sem finibus accumsan.
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
    };
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
}

.operationText {
  color: #ffff01;
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
</style>