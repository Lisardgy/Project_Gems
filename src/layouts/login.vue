<template>
  <q-layout view="lHh Lpr lFf" class="bg-brand">
    <div class="absolute-bottom">
      <img src="../images/city.png" style="width: 100%" />
    </div>
    <div class="row">
      <div class="container">
        <div align="center" style="margin-top: 80px">
          <img src="../images/gemsLogo.png" class="" style="width: 80%" />
        </div>

        <div class="q-pa-md q-mt-sm" align="center">
          <q-form class="text-center" style="width: 80%">
            <q-input
              square
              clearable
              class="userAndPass"
              type="Username"
              label="Username"
              v-model="username"
              name="username"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
            <q-input
              square
              clearable
              class="userAndPass q-mt-md"
              type="password"
              label="Password"
              v-model="password"
              name="password"
            >
              <template v-slot:prepend>
                <q-icon name="visibility" />
              </template>
            </q-input>
          </q-form>
          <div class="q-gutter-sm" align="center" style="margin-top: 40px">
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
export default {
  data() {
    return {
      username: "",
      password: null,
    };
  },
};
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
  font-size: 22px;
}
</style>
