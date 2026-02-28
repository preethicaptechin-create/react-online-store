// // config.js
// export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
// export const CURRENCY = import.meta.env.VITE_CURRENCY || "₹";

// export const ROUTES = {
//   products: "/products",
//   orderDetails: "/order-details",
// };

// export const MESSAGES = {
//   emptyCart: "Your cart is empty",
//   emptyCartDesc: "Add something you love ❤️",
//   continueShopping: "Continue Shopping",
//   checkout: "Proceed to Checkout",
//   cartEmptyAlert: "Cart is empty!",
// };

// export const SYMBOLS = {
//   increase: "+",
//   decrease: "−",
// };


// config.js
// export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
// export const CURRENCY = import.meta.env.VITE_CURRENCY || "₹";

// export const ROUTES = {
//   products: "/products",
//   orderDetails: "/order-details",
//   login: "/login",
//   orderConfirmation: "/order-confirmation",
// };

// export const MESSAGES = {
//   // Cart messages
//   emptyCart: "Your cart is empty",
//   emptyCartDesc: "Add something you love ❤️",
//   continueShopping: "Continue Shopping",
//   checkout: "Proceed to Checkout",
//   cartEmptyAlert: "Cart is empty!",

//   // Order Details messages
//   enterOrderDetails: "Enter Order Details",
//   firstName: "First Name",
//   lastName: "Last Name",
//   address: "Address",
//   mobile: "Mobile Number",
//   mobilePlaceholder: "10-digit number",
//   paymentMethod: "Payment Method",
//   select: "Select",
//   upi: "UPI",
//   card: "Credit/Debit Card",
//   cod: "Cash on Delivery",
//   placeOrder: "Place Order",

//   // Validation / errors
//   firstNameRequired: "First name is required",
//   firstNameShort: "First name is too short",
//   lastNameRequired: "Last name is required",
//   lastNameShort: "Last name is too short",
//   addressRequired: "Address is required",
//   addressInvalid: "Please enter a valid full address",
//   mobileRequired: "Mobile number is required",
//   mobileInvalid: "Enter a valid 10-digit Indian mobile number",
//   paymentMethodRequired: "Please select a payment method",
//   fixFormErrors: "Please fix the errors in the form",
//   loginRequired: "Please login to place order",
//   orderPlaced: "Order placed successfully ✅",
//   orderFailed: "Failed to place order",
//   somethingWentWrong: "Something went wrong!",
// };

// export const SYMBOLS = {
//   increase: "+",
//   decrease: "−",
// };



// config.js
export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
export const CURRENCY = import.meta.env.VITE_CURRENCY || "₹";

export const ROUTES = {
  products: "/products",
  orderDetails: "/order-details",
  login: "/login",
  orderConfirmation: "/order-confirmation",
};

export const MESSAGES = {
  // Cart messages
  emptyCart: "Your cart is empty",
  emptyCartDesc: "Add something you love ❤️",
  continueShopping: "Continue Shopping",
  checkout: "Proceed to Checkout",
  cartEmptyAlert: "Cart is empty!",

  // Order Details messages
  enterOrderDetails: "Enter Order Details",
  firstName: "First Name",
  lastName: "Last Name",
  address: "Address",
  mobile: "Mobile Number",
  mobilePlaceholder: "10-digit number",
  paymentMethod: "Payment Method",
  select: "Select",
  upi: "UPI",
  card: "Credit/Debit Card",
  cod: "Cash on Delivery",
  placeOrder: "Place Order",

  // Validation / errors
  firstNameRequired: "First name is required",
  firstNameShort: "First name is too short",
  lastNameRequired: "Last name is required",
  lastNameShort: "Last name is too short",
  addressRequired: "Address is required",
  addressInvalid: "Please enter a valid full address",
  mobileRequired: "Mobile number is required",
  mobileInvalid: "Enter a valid 10-digit Indian mobile number",
  paymentMethodRequired: "Please select a payment method",
  fixFormErrors: "Please fix the errors in the form",
  loginRequired: "Please login to place order",
  orderPlaced: "Order placed successfully ✅",
  orderFailed: "Failed to place order",
  somethingWentWrong: "Something went wrong!",

  // Order Confirmation messages
  orderConfirmed: "Order Confirmed! 🎉",
  thankYou: "Thank you for your purchase ❤️",
  orderId: "Order ID:",
  name: "Name:",
  itemsOrdered: "Items Ordered:",
  total: "Total:",
  orderProcessing: "Your order is being processed. You will receive updates shortly.",
  loadingOrder: "Loading order details...",
  orderNotAvailable: "Order not available",
};

export const SYMBOLS = {
  increase: "+",
  decrease: "−",
};