<template>
  <div class="content">
    <div class="countries">
      <span @click="selCity">
        {{cityName}}&nbsp;
        <span style="font-size:12px">▼</span>
      </span>
    </div>
    <div class="search">
      <input type="text" v-model.lazy="inputStr" :placeholder="holdText" @change="handleChange" @focus="handleFocus">
      <img src="../../../src/img/research.png" @click="handleSearch">
    </div>
    <div class="itemMenu">
      <img src="../../../src/img/stealth.png">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      cityName: {
        type: String,
        default:"北京"
      },
    },
    data() {
      return {
        holdText: "请输入",
        inputStr: null
      }
    },
    methods: {
      selCity() {
        this.$emit("openCitys")
      },
      handleFocus() {
        this.holdText = ""
      },
      handleChange(e) {
        let v = e.target.value.trim()
        if (v === "") {
          this.holdText = '请输入'
        }
      },
      handleSearch() {
        this.$emit("schName", this.schoolName);
        this.schoolName = "";
        this.holdText = '请输入'
      }
    },
  }

</script>

<style scoped lang="less">
  .content {
    position: fixed;
    top: 0px;
    height: 40px;
    width: 100%;
    background-color: #6b879f;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    z-index: 999;
    .countries {
      width: 10%;
      text-align: center;
      margin-left: 7px;
    }
    .search {
      height: 20px;
      display: flex;
      align-items: center;
      line-height: 1;
      flex: 1;
      input {
        width: 90%;
        border-radius: 20px 0px 0px 20px;
        background: #657783;
        padding-left: 20px;
        border: none;
        height: 30px;
      }
      input::-webkit-input-placeholder,
      textarea::-webkit-input-placeholder {
        color: #fff;
      }
      input::-moz-placeholder,
      textarea::-moz-placeholder {
        color: #fff;
        float: left;
      }
      img {
        width: 30px;
        height: 30px;
        background: #657783;
        border-radius: 0px 20px 20px 0px;
      }
    }
  }

  .itemMenu {
    margin: 30px;
    img {
      width: 30px;
      height: 30px;
    }
  }

</style>
