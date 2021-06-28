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
            :type="isPwd ? 'password' : 'text'"
            label="Password"
            v-model="password"
            name="password"
          >
            <template v-slot:prepend>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </q-form>
        <div class="q-gutter-sm q-mt-xl" align="center">
          <q-btn
            style="
              background-color: white;
              color: black;
              width: 70%;
              height: 3rem;
            "
            back
            class="LoginButton"
            push
            label="Sign in"
            @click="signIn()"
          />
        </div>
      </div>
    </div>
    <div class="bgbottom"></div>
  </q-layout>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isPwd: false,
      username: null,
      password: null,
    };
  },
  methods: {
    ...mapActions({
      setUserLogin: "user_config/setUserLogin",
    }),
    signIn() {
      this.$firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.checkUser(user);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    },
    async checkUser(user) {
      const { uid, email, password } = user;
      const db = this.$firebase.firestore();
      await db
        .collection("user")
        .where("uid", "==", "1kQuvIaJ1tNg2cT4ly0YOH5WIRZ2")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const { status } = doc.data();
            this.setUserLogin({ uid, email, password, status });
            this.$router.push({ name: "map" });
          });
        });
    },
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
