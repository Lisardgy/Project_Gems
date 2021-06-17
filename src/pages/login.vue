<template>
  <q-layout view="lHh Lpr lFf">
    <div class="cities q-pt-xl">
      <div align="center" class="q-pt-xl">
        <img src="../images/gemsLogo.png" style="width: 60%" />
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
        <div class="q-gutter-sm q-mt-xl" align="center">
          <q-btn
            style="background-color: white;color:black; width: 70%;height:3rem"
            back
            class="LoginButton"
            push
            label="Sign in"
            @click="$router.push({name : 'map'})"
          />
        </div>
      </div>
    </div>
    <div class="bgbottom"></div>
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

<style scoped>
.q-layout {
  background: url("../images/cities.png"), #ffdd02;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 30%, contain;
}


</style>
