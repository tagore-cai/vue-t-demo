<template>
  <div class='echats-wapper'>
    <div class='echats-title'>评分系统</div>
    <div class='echats-rader' ref='radar' style="height: 300px;width:300px;"></div>
  </div>
</template>

<script>
let echarts = require("echarts");
export default {
  data() {
    return {
      option: {
        radar: [
          {
            indicator: [
              { text: "基带", max: 100 },
              { text: "信号", max: 100 },
              { text: "虚拟", max: 100 },
              { text: "时频", max: 100 },
              { text: "高频", max: 100 },
              { text: "伺服", max: 100 }
            ],
            center: ["50%", "50%"],
            radius: 80,
            startAngle: 90,
            splitNumber: 5,
            shape: "circle",
            name: {
              formatter: "【{value}】",
              textStyle: {
                color: "#72ACD1"
              }
            },
            splitArea: {
              areaStyle: {
                color: [
                  "rgba(114, 172, 0, 0.2)",
                  "rgba(114, 172, 44, 0.4)",
                  "rgba(11, 50, 209, 0.6)",
                  "rgba(0, 55, 160, 0.6)",
                  "rgba(0, 172, 0, 0.6)",
                  "rgba(114, 172, 209, 1)"
                ],
                shadowColor: "rgba(0, 0, 0, 0.3)",
                shadowBlur: 10
              }
            }
          }
        ],
        series: [
          {
            type: "radar",
            symbol: "none",
            data: [
              {
                value: [90, 80, 80, 80, 80, 80],
                lineStyle: {
                  color: "#fffffff",
                  width: 2
                },
                areaStyle: {
                  normal: {
                    color: "rgb(255, 255, 255)"
                  }
                }
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    this.initRadar(this.$refs.radar);
  },
  methods: {
    initRadar(dom) {
      dom.height = "1000px";
      var myChart = echarts.init(dom);
      myChart.setOption(this.option, true);
    }
  }
};
</script>

<style scoped lang='less'>
.echats-wapper {
  width: 25rem;
  height: 25rem;
  float: left;
  border-radius: 10px 10px 0 0;
  background-color: #6708f0;
  .echats-title {
    padding: 10px 0 10px 20px;
    border: 2px green solid;
    background-color: blue;
    border-radius: 10px 10px 0 0;
    text-align: left;
  }
  .echats-rader {
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18.75rem;
    height: 18.75rem;
  }
}
</style>
