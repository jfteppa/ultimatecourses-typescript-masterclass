class List {
  private list: any[];

  addItem(item: any): void {
    this.list.push(item);
  }

  getList(): any[] {
    return this.list;
  }
}

class Pizza {
  constructor(private name: string, private price: number) {}
}

// const list: List
const list = new List();

list.addItem(new Pizza('Pepperoni', 15));

// const pizzas: any[]
const pizzas = list.getList();

class List2<T> {
  private list: T[];

  addItem(item: T): void {
    this.list.push(item);
  }

  getList(): T[] {
    return this.list;
  }
}

// const list2: List2<Pizza>
const list2 = new List2<Pizza>();

list2.addItem(new Pizza('Pepperoni', 15));

// const pizzas2: Pizza[]
const pizzas2 = list2.getList();

/**
 * Argument of type '{ name: string; price: number; }' is not assignable to parameter of type 'Pizza'.
  Property 'name' is private in type 'Pizza' but not in type '{ name: string; price: number; }'.ts(2345)
 */
// list2.addItem({ name: 'Pepperoni3', price: 15 });

const obj = {
  name: 'Pepperoni2',
  price: 15,
};

/**
 * Argument of type '{ name: string; price: number; }' is not assignable to parameter of type 'Pizza'.
  Property 'name' is private in type 'Pizza' but not in type '{ name: string; price: number; }'.ts(2345)
 */
// list2.addItem(obj);

class Coupon {
  constructor(private name: string) {}
}

const anotherList = new List2<Coupon>();

anotherList.addItem(new Coupon('PIZZA25'));

/**
 * Argument of type 'Pizza' is not assignable to parameter of type 'Coupon'.
 */
// anotherList.addItem(new Pizza('Pepperoni', 15));

// const coupons: Coupon[]
const coupons = anotherList.getList();
