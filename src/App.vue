<template>
  <v-app>
    <Menu></Menu>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Menu from "@/components/Menu";

export default {
  name: "App",
  components: {
    Menu
  },
  data() {
    return {};
  }
};
</script>
<style>
.application--wrap {
  /*background-image: url("assets/bg.jpg"); */
  background: url("assets/bg.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: Avro;
}
</style>

