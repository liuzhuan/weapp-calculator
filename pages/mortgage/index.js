import range from "../../utils/range.js";
import round from "../../utils/round.js";
import {
    calculateMonthlyPayment,
    calculateTotalPayment as calculateTotalPayment1
} from "./formula/capitalPlusInterest.js";
import {
    calculateFirstMonthlyPayment,
    calculateMonthlyDecrease,
    calculateTotalPayment as calculateTotalPayment2
} from "./formula/capital.js";

const sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ["公积金贷款", "商业贷款", "组合贷款"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        calculationModes: ["按房价总额", "按贷款总额"],
        activeCalculationModeIndex: 0,
        loanRatios: range(0.2, 0.85, 0.05).map(roundWith2Decimals),
        loanTermsInYear: range(1, 26),
        forms: [
            {
                totalHousePrice: 0,
                activeLoanRatioIndex: 0,
                totalLoanPrice: 0,
            },
            {},
            {}
        ]
    },
    onLoad,
    onShow,
    tabClick,
    onShareAppMessage,
    onCalculationModeChanged
})

function onLoad() {
    var that = this;
    wx.getSystemInfo({
        success: function(res) {
            that.setData({
                sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
        }
    });
}

function onShow() {
    const capital = 1000000;
    const total = calculateTotalPayment1(capital, 0.0325/12, 25*12);
    console.log("interest:", total-capital);
}

function tabClick(e) {
    this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
    });
}

function onCalculationModeChanged(e) {
    const value = e.detail.value;
    this.setData({
        activeCalculationModeIndex: value
    });
}

function onShareAppMessage(e) {
    return {
        title: "房贷计算器",
        path: "/pages/mortgage/index",
        imageUrl: "/images/mortgage.jpg"
    }
}

function roundWith2Decimals(number) {
    return round(number, 2);
}