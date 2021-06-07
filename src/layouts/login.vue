<template>
  <q-layout view="lHh Lpr lFf" class="bg-brand">
    <div class="row">
      <div class="container">
        <div align="center">
          <img src="../images/gemsLogo.png" class="" style="width: 80%" />
        </div>

        <div class="q-pa-md" align="center">
          <q-form class="q-gutter-md">
            <q-input
              class="userAndPass"
              label="Username"
              placeholder="Username@gmail.com"
            />
            <q-input
              class="userAndPass"
              label="Password"
              placeholder="๐๐๐๐๐๐๐๐๐๐๐"
            />
          </q-form>
          <div class="q-mt-sm q-gutter-sm" align="center">
            <q-btn
              class="LoginButton"
              style="width: 50%"
              push
              label="Sign in"
            />
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
</script>

<style>
.bg-brand {
  background: #ffdd02;
}
.LoginButton {
  font-size: 22px;
  font-weight: bolder;
  color: black;
  background-color: white;
}
.userAndPass {
  font-size: 18px;
}
</style>
