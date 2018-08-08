export default function alert(msg) {
    wx.showToast({
        title: msg,
        icon: "none",
        mask: true
    })
}