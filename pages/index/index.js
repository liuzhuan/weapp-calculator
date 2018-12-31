const links = [
    { url: "/pages/income-tax/index", label: "北京市五险一金及税后工资计算器" },
    // { url: "/pages/mortgage/index", label: "房贷计算器" }, // suspend
    { url: "/pages/bmi/index", label: "体重指数（BMI）" },
    { url: "/pages/io-log/index", label: "出入量记录" },
]

Page({
    data: {
        links
    },
    onShareAppMessage,
})

function onShareAppMessage() {
    return {
        title: "各种计算器",
        path: "/pages/index/index",
        imageUrl: "/images/share.png"
    }
}
