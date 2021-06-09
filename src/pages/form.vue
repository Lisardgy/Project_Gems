 <template>
  <q-layout view="lHh Lpr lFf" class="bg-brand">
    <q-header elevated>
      <q-toolbar style="height: 60px" class="bg-button">
        <q-btn
          class="absolute-center font-button full-width"
          flat
          label="ยืนยัน"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md" style="color: white">
        <div class="dataHeader">
          ข้อมูลทรัพย์
          <div class="col dataArea">
            <div class="dataTitle">ชื่อโครงการ</div>
            <div>
              <q-input class="inputBox" outlined v-model="text" dense />
            </div>
          </div>
          <div class="col dataArea">
            <div class="dataTitle">ชื่อคอนโด</div>
            <div>
              <q-input class="inputBox" outlined v-model="text" dense />
            </div>
          </div>
          <div class="col dataArea">
            <div class="dataTitle">ประเภท</div>
            <div class="justify-center">
              <div class="q-gutter-y-md">
                <q-btn-toggle
                  size="16px"
                  v-model="model"
                  toggle-color="primary"
                  class="datafont"
                  spread
                  :options="[
                    { label: 'บ้านเดี่ยว', value: 'บ้านเดี่ยว' },
                    { label: 'บ้านแฝด', value: 'บ้านแฝด' },
                    { label: 'คอนโดฯ', value: 'คอนโดฯ' },
                  ]"
                />
              </div>
            </div>
          </div>
          <div class="col dataArea">
            <div class="dataTitle">สถานะ</div>
            <div class="q-gutter-y-md">
              <q-btn-toggle
                size="16px"
                v-model="model"
                toggle-color="primary"
                class="datafont"
                spread
                :options="[
                  { label: 'บ้านเดี่ยว', value: 'บ้านเดี่ยว' },
                  { label: 'บ้านแฝด', value: 'บ้านแฝด' },
                  { label: 'คอนโดฯ', value: 'คอนโดฯ' },
                ]"
              />
            </div>
          </div>

          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col-7 dataTitle">
                บ้านเลขที่/เลขที่ห้อง
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
              <div class="col-4 dataTitle">
                อาคาร/ตึก
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col-3 dataTitle">
                หมู่ที่/ชั้น
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
              <div class="col-4 dataTitle">
                ซอย/ถนน
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
              <div class="col-4 dataTitle">
                ตำบล
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col-5 dataTitle" style="padding: 0px">
                อำเภอ
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
              <div class="col-6 dataTitle" style="padding: 0px">
                จังหวัด
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col-5 dataTitle">
                เนื้อที่บ้าน/ห้อง
                <q-input
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                  suffix="ตร.ม."
                />
              </div>
              <div class="col-6 dataTitle">
                เนื่อที่ทีดิน
                <q-input
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                  suffix="ตร.วา"
                />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col-4 dataTitle">
                จำนวนชั้น
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
              <div class="col-4 dataTitle">
                ห้องนอน
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
              <div class="col-3 dataTitle">
                ห้องน้ำ
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                วิวโดยรอบ
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col-4 dataTitle">
                OCC Rate
                <q-input
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                  suffix="%"
                />
              </div>
              <div class="col-7 dataTitle">
                ความกว้างหน้าบ้าน
                <q-input
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                  suffix="ม."
                />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                ทิศหน้าบ้าน
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                เฟอร์นิเจอร์ที่ได้
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                เครื่องใช้ไฟฟ้าที่ได้
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                ค่าส่วนกลางตลอดปี
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                อายุบ้าน/คอนโด
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                Facility
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                เหตุผลที่ขาย
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                ระบบความปลอดภัย
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                จุดเด่นทำเล
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                ระบบน้ำ/ไฟ
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                อื่นๆ
                <q-input
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                  type="textarea"
                />
              </div>
            </div>
          </div>
          <q-separator class="q-my-lg" color="white" inset />
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                รูปภาพ
                <q-uploader
                  class="full-width"
                  label="เลือกรูปภาพที่ต้องการ"
                  color="amber"
                  text-color="black"
                  multiple
                />
              </div>
            </div>
          </div>
        </div>
        <q-separator class="q-my-lg" color="white" inset />
        <div class="dataHeader">
          ข้อมูลสำหรับ Agent
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col-12 dataTitle">Agent/เจ้าของทรัพย์</div>
              <div class="col-6 dataTitle">
                <q-input
                  class="inputBox"
                  style="width: 95%"
                  outlined
                  v-model="text"
                  label="ชื่อ"
                  dense
                />
              </div>
              <div class="col-6 dataTitle">
                <q-input
                  class="inputBox"
                  outlined
                  v-model="text"
                  label="สกุล"
                  dense
                />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col-12 dataTitle">ชื่อเจ้าของทรัพย์</div>
              <div class="col-6 dataTitle">
                <q-input
                  class="inputBox"
                  style="width: 95%"
                  outlined
                  v-model="text"
                  label="ชื่อ"
                  dense
                />
              </div>
              <div class="col-6 dataTitle">
                <q-input
                  class="inputBox"
                  outlined
                  v-model="text"
                  label="สกุล"
                  dense
                />
              </div>
            </div>
          </div>

          <div class="col">
            <div class="row justify-evenly dataArea">
              <div class="col-6 dataTitle">
                เบอรติดต่อที่ 1
                <q-input
                  style="width: 95%"
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                />
              </div>
              <div class="col-6 dataTitle">
                เบอรติดต่อที่ 2
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-evenly dataArea">
              <div class="col-6 dataTitle">
                ID Line
                <q-input
                  style="width: 95%"
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                />
              </div>
              <div class="col-6 dataTitle">
                ติดต่อเพิ่มเติม
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-evenly dataArea">
              <div class="col-6 dataTitle">
                วันที่เริ่มจำนอง
                <q-input
                  style="width: 95%"
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                />
              </div>
              <div class="col-6 dataTitle">
                ธนาคารที่ติดจำนอง
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-evenly dataArea">
              <div class="col-6 dataTitle">
                ยอดติดจำนอง
                <q-input
                  style="width: 95%"
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                />
              </div>
              <div class="col-6 dataTitle">
                ราคาประเมิน
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-evenly dataArea">
              <div class="col-6 dataTitle">
                ราคาตลาด
                <q-input
                  style="width: 95%"
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                />
              </div>
              <div class="col-6 dataTitle">
                ราคา Last Match
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-evenly dataArea">
              <div class="col-6 dataTitle">
                ราคาขาย
                <q-input
                  style="width: 95%"
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                />
              </div>
              <div class="col-6 dataTitle">
                ราคาเช่า
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-evenly dataArea">
              <div class="col-6 dataTitle">
                ราคาต่ำสุดที่ลดได้
                <q-input
                  style="width: 95%"
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                />
              </div>
              <div class="col-6 dataTitle">
                ค่าภาษีธุรกิจเฉพาะ
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-evenly dataArea">
              <div class="col-6 dataTitle">
                อัตราคอมฯ
                <q-input
                  style="width: 95%"
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                />
              </div>
              <div class="col-6 dataTitle">
                ภาษีอากร
                <q-input
                  style="width: 95%"
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-evenly dataArea">
              <div class="col-6 dataTitle">
                เงื่อนไขการโอน
                <q-input
                  style="width: 95%"
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                />
              </div>
              <div class="col-6 dataTitle">
                ค่าธรรมเนียมโอน
                <q-input class="inputBox" outlined v-model="text" dense />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                อื่นๆ
                <q-input
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                  type="textarea"
                />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                หมายเหตุเพิ่มเติม
                <q-input
                  class="inputBox"
                  outlined
                  v-model="text"
                  dense
                  type="textarea"
                />
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      model: "one",
      shape: "line",
    };
  },
};
</script>

<style>
.bg-brand {
  background: #010135;
}
.bg-button {
  background: #ffdd02;
}

.font-button {
  font-size: 22px;
  font-weight: bolder;
  color: black;
}
.inputBox {
  font-size: 16px;
  color: black;
  background-color: white;
  border-radius: 10px;
}
.dataHeader {
  font-size: 24px;
  font-weight: bolder;
}
.dataTitle {
  font-size: 18px;
  font-weight: bolder;
}
.datafont {
  font-size: 16px;
}
.dataArea {
  padding: 8px 15px 10px 15px;
}
</style>
