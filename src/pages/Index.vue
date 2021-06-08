<template>
  <q-layout view="lHh Lpr lFf">
    <div class="body">
      <div class="q-pa-md">
        <div class="row items-center">
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
        <div class="row" style="margin: 1rem 0">
          <div class="col">
            <div class="title">อิราวดี</div>
          </div>
        </div>
        <div class="row" style="margin-left: 2rem">
          <div class="col-8">
            <div class="row">
              <div class="tagsStyle row items-center q-px-sm">บ้านเดี่ยว</div>
              <div class="q-mx-xs"></div>
              <div class="tagsStyle row items-center q-px-sm">รอขาย</div>
            </div>
          </div>
          <div class="col items-center">
            <div class="row justify-end">
              <div class="downloadIamges row items-centers justify-center" style="font-size: 28px">
                <span class="material-icons">file_download</span>
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
  font-size: 0.75rem;
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
  font-size: 1.2rem;
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
</style>