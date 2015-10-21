var myCode = require('../code.js');
var ShoppingCart = myCode.ShoppingCart;
var Item = myCode.Item;

describe('shoppingCart', function() {
  it('gets constructed with no items in it', function() {
    var cart = new ShoppingCart();
    expect(cart.items).toEqual([]);
  })

  it('can have items added to the cart', function() {
    var cart = new ShoppingCart();
    var item = new Item();
    cart.addItem(item);
    expect(cart.items).toEqual([item]);
  })

  it('can have items removed from the cart', function() {
    var cart = new ShoppingCart();
    var item = new Item();
    cart.addItem(item);
    cart.removeItem(item);
    expect(cart.items).toEqual([]);

    var cart = new ShoppingCart();
    var item1 = new Item("banana", 1.20);
    var item2 = new Item("coffee", 3.45);
    var item3 = new Item("avocado", 7.00);
    cart.addItem(item1);
    cart.addItem(item2);
    cart.addItem(item3);
    cart.removeItem(item2);
    expect(cart.items).toEqual([item1, item3]);    
  })

  it('can take the total price of all items in the cart', function() {
    var cart = new ShoppingCart();
    var item1 = new Item("banana", 1.20);
    var item2 = new Item("coffee", 3.45);
    cart.addItem(item1);
    cart.addItem(item2);
    expect(cart.total()).toEqual(4.65);
  })

  it('can take a percentage discount from the total price', function() {
    var cart = new ShoppingCart();
    var item1 = new Item("banana", 1.20);
    var item2 = new Item("coffee", 3.45);
    cart.addItem(item1);
    cart.addItem(item2);
    expect(cart.takeDiscount(0.3)).toEqual(3.26);
  })
})

describe('item', function() {
  it('can be given a name', function() {
    var item = new Item("banana");
    expect(item.name).toEqual("banana");
  })

  it('can be given a price', function() {
    var item = new Item("banana", 1.20);
    expect(item.price).toEqual(1.2);
  })
})