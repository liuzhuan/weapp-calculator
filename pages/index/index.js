const links = [
    { url: "/pages/income-tax/index", label: "北京市五险一金及税后工资计算器" },
    { url: "/pages/bmi/index", label: "体重指数（BMI）" },
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
