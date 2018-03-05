<template>
  <div class="echats-wapper">
    <div class="echats-title">预测系统</div>
    <div class="echats-line" ref="container"></div>
  </div>
</template>

<script>
let echarts = require("echarts");
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["实际", "预测"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["100", "200", "300", "400", "500"],
          axisLine: { symbol: ["none", "arrow"] }
        },
        yAxis: {
          type: "value",
          axisLine: { symbol: ["none", "arrow"] }
        },
        series: [
          {
            name: "实际",
            type: "line",
            symbol: "none",
            stack: "总量",
            linkSymbol: "arrow",
            data: [120, 132, 101, 134, 90, 230, 210],
            lineStyle: {
              normal: {
                color: "green",
                width: 2,
                type: "dashed"
              }
            },
            // areaStyle: {
            //   normal: {
            //     color: "00ff00"
            //   }
            // }
          },
          {
            name: "预测",
            type: "line",
            symbol: "none",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      }
    };
  },
  mounted() {
    this.initLine(this.$refs.container);
  },
  methods: {
    initLine(dom) {
      let myChart = echarts.init(dom);
      myChart.setOption(this.option, true);
    }
  }
};
</script>

<style scoped lang='less'>
.echats-wapper {
  width: 400px;
  height: 400px;
  float: left;
  border-left: 2px pink solid;
  background-color: #6708f0;
  .echats-title {
    padding: 10px 0 10px 20px;
    border: 2px green solid;
    background-color: blue;
    border-radius: 10px 10px 0 0;
    text-align: left;
  }
  .echats-line {
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18.75rem;
    height: 18.75rem;
  }
}
</style>
