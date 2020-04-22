interface Order {
  id: string;
  amount: number;
  currency: string;
}

interface Stripe {
  card: string;
  cvc: string;
}

interface Paypal {
  email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPaypal = Order & Paypal;
type CheckoutABC = Order & { name: string };

const order: Order = {
  id: '123',
  amount: 100,
  currency: 'USD',
};

// const orderCard: CheckoutCard
const orderCard: CheckoutCard = {
  ...order,
  card: '1000 2000 3000 4000',
  cvc: '123',
};
console.log('orderCard', orderCard);

// const orderPaypal: CheckoutPaypal
const orderPaypal: CheckoutPaypal = {
  ...order,
  email: 'abc@def.com',
};
console.log('orderPaypal', orderPaypal);

// before spread operator existed
// const assigned: CheckoutCard
const assigned = Object.assign({}, order, orderCard);
console.log('assigned', assigned);
