<template>
  <q-layout view="lHh Lpr lFf" class="bg-brand">
    <q-header elevated>
      <q-toolbar style="height: 50px" class="bg-button">
        <q-btn
          class="absolute-center font-button full-width"
          flat
          label="ยืนยัน"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md" style="color: white">
        <q-btn
          flat
          icon="arrow_back_ios"
          style="font-size: 12px; margin-left: -25px"
          label="ย้อนกลับ"
        />
        <div class="dataHeader">
          ข้อมูลทรัพย์
          <div class="col dataArea">
            <div class="dataTitle">ชื่อโครงการ</div>
            <div class="padInputBox">
              <q-input
                class="inputBox textCenter"
                outlined
                v-model="property.projectName"
                dense
              />
            </div>
          </div>
          <div class="col dataArea">
            <div class="dataTitle">ชื่อคอนโด</div>
            <div class="padInputBox">
              <q-input
                class="inputBox"
                outlined
                v-model="property.name"
                dense
              />
            </div>
          </div>
          <div class="dataTitle dataArea">
            ประเภท
            <div class="col">
              <div class="row justify-between q-pt-sm">
                <div class="col-3 dataTitle">
                  <div class="padInputBox">
                    <q-btn class="statBtn" push label="บ้านเดี่ยว" dense />
                  </div>
                </div>
                <div class="col-3 dataTitle">
                  <div class="padInputBox">
                    <q-btn class="statBtn" push label="บ้านแฝด" dense />
                  </div>
                </div>
                <div class="col-3 dataTitle">
                  <div class="padInputBox">
                    <q-btn class="statBtn" push dense>
                      <div class="col">
                        <div style="margin-top: -5px">หอพัก/</div>
                        <div style="margin-top: -10px">อพาร์ทเม้นท์</div>
                      </div>
                    </q-btn>
                  </div>
                </div>
                <div class="col-3 dataTitle">
                  <div class="padInputBox">
                    <q-btn class="statBtn" push label="คอนโดฯ" dense />
                  </div>
                </div>
                <div class="col-3 dataTitle padSecRow">
                  <div class="padInputBox">
                    <q-btn class="statBtn" push dense>
                      <div class="col">
                        <div style="margin-top: -5px">ทาวน์</div>
                        <div style="margin-top: -10px">เฮาส์</div>
                      </div>
                    </q-btn>
                  </div>
                </div>
                <div class="col-3 dataTitle padSecRow">
                  <div class="padInputBox">
                    <q-btn class="statBtn" push dense>
                      <div class="col">
                        <div style="margin-top: -5px">อาคาร</div>
                        <div style="margin-top: -10px">พานิชย์</div>
                      </div>
                    </q-btn>
                  </div>
                </div>
                <div class="col-3 dataTitle padSecRow">
                  <div class="padInputBox">
                    <q-btn class="statBtn" push label="โรงแรม" dense />
                  </div>
                </div>
                <div class="col-3 dataTitle padSecRow">
                  <div class="padInputBox">
                    <q-btn class="statBtn" push label="พูลวิล่า" dense />
                  </div>
                </div>
                <div class="col-3 dataTitle padSecRow">
                  <div class="padInputBox">
                    <q-btn class="statBtn" push label="อื่นๆ" dense />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dataTitle dataArea">
            สถานะ
            <div class="col q-pt-sm">
              <div class="row justify-between">
                <div class="col-3 dataTitle">
                  <div class="padInputBox">
                    <q-btn class="statBtn" push label="รอขาย" dense />
                  </div>
                </div>
                <div class="col-3 dataTitle">
                  <div class="padInputBox">
                    <q-btn class="statBtn" push label="รอเช่า" dense />
                  </div>
                </div>
                <div class="col-3 dataTitle">
                  <div class="padInputBox">
                    <q-btn class="statBtn" push dense>
                      <div style="margin-top: -5px">รอเช่า/</div>

                      <div style="margin-top: -10px">รอขาย</div>
                    </q-btn>
                  </div>
                </div>
                <div class="col-3 dataTitle">
                  <div class="padInputBox">
                    <q-btn class="statBtn" push label="ขายแล้ว" dense />
                  </div>
                </div>
                <div class="col-3 dataTitle padSecRow">
                  <div class="padInputBox q-pt-sm">
                    <q-btn class="statBtn" push label="เช่าแล้ว" dense />
                  </div>
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
                    v-model="property"
                    dense
                  />
                </div>
              </div>
              <div class="col-6 dataTitle">
                ตำบล
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="property" dense />
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
                    v-model="property"
                    dense
                  />
                </div>
              </div>
              <div class="col-6 dataTitle" style="padding: 0px">
                จังหวัด
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="property" dense />
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
                    v-model="property"
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
                    v-model="property"
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
                  <q-input class="inputBox" outlined v-model="property" dense />
                </div>
              </div>
              <div class="col-4 dataTitle">
                ห้องนอน
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="property" dense />
                </div>
              </div>
              <div class="col-3 dataTitle">
                ห้องน้ำ
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="property" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                วิวโดยรอบ
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="property" dense />
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
                    v-model="property"
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
                    v-model="property"
                    dense
                    suffix="ม."
                  />
                </div>
              </div>
              <div class="col-3 dataTitle">
                ทิศหน้าบ้าน
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="property" dense />
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
                  <q-input class="inputBox" outlined v-model="property" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                ค่าส่วนกลางตลอดปี
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="property" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                อายุบ้าน/คอนโด
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="property" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                Facility
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="property" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                เหตุผลที่ขาย
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="property" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                ระบบความปลอดภัย
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="property" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                จุดเด่นทำเล
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="property" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                ระบบน้ำ/ไฟ
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="property" dense />
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
                    v-model="property"
                    dense
                    autogrow
                    type="textarea"
                  />
                </div>
              </div>
            </div>
          </div>
          <q-separator class="q-my-lg" color="white" inset />
          <div class="dataTitle dataArea">
            รูปภาพ
            <div class="col q-pt-md">
              <div class="row justify-between">
                <div class="col-4 dataTitle">
                  <div class="padInputBox">
                    <img
                      style="height: 90px; max-width: 100px"
                      src="../images/pik1.jpg"
                    />
                  </div>
                </div>
                <div class="col-4 dataTitle">
                  <div class="padInputBox">
                    <img
                      style="height: 90px; max-width: 100px"
                      src="../images/pik2.jpg"
                    />
                  </div>
                </div>
                <div class="col-4 dataTitle">
                  <div class="padInputBox">
                    <img
                      style="height: 90px; max-width: 100px"
                      src="../images/pik3.jpg"
                    />
                  </div>
                </div>
                <div class="col-4 dataTitle">
                  <div class="padInputBox">
                    <img
                      style="height: 90px; max-width: 100px"
                      src="../images/pik1.jpg"
                    />
                  </div>
                </div>
                <div class="col-4 dataTitle">
                  <div class="padInputBox">
                    <img
                      style="height: 90px; max-width: 100px"
                      src="../images/pik2.jpg"
                    />
                  </div>
                </div>
                <div class="col-4 dataTitle">
                  <div class="padInputBox">
                    <img
                      style="height: 90px; max-width: 100px"
                      src="../images/pik3.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="q-gutter-sm" align="center" style="margin-top: 20px">
              <q-btn
                class="chooseIm"
                style="width: 70%"
                push
                label="เลือกรูปจากครังรูปภาพ"
              />
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
                  v-model="agent"
                  label="ชื่อ"
                  dense
                />
              </div>
              <div class="col-4 dataTitle">
                <q-input
                  class="inputBox"
                  outlined
                  v-model="agent"
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
                  v-model="agent"
                  label="ชื่อ"
                  dense
                />
              </div>
              <div class="col-4 dataTitle">
                <q-input
                  class="inputBox"
                  outlined
                  v-model="agent"
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
                  <q-input class="inputBox" outlined v-model="agent" dense />
                </div>
              </div>
              <div class="col-5 dataTitle">
                เบอรติดต่อที่ 2
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="agent" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                ID Line
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="agent" dense />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ติดต่อเพิ่มเติม
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="agent" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                วันที่เริ่มจำนอง
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="agent" dense />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ธนาคารที่ติดจำนอง
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="agent" dense />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                ยอดติดจำนอง
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ราคาประเมิน
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                ราคาตลาด
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ราคา Last Match
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                ราคาขาย
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ราคาเช่า
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                ราคาต่ำสุดที่ลดได้
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ค่าภาษีธุรกิจเฉพาะ
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                อัตราคอมฯ
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
              <div class="col-5 dataTitle">
                อากร
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col-5 dataTitle">
                เงื่อนไขการโอน
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="agent" dense />
                </div>
              </div>
              <div class="col-5 dataTitle">
                ค่าธรรมเนียมโอน
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="agent" dense />
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
                    v-model="agent"
                    dense
                    autogrow
                    type="textarea"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea">
              <div class="col dataTitle">
                วันที่ได้ทรัพย์มา
                <div class="padInputBox">
                  <q-input class="inputBox" outlined v-model="agent" dense>
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer" color="black">
                        <q-popup-proxy
                          ref="qDateProxy"
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date
                            label-color="primary"
                            v-model="agent"
                          ></q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
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
                    v-model="agent"
                    dense
                    autogrow
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
      upDate: "",
      date: "",
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
        propertyOwnerName: null,
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
.imageBox {
  background-color: white;
  border-radius: 5px;
  height: 80px;
}
.dataHeader {
  font-size: 24px;
  font-weight: bolder;
}
.dataTitle {
  font-size: 14px;
}
.datafont {
  font-size: 14px;
}
.dataArea {
  padding: 5px 10px 10px 10px;
}
.padInputBox {
  padding-left: 10px;
  padding-top: 5px;
}
.chooseIm {
  font-size: 16px;
  font-weight: bolder;
  color: black;
  background-color: #ffff01;
}
.statBtn {
  font-size: 14px;
  color: black;
  background-color: white;
  border-radius: 5px;
  width: 100%;
  height: 35px;
  font-weight: bolder;
  margin-top: -5px;
}
.padSecRow {
  padding-top: 10px;
}
.textCenter {
  text-align: center;
}
</style>

      