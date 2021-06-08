<template>
  <q-layout view="lHh Lpr lFf" class="bg-brand">
    <q-header elevated class="bgColor">
      <q-toolbar>
        <q-toolbar-title class="absolute-center headFontColor"
          >GEMS</q-toolbar-title
        >
        <q-btn
          class="absolute-right headFontColor"
          flat
          dense
          label="log out"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md">
        <p v-for="n in 15" :key="n">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
          praesentium molestias a adipisci, dolore vitae odit, quidem
          consequatur optio voluptates asperiores pariatur eos numquam rerum
          delectus commodi perferendis voluptate?
        </p>
      </q-page>
    </q-page-container>
    <div class="fixed-bottom-right text-right q-mb-lg">
      <div class="q-mb-md">
        <q-btn
          class="mapMenu"
          rounded
          label="สถานะ"
          icon-right="fa fa-filter"
        />
      </div>
      <div class="q-mb-md">
        <q-btn
          class="mapMenu"
          rounded
          label="เพิ่มหมุด"
          icon-right="fa fa-plus"
        />
      </div>
      <div>
        <q-btn
          class="mapMenu"
          rounded
          label="ตำแหน่งของคุณ"
          icon-right="ti-target"
        />
      </div>
    </div>
  </q-layout>
</template>
<script>
</script>
<style>
.mapMenu {
  font-size: 16px;
  background-color: white;
  color: black;
}
.headFontColor {
  color: #ffdd02;
}
.bgColor {
  background-color: #010135;
}
</style>
