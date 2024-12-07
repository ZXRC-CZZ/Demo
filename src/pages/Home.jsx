import React, { useEffect } from "react";
import { Line } from "@antv/g2plot";
import * as echarts from "echarts";

const Home = () => {
  useEffect(() => {
    // 定义数据
    const data = [
      { year: "1991", value: 0.4 },
      { year: "1992", value: 0.34 },
      { year: "1993", value: 0.6 },
      { year: "1994", value: 0.8 },
      { year: "1995", value: 0.56 },
      { year: "1996", value: 0.789 },
      { year: "1997", value: 1 },
      { year: "1998", value: 0.22 },
      { year: "1999", value: 0.44 },
    ];

    // 创建折线图
    const line = new Line("container", {
      data,
      xField: "year",
      yField: "value",
      label: {},

      point: {
        size: 5,
        shape: "diamond",
        style: {
          fill: "white",
          stroke: "#5B8FF9",
          lineWidth: 2,
        },
      },
      tooltip: {
        showMarkers: false,
        formatter: (value) => {
          console.log(value, "999");
          return value;
        },
      },
      state: {
        active: {
          style: {
            shadowBlur: 4,
            stroke: "#000",
            fill: "red",
          },
        },
      },
      yAxis: {
        label: {
          formatter: (value) => {
            return `${(value * 100).toFixed(0)}%`; // 转换数值到百分比格式
          },
        },
      },
      interactions: [{ type: "marker-active" }],
    });

    // 渲染图表
    line.render();

    // 清理（可选，防止内存泄漏）
    return () => {
      line.destroy();
    };
  }, []);

  useEffect(() => {
    var myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    myChart.setOption({
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 50, 10, 20],
        },
      ],
    });
  }, []);

  return (
    <>
      <div id="main" style={{ width: "100%", height: "300px" }} />
      <div id="container" style={{ width: "100%", height: "300px" }} />{" "}
    </>
  );
};

export default Home;