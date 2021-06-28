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
          <q-separator class="q-my-lg" color="white" inset />
          <div class="dataTitle dataArea">
            <div class="row">
              <div
                class="col-4 q-px-xs q-my-xs"
                v-for="(data, index) in modelImage"
                :key="index"
              >
                <q-img :src="data.url" no-native-menu>
                  <q-btn
                    class="absolute"
                    round
                    size="6px"
                    color="red"
                    icon="close"
                    style="top: 2px; right: 2px"
                    @click="dialogDelete(index)"
                  />
                </q-img>
                <q-dialog v-model="deleteImg" persistent>
                  <q-card>
                    <q-card-section class="row items-center">
                      <q-avatar icon="delete" color="red" text-color="white" />
                      <span class="q-ml-sm text-weight-bold text-h5">
                        ยืนยันการลบรูปภาพ
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
                        @click="deleteImage()"
                      />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
              </div>
            </div>
          </div>
          <div class="dataTitle dataArea">
            รูปภาพ
            <div class="col q-pt-md">
              <div class="row">
                <q-uploader
                  text-color="black"
                  label="เพิ่มรูปภาพ"
                  multiple
                  style="max-width: 100%; min-width: 100%"
                  @added="addFile"
                  @removed="removedFile"
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
  },
  data() {
    return {
      text: "",
      model: "one",
      shape: "line",
      deleteImg: null,
      upDate: "",
      date: "",
      modelImage: [],
      file_selected: [],
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
    };
  },
  async mounted() {
    await this.getImage();
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

      var storageRef = this.$firebase.storage().ref(`property`);

      await axios
        .put(`${this.getDatabaseUrl}/update`, mapdata)
        .then(async (response) => {
          const id = response.data.id;
          await Promise.all([
            ...this.file_selected.map((data) =>
              storageRef.child(`${id}/${data.name}`).put(data)
            ),
          ]);

          this.setDataProperty({ property, agent });

          this.$q.loading.hide();
          this.$router.go(-1);
        });
    },
    async getImage() {
      const storageRef = this.$firebase
        .storage()
        .ref(`property/${this.getDocumentId}`);

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
    dialogDelete(index) {
      this.deleteImg = true;
      this.deleteIndex = index;
    },
    async deleteImage() {
      const { name } = this.modelImage[this.deleteIndex];

      const storageRef = this.$firebase
        .storage()
        .ref(`property/${this.getDocumentId}`);

      storageRef
        .child(name)
        .delete()
        .then(() => {
          this.modelImage = this.modelImage.filter((item) => item.name != name);
        });

      this.deleteImg = false;
    },
    addFile(file) {
      file.map((data) => {
        this.file_selected.push(data);
      });
      console.log(this.file_selected);
    },
    removedFile(file) {
      this.file_selected = this.file_selected.filter(
        (data) => data.name != file[0].name
      );
      console.log(this.file_selected);
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

      