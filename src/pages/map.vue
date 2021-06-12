<template>
  <q-layout view="lHh Lpr lFf" class="bg-brand">
    <q-header elevated class="bgColor">
      <q-toolbar style="height: 65px">
        <q-toolbar-title class="absolute-center headFontColor"
          >GEMS</q-toolbar-title
        >
        <q-btn
          class="absolute-right"
          style="color: #ffdd02"
          flat
          dense
          label="log out"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="row justify-around q-mt-xl">
        <div class="toForm">
       <q-btn color="white" text-color="black" label="form" @click="$router.push({name : 'form'})" />
    </div>
    <div class="toOV">
      <q-btn color="white" text-color="black" label="overview" @click="$router.push({name : 'overview'})" />
    </div>
    <div class="toOV4C">
      <q-btn color="white" text-color="black" label="toOV4C" @click="$router.push({name : 'overviewCondo'})" />
    </div>
      </div>
    </q-page-container>
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
  font-size: 35px;
  font-weight: bold;
}
.bgColor {
  background-color: #010135;
}
</style>
