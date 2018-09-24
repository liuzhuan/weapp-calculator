import simpleInput from "../../utils/input.js";
import refDatas from "./ref.js";

Page({
  data: {
    height: 0,
    weight: 0,
    bmi: 0,
    refDatas,
  },
  input,
  onCalculate,
  onShareAppMessage,
})

function onShareAppMessage(e) {
  return {
    title: "体重指数（BMI）计算器",
    path: "/pages/bmi/index"
  }
}

function input(e) {
  simpleInput.call(this, e);
  this.setData({
    bmi: 0
  });
}

function onCalculate(e) {
  const { height, weight } = this.data;
  const bmi = calculateBMI(height, weight);
  this.setData({
    bmi: bmi.toFixed(2),
  });
}

function calculateBMI(height, weight) {
  if (height <= 0 || weight <= 0) return 0;
  return weight / (height * height);
}