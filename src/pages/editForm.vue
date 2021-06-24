<template>
  <q-layout view="lHh Lpr lFf" class="bg-brand">
    <q-header elevated>
      <q-toolbar style="height: 50px" class="bg-button">
        <q-btn
          class="absolute-center font-button full-width"
          flat
          label="ยืนยัน"
          @click="onSave()"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page style="color: white; padding: 15px">
        <div class="dataHeader">
          <div class="row justify-between items-center">
            <div class="col-12">
              <q-btn
                size="20px"
                icon="arrow_back_ios"
                style="color: #ffffff"
                class="overflow-hidden"
                @click="$router.go(-1)"
              >
                <div class="text-white text-weight-bold text-h5">
                  ข้อมูลทรัพย์
                </div>
              </q-btn>
            </div>
          </div>
          <div class="dataTitle dataArea">
            ประเภท
            <div class="row justify-start padInputBox q-gutter-sm">
              <input
                type="radio"
                name="selectType"
                id="option-type1"
                value="บ้านเดี่ยว"
                v-model="property.type"
              />
              <label for="option-type1" class="option option-type1">
                <span>บ้านเดี่ยว</span>
              </label>
              <input
                type="radio"
                name="selectType"
                id="option-type2"
                value="บ้านแฝด"
                v-model="property.type"
              />
              <label for="option-type2" class="option option-type2">
                <span>บ้านแฝด</span>
              </label>
              <input
                type="radio"
                name="selectType"
                id="option-type3"
                value="หอพัก/อพาร์ทเม้นท์"
                v-model="property.type"
              />
              <label for="option-type3" class="option option-type3">
                <span class="text-center">
                  <div class="column">
                    <div class="">หอพัก</div>
                    <div class="">อพาร์ทเม้นท์</div>
                  </div>
                </span>
              </label>
              <input
                disabled
                type="radio"
                name="selectType"
                id="option-type4"
                value="คอนโด"
                v-model="property.type"
              />
              <label for="option-type4" class="option option-type4">
                <span>คอนโดฯ</span>
              </label>
              <input
                type="radio"
                name="selectType"
                id="option-type5"
                value="ทาวน์เฮาส์"
                v-model="property.type"
              />
              <label for="option-type5" class="option option-type5">
                <span>ทาวน์เฮาส์</span>
              </label>

              <input
                type="radio"
                name="selectType"
                id="option-type6"
                value="อาคารพานิชย์"
                v-model="property.type"
              />
              <label for="option-type6" class="option option-type6">
                <span>อาคารพานิชย์</span>
              </label>
              <input
                type="radio"
                name="selectType"
                id="option-type7"
                value="โรงแรม"
                v-model="property.type"
              />
              <label for="option-type7" class="option option-type7">
                <span>โรงแรม</span>
              </label>
              <input
                type="radio"
                name="selectType"
                id="option-type8"
                value="พูลวิลล่า"
                v-model="property.type"
              />
              <label for="option-type8" class="option option-type8">
                <span>พูลวิลล่า</span>
              </label>
              <input
                type="radio"
                name="selectType"
                id="option-type9"
                value="อื่นๆ"
                v-model="property.type"
              />
              <label for="option-type9" class="option option-type9">
                <span>อื่นๆ</span>
              </label>
            </div>
          </div>
          <div class="dataTitle dataArea">
            สถานะ
            <div class="row padInputBox justify-start q-gutter-sm">
              <input
                type="radio"
                name="selectStatus"
                id="option-status1"
                value="รอขาย"
                v-model="property.status"
              />
              <label for="option-status1" class="option option-status1">
                <span>รอขาย</span>
              </label>
              <input
                type="radio"
                name="selectStatus"
                id="option-status2"
                value="รอเช่า"
                v-model="property.status"
              />
              <label for="option-status2" class="option option-status2">
                <span>รอเช่า</span>
              </label>
              <input
                type="radio"
                name="selectStatus"
                id="option-status3"
                value="รอเช่า/รอขาย"
                v-model="property.status"
              />
              <label for="option-status3" class="option option-status3">
                <span>รอเช่า/รอขาย</span>
              </label>
              <input
                type="radio"
                name="selectStatus"
                id="option-status4"
                value="ขายแล้ว"
                v-model="property.status"
              />
              <label for="option-status4" class="option option-status4">
                <span>ขายแล้ว</span>
              </label>
              <input
                type="radio"
                name="selectStatus"
                id="option-status5"
                value="เช่าแล้ว"
                v-model="property.status"
              />
              <label for="option-status5" class="option option-status5">
                <span>เช่าแล้ว</span>
              </label>
            </div>
          </div>
          <div class="col dataArea">
            <div class="dataTitle">ชื่อหมู่บ้าน</div>
            <div class="padInputBox">
              <q-input
                class="inputBox"
                outlined
                v-model="property.name"
                dense
              />
            </div>
          </div>
          <div class="col">
            <div class="row q-col-gutter-sm dataArea">
              <div class="col-5 dataTitle">
                บ้านเลขที่
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.houseNumber"
                    dense
                  />
                </div>
              </div>
              <div class="col-4 dataTitle">
                อาคาร/ตึก
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.building"
                    dense
                  />
                </div>
              </div>
              <div class="col-3 dataTitle">
                หมู่ที่
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.swine"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row q-col-gutter-sm dataArea">
              <div class="col-6 dataTitle">
                ซอย/ถนน
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.alley"
                    dense
                  />
                </div>
              </div>
              <div class="col-6 dataTitle">
                ตำบล
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.subDistict"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row q-col-gutter-sm dataArea">
              <div class="col-6 dataTitle">
                อำเภอ
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.distict"
                    dense
                  />
                </div>
              </div>
              <div class="col-6 dataTitle">
                จังหวัด
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.province"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row q-col-gutter-sm dataArea">
              <div class="col-6 dataTitle">
                เนื้อที่บ้าน
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.houseSize"
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
                    v-model="property.areaSize"
                    dense
                    suffix="ตร.วา"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row q-col-gutter-sm dataArea">
              <div class="col-4 dataTitle">
                จำนวนชั้น
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.floor"
                    dense
                  />
                </div>
              </div>
              <div class="col-4 dataTitle">
                ห้องนอน
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.bedRoom"
                    dense
                  />
                </div>
              </div>
              <div class="col-4 dataTitle">
                ห้องน้ำ
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.toilet"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row dataArea">
              <div class="col dataTitle">
                วิวโดยรอบ
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.surroundView"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row q-col-gutter-sm dataArea">
              <div class="col-3 dataTitle">
                OCC Rate
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.occRate"
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
                    v-model="property.widthFrontHouse"
                    dense
                    suffix="ม."
                  />
                </div>
              </div>
              <div class="col-4 dataTitle">
                ทิศหน้าบ้าน
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.directionHouse"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                เฟอร์นิเจอร์ที่ได้
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.furniture"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                เครื่องใช้ไฟฟ้าที่ได้
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.electronic"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                ค่าส่วนกลางตลอดปี
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.commonFee"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                อายุบ้าน/คอนโด
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.houserAge"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                Facility
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.facility"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                เหตุผลที่ขาย
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.reasonSale"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                ระบบความปลอดภัย
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.securitySystem"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                จุดเด่นทำเล
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.areaHighlight"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                ระบบน้ำ/ไฟ
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="property.waterFireSystem"
                    dense
                  />
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
                    v-model="property.otherProperty"
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
              <div class="row">
                <q-uploader
                  url="http://localhost:4444/upload"
                  text-color="black"
                  label="เพิ่มรูปภาพ"
                  multiple
                  batch
                  style="max-width: 100%; min-width: 100%"
                />
              </div>
            </div>
          </div>
        </div>
        <q-separator class="q-my-lg" color="white" inset />
        <div class="dataHeader">
          ข้อมูลสำหรับ Agent
          <div class="col">
            <div class="row justify-between dataArea q-col-gutter-sm">
              <div class="col-4 dataTitle">
                Agent
                <div>เจ้าของทรัพย์</div>
              </div>
              <div class="col-4 dataTitle">
                <q-input
                  class="inputBox"
                  outlined
                  v-model="agent.agentName"
                  label="ชื่อ"
                  dense
                />
              </div>
              <div class="col-4 dataTitle">
                <q-input
                  class="inputBox"
                  outlined
                  v-model="agent.agentLastName"
                  label="สกุล"
                  dense
                />
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="row justify-between dataArea items-center q-col-gutter-sm"
            >
              <div class="col-4 dataTitle">เจ้าของทรัพย์</div>
              <div class="col-4 dataTitle">
                <q-input
                  class="inputBox"
                  outlined
                  v-model="agent.propertyOwnerName"
                  label="ชื่อ"
                  dense
                />
              </div>
              <div class="col-4 dataTitle">
                <q-input
                  class="inputBox"
                  outlined
                  v-model="agent.propertyOwnerLastName"
                  label="สกุล"
                  dense
                />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea q-col-gutter-sm">
              <div class="col dataTitle">
                เบอรติดต่อที่ 1
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.phoneNumber1"
                    dense
                  />
                </div>
              </div>
              <div class="col dataTitle">
                เบอรติดต่อที่ 2
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.phoneNumber2"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea q-col-gutter-sm">
              <div class="col dataTitle">
                ID Line
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.idLine"
                    dense
                  />
                </div>
              </div>
              <div class="col dataTitle">
                ติดต่อเพิ่มเติม
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.otherContact"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea q-col-gutter-sm">
              <div class="col dataTitle">
                วันที่เริ่มจำนอง
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.mortgageDate"
                    dense
                  />
                </div>
              </div>
              <div class="col dataTitle">
                ธนาคารที่ติดจำนอง
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.mortgageBank"
                    dense
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea q-col-gutter-sm">
              <div class="col dataTitle">
                ยอดติดจำนอง
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.mortgagePrice"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
              <div class="col dataTitle">
                ราคาประเมิน
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.appraisalPrice"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea q-col-gutter-sm">
              <div class="col dataTitle">
                ราคาตลาด
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.marketPrice"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
              <div class="col dataTitle">
                ราคา Last Match
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.lastMatch"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea q-col-gutter-sm">
              <div class="col dataTitle">
                ราคาขาย
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.sellPrice"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
              <div class="col dataTitle">
                ราคาเช่า
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.rentalPrice"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea q-col-gutter-sm">
              <div class="col dataTitle">
                ราคาต่ำสุดที่ลดได้
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.minDicount"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
              <div class="col dataTitle">
                ค่าภาษีธุรกิจเฉพาะ
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.specificTax"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea q-col-gutter-sm">
              <div class="col dataTitle">
                อัตราคอมฯ
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.commissionRate"
                    dense
                    suffix="%"
                  />
                </div>
              </div>
              <div class="col dataTitle">
                อากร
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.taxation"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-around dataArea q-col-gutter-sm">
              <div class="col dataTitle">
                ค่าธรรมเนียมโอน
                <div class="padInputBox">
                  <q-input
                    class="inputBox"
                    outlined
                    v-model="agent.transferFee"
                    dense
                    suffix="฿"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between dataArea">
              <div class="col dataTitle">
                เงื่อนไขการโอน
                <div class="padInputBox">
                  <q-input
                    style="padding-left: 12px; padding-right: 6px"
                    class="inputBox"
                    v-model="agent.transterCondition"
                    dense
                  >
                    <q-select
                      transition-show="scale"
                      transition-hide="scale"
                      class="inputBox"
                      hide-selected
                      dense
                      v-model="agent.transterCondition"
                      :options="options"
                    />
                  </q-input>
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
                    v-model="agent.otherAgent"
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
                  <q-input
                    class="inputBox"
                    v-model="agent.acquisitionDate"
                    outlined
                    dense
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer" color="black">
                        <q-popup-proxy
                          ref="qDateProxy"
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date
                            label-color="primary"
                            v-model="agent.acquisitionDate"
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
                    v-model="agent.additionalNote"
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
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import { mapFields } from "../components/helper";
export default {
  computed: {
    ...mapGetters({
      getDataProperty: "document/getDataProperty",
      getUserLogin: "user_config/getUserLogin",
      getDatabaseUrl: "databaseUrl/getDatabaseUrl",
      getDocumentId: "document/getDocumentId",
    }),
    ...mapFields({
      fields: ["name"],
      base: "document.property",
      mutation: "SET_DATA_PROPERTY",
    }),
  },
  data() {
    return {
      text: "",
      model: "one",
      shape: "line",
      upDate: "",
      date: "",
      options: [
        "ค่าธรรมเนียมโอนคนละครึ่ง อากร ภาษี เจ้าของจ่าย",
        "ค่าใช้จ่ายทั้งหมด ณ วันโอนคนละครึ่ง",
      ],
      model: null,
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
  async mounted() {
    this.property = JSON.parse(JSON.stringify(this.getDataProperty.property));
    this.agent = JSON.parse(JSON.stringify(this.getDataProperty.agent));
  },
  methods: {
    ...mapActions({
      setDataProperty: "document/setDataProperty",
    }),
    async onSave() {
      this.$q.loading.show();

      const property = this.property;
      const agent = this.agent;

      const mapdata = {
        id: this.getDocumentId,
        uid: this.getUserLogin.uid,
        property,
        agent,
      };

      await axios.put(`${this.getDatabaseUrl}/update`, mapdata);

      this.setDataProperty({ property, agent });

      this.$q.loading.hide();
      this.$router.go(-1);
    },
  },
  watch: {
    agent: {
      handler(val) {
        const {
          taxation,
          mortgagePrice,
          appraisalPrice,
          marketPrice,
          lastMatch,
          sellPrice,
          rentalPrice,
          minDicount,
          specificTax,
          transferFee,
        } = val;
        if (taxation) {
          this.agent.taxation = taxation
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (mortgagePrice) {
          this.agent.mortgagePrice = mortgagePrice
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (appraisalPrice) {
          this.agent.appraisalPrice = appraisalPrice
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (marketPrice) {
          this.agent.marketPrice = marketPrice
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (lastMatch) {
          this.agent.lastMatch = lastMatch
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (sellPrice) {
          this.agent.sellPrice = sellPrice
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (rentalPrice) {
          this.agent.rentalPrice = rentalPrice
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (minDicount) {
          this.agent.minDicount = minDicount
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (specificTax) {
          this.agent.specificTax = specificTax
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (transferFee) {
          this.agent.transferFee = transferFee
            .replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      },
      deep: true,
    },
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
.q-field__native,
.q-field__prefix,
.q-field__suffix,
.q-field__input {
  font-weight: bold;
}
.inputBox {
  font-size: 18px;
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

.option {
  background: #fff;
  display: flex;
  height: 35px;
  width: 30%;
  min-width: 80px;
  max-width: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.6s ease;
}

input[type="radio"] {
  display: none;
}
#option-type1:checked:checked ~ .option-type1,
#option-type2:checked:checked ~ .option-type2,
#option-type3:checked:checked ~ .option-type3,
#option-type4:checked:checked ~ .option-type4,
#option-type5:checked:checked ~ .option-type5,
#option-type6:checked:checked ~ .option-type6,
#option-type7:checked:checked ~ .option-type7,
#option-type8:checked:checked ~ .option-type8,
#option-type9:checked:checked ~ .option-type9,
#option-status1:checked:checked ~ .option-status1,
#option-status2:checked:checked ~ .option-status2,
#option-status3:checked:checked ~ .option-status3,
#option-status4:checked:checked ~ .option-status4,
#option-status5:checked:checked ~ .option-status5 {
  background: #ffff01;
  color: #000;
}
.option span {
  font-size: 14px;
  color: #000;
}
#option-type1:checked:checked ~ .option-type1 span,
#option-type2:checked:checked ~ .option-type2 span,
#option-type3:checked:checked ~ .option-type3 span,
#option-type4:checked:checked ~ .option-type4 span,
#option-type5:checked:checked ~ .option-type5 span,
#option-type6:checked:checked ~ .option-type6 span,
#option-type7:checked:checked ~ .option-type7 span,
#option-type8:checked:checked ~ .option-type8 span,
#option-type9:checked:checked ~ .option-type9 span,
#option-status1:checked:checked ~ .option-status1 span,
#option-status2:checked:checked ~ .option-status2 span,
#option-status3:checked:checked ~ .option-status3 span,
#option-status4:checked:checked ~ .option-status4 span,
#option-status5:checked:checked ~ .option-status5 span {
  color: #000;
}
.q-uploader__header {
  position: relative;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  background-color: #ffdd02;
  color: rgb(0, 0, 0);
  width: 100%;
}
</style>

      