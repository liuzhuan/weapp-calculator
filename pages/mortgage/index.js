Page({
    data: {},
    onShareAppMessage,
})

function onShareAppMessage(e) {
    return {
        title: "房贷计算器",
        path: "/pages/mortgage/index",
        imageUrl: "/images/mortgage.jpg"
    }
}