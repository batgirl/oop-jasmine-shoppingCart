var myCode = {

  ShoppingCart: function() {
    this.items = [];
    this.total = 0;
    this.addItem = function(item) {
      this.items.push(item);
    };
    this.removeItem = function(item) {
      var idx = this.items.indexOf(item);
      this.items.splice(idx, 1);
    };
    this.takeTotal = function() {
      var result = 0;
      this.items.forEach(function(elem) {
        result += elem.price; 
      })
      this.total = result;
    };
    this.takeDiscount = function(percent) {
      var result = this.total;
      this.total = Math.round(100*(result * (1 - percent)))/100;
    };
  },

  Item: function(name, price) {
    this.name = name;
    this.price = price;  
  }

};

module.exports = myCode;