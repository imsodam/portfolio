<template>
  <div class="chart-container">
    <div class="chart"></div>
    <div class="chart"></div>
    <div class="chart"></div>
    <div class="chart"></div>
    <div class="chart"></div>
  </div>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
  mounted() {
    const options1 = {
      chart: {
        height: 280,
        type: "radialBar",
      },

      series: [80],

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "50%",
          },

          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "30px",
            },
            value: {
              color: "#ffffff",
              fontSize: "15px",
              show: true,
            },
          },
        },
      },

      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#90CAF9"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
        colors: "#42A5F5",
      },

      stroke: {
        lineCap: "round",
      },
      labels: ["HTML"],
    };

    const options2 = {
      chart: {
        height: 280,
        type: "radialBar",
      },

      series: [80],

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "50%",
          },

          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "30px",
            },
            value: {
              color: "#ffffff",
              fontSize: "15px",
              show: true,
            },
          },
        },
      },

      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#90CAF9"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
        colors: "#42A5F5",
      },

      stroke: {
        lineCap: "round",
      },
      labels: ["CSS"],
    };

    const options3 = {
      chart: {
        height: 280,
        type: "radialBar",
      },

      series: [70],

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "50%",
          },

          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "20px",
            },
            value: {
              color: "#ffffff",
              fontSize: "15px",
              show: true,
            },
          },
        },
      },

      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#90CAF9"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
        colors: "#42A5F5",
      },

      stroke: {
        lineCap: "round",
      },
      labels: ["Javascript"],
    };

    const options4 = {
      chart: {
        height: 280,
        type: "radialBar",
      },

      series: [60],

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "50%",
          },

          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "30px",
            },
            value: {
              color: "#ffffff",
              fontSize: "15px",
              show: true,
            },
          },
        },
      },

      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#90CAF9"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
        colors: "#42A5F5",
      },

      stroke: {
        lineCap: "round",
      },
      labels: ["Vue"],
    };

    const options5 = {
      chart: {
        height: 280,
        type: "radialBar",
      },

      series: [60],

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "50%",
          },

          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "30px",
            },
            value: {
              color: "#ffffff",
              fontSize: "15px",
              show: true,
            },
          },
        },
      },

      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#90CAF9"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
        colors: "#42A5F5",
      },

      stroke: {
        lineCap: "round",
      },
      labels: ["React"],
    };

    const chart1 = new ApexCharts(this.$el.querySelector(".chart:nth-child(1)"), options1);
    chart1.render();

    const chart2 = new ApexCharts(this.$el.querySelector(".chart:nth-child(2)"), options2);
    chart2.render();

    const chart3 = new ApexCharts(this.$el.querySelector(".chart:nth-child(3)"), options3);
    chart3.render();

    const chart4 = new ApexCharts(this.$el.querySelector(".chart:nth-child(4)"), options4);
    chart4.render();

    const chart5 = new ApexCharts(this.$el.querySelector(".chart:last-child"), options5);
    chart5.render();
  },
};
</script>

<style scoped>
.chart-container {
  display: flex;
}

@media (max-width: 500px) {
  .chart-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .chart {
    width: 40%;
  }
}
</style>
