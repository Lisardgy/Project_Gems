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
            <div class="padInputBox">
              <q-input class="inputBox" outlined v-model="text" dense />
            </div>
          </div>
          <div class="col dataArea">
            <div class="dataTitle">ชื่อคอนโด</div>
            <div class="padInputBox">
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
              <div class="col-5 dataTitle">
                บ้านเลขที่/เลขที่ห้อง
                <div style="padding-left: 10px">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
              <div class="col-3 dataTitle">
                อาคาร/ตึก
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
              <div class="col-3 dataTitle">
                หมู่ที่/ชั้น
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col-6 dataTitle">
                ซอย/ถนน
                <div class="padInputBox">
                  <q-input
                    style="width: 92%"
                    class="inputBox"
                    outlined
                    v-model="text"
                    dense
                  />
                </div>
              </div>
              <div class="col-6 dataTitle">
                ตำบล
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col-6 dataTitle" style="padding: 0px">
                อำเภอ
                <div class="padInputBox">
                  <q-input
                    style="width: 92%"
                    class="inputBox"
                    outlined
                    v-model="text"
                    dense
                  />
                </div>
              </div>
              <div class="col-6 dataTitle" style="padding: 0px">
                จังหวัด
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col-6 dataTitle">
                เนื้อที่บ้าน/ห้อง
                <div class="padInputBox">
                  <q-input
                    style="width: 92%"
                    class="inputBox"
                    outlined
                    v-model="text"
                    dense
                    suffix="ตร.ม."
                  />
                </div>
              </div>
              <div class="col-6 dataTitle">
                เนื่อที่ทีดิน
                <div class="padInputBox">
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
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col-4 dataTitle">
                จำนวนชั้น
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
              <div class="col-4 dataTitle">
                ห้องนอน
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
              <div class="col-3 dataTitle">
                ห้องน้ำ
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                วิวโดยรอบ
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col-3 dataTitle">
                OCC Rate
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="text"
                    dense
                    suffix="%"
                  />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ความกว้างหน้าบ้าน
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="text"
                    dense
                    suffix="ม."
                  />
                </div>
              </div>
              <div class="col-3 dataTitle">
                ทิศหน้าบ้าน
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                เฟอร์นิเจอร์ที่ได้
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                เครื่องใช้ไฟฟ้าที่ได้
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                ค่าส่วนกลางตลอดปี
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                อายุบ้าน/คอนโด
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                Facility
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                เหตุผลที่ขาย
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                ระบบความปลอดภัย
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                จุดเด่นทำเล
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                ระบบน้ำ/ไฟ
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                อื่นๆ
                <div class="padInputBox">
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
          <q-separator class="q-my-lg" color="white" inset />
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                รูปภาพ
                <div class="padInputBox">
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
        </div>
        <q-separator class="q-my-lg" color="white" inset />
        <div class="dataHeader">
          ข้อมูลสำหรับ Agent
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col-4 dataTitle">
                Agent
                <div>เจ้าของทรัพย์</div>
              </div>
              <div class="col-4 dataTitle">
                <q-input
                  class="inputBox"
                  style="width: 95%"
                  outlined
                  v-model="text"
                  label="ชื่อ"
                  dense
                />
              </div>
              <div class="col-4 dataTitle">
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
            <div class="row justify-between dataArea items-center">
              <div class="col-4 dataTitle">เจ้าของทรัพย์</div>
              <div class="col-4 dataTitle">
                <q-input
                  class="inputBox"
                  style="width: 95%"
                  outlined
                  v-model="text"
                  label="ชื่อ"
                  dense
                />
              </div>
              <div class="col-4 dataTitle">
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
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                เบอรติดต่อที่ 1
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
              <div class="col-5 dataTitle">
                เบอรติดต่อที่ 2
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                ID Line
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ติดต่อเพิ่มเติม
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                วันที่เริ่มจำนอง
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ธนาคารที่ติดจำนอง
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                ยอดติดจำนอง
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ราคาประเมิน
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                ราคาตลาด
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ราคา Last Match
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                ราคาขาย
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ราคาเช่า
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                ราคาต่ำสุดที่ลดได้
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ค่าภาษีธุรกิจเฉพาะ
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                อัตราคอมฯ
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
              <div class="col-5 dataTitle">
                อากร
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                เงื่อนไขการโอน
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ค่าธรรมเนียมโอน
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="text" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                อื่นๆ
                <div class="padInputBox">
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
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                หมายเหตุเพิ่มเติม
                <div class="padInputBox">
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
  border-radius: 5px;
}
.dataHeader {
  font-size: 24px;
  font-weight: bolder;
}
.dataTitle {
  font-size: 14px;
  font-weight: bolder;
}
.datafont {
  font-size: 14px;
}
.dataArea {
  padding: 5px 10px 10px 10px;
}
.padInputBox {
  padding-left: 10px;
}
</style>
