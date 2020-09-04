<template>
  <div class="hello">
    <div class="box"></div>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  name: "HelloWorld",
  components: {
    [Button.name]: Button
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  width: 375px;
  height: 100px;
  background: #42b983;
}
</style>
