export default function input(e) {
    const key = e.currentTarget.dataset.name;
    const value = e.detail.value;
    this.setData({
      [key]: value
    })
  }