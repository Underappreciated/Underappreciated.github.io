const cartItemsContainer = document.getElementById('cart-items');
const totalAmountElement = document.getElementById('total-amount');
let totalAmount = 0;

// Fungsi untuk menambah item ke keranjang
function addItemToCart(imageUrl, productName, price) 
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');

  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = productName;
  cartItem.appendChild(image);

  const itemDetails = document.createElement('div');
  itemDetails.classList.add('item-details');

  const productNameElement = document.createElement('h2');
  productNameElement.textContent = productName;
  itemDetails.appendChild(productNameElement);

  const priceElement = document.createElement('p');
  priceElement.textContent = `Price: $${price}`;
  itemDetails.appendChild(priceElement);

  cartItem
