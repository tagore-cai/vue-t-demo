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
    top: 0;
    height: 2.5rem;
    width: 100%;
    background-color: #6b879f;
    padding: .3125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
    z-index: 999;
    .countries {
      text-align: center;
      margin: 0 .625rem 0 .4375rem;
    }
    .search {
      height: 1.25rem;
      display: flex;
      align-items: center;
      line-height: 1;
      flex: 1;
      input {
        width: 95%;
        border-radius: 1.25rem 0 0 1.25rem;
        background: #657783;
        padding-left: 1.25rem;
        border: none;
        height: 1.875rem;
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
        width: 1.875rem;
        height: 1.875rem;
        background: #657783;
        border-radius: 0 1.25rem 1.25rem 0;
      }
    }
  }

  .itemMenu {
    margin: 1.875rem;
    img {
      width: 1.875rem;
      height: 1.875rem;
    }
  }

</style>
