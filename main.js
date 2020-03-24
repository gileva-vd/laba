module.exports = {

  totalCount: 0,

  setOriginalPrice: function(originalPrice) {
    this.totalCount = originalPrice
  },

  addToCart: function (price) {
    this.totalCount += price
  },

  deleteToCart: function(price) {
    if(typeof price === 'number' && price <= this.totalCount) {
      this.totalCount -= price
    } else {
      throw new Error('Некоректное значение');
    }
  },

  getTotalPrice: function () {
    return this.totalCount
  }
}