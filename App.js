const burgermenu = document.querySelector(".burger__menu");
const mobileopenmenu = document.querySelector(".navbar__mobile");
const mobileclosemenu = document.querySelector(".navbar__mobile__close__icon");
const headercart = document.querySelector(".header__cart");
const cartlist = document.querySelector(".gallery__cart__container");

const minus = document.querySelector(".cart__icon__box__minus");
const plus = document.querySelector(".cart__icon__box__plus");
const amount = document.querySelector(".cart__amount");
const headeramount = document.querySelector(".header__cart__amount");
const cardContainer = document.querySelector(".add__cart__container");
const productTitle = document.querySelector(".product__title").innerHTML;
const productPrice = document.querySelector(".current__price__value").innerHTML;
const cartContainer = document.querySelector(".cart__container__bottom");
const cartProduct = document.querySelector(".cart__products__list");

const desktopMainImage = document.querySelector(".desktopMainImage");
const desktopThumbnailImage = document.querySelectorAll(
  ".desktopThumbnailImage"
);

const gallery__product__image = document.querySelector(
  ".gallery__product__image"
);

const left = document.querySelector(".gallery__left");
const right = document.querySelector(".gallery__right");

let initialValue = 0;
let cartProducts = [];
let galleryID = 0;

burgermenu.onclick = function () {
  mobileopenmenu.style.transform = "translate(0%, 0%)";
};

mobileclosemenu.onclick = function () {
  mobileopenmenu.style.transform = "translate(-100%, 0%)";
};

headercart.onclick = function () {
  if (cartlist.classList.contains("gallery__cart__container__active")) {
    cartlist.classList.remove("gallery__cart__container__active");
  } else {
    cartlist.classList.add("gallery__cart__container__active");
  }
};

minus.onclick = () => {
  if (initialValue === 0) return;
  else {
    initialValue = initialValue - 1;
    amount.innerHTML = initialValue;
  }
};

plus.onclick = () => {
  initialValue = initialValue + 1;
  amount.innerHTML = initialValue;
};

cardContainer.onclick = () => {
  if (initialValue >= 1) {
    headeramount.style.opacity = 1;
    headeramount.innerHTML = initialValue;
  }
  cartProducts.push({
    title: `${productTitle}`,
    price: `${productPrice}`,
    quantity: `${initialValue}`,
  });
  if (initialValue >= 1) {
    cartProduct.style.display = "none";
    const productList = document.createElement("div");
    productList.className = "cart__product__container";
    const cartImage = document.createElement("img");
    cartImage.src = "./images/image-product-1-thumbnail.jpg";
    cartImage.className = "cart__product__thumb";
    const centerDiv = document.createElement("div");
    centerDiv.className = "cart__product__center";
    const cartProductTitle = document.createElement("p");
    cartProductTitle.className = "cart__product__title";
    cartProductTitle.innerHTML = productTitle;
    centerDiv.appendChild(cartProductTitle);
    const cartProductInvoice = document.createElement("p");
    cartProductInvoice.className = "cart__product__invoice";
    cartProductInvoice.innerHTML = `$${productPrice} x ${initialValue}`;
    const cartProductTotal = document.createElement("span");
    cartProductTotal.className = "cart__product__total";
    cartProductTotal.innerHTML = `$${productPrice * initialValue}.00`;
    cartProductInvoice.appendChild(cartProductTotal);
    centerDiv.appendChild(cartProductInvoice);
    productList.appendChild(cartImage);
    productList.appendChild(centerDiv);
    const deleteImage = document.createElement("img");
    deleteImage.src = "./images/icon-delete.svg";
    productList.appendChild(deleteImage);

    cartContainer.appendChild(productList);
  }
};

desktopThumbnailImage.forEach(
  (img, id) =>
    (img.onclick = () => {
      if (id === 0) {
        desktopMainImage.src = "./images/image-product-1.jpg";
      } else if (id === 1) {
        desktopMainImage.src = "./images/image-product-2.jpg";
      } else if (id === 2) {
        desktopMainImage.src = "./images/image-product-3.jpg";
      } else if (id === 3) {
        desktopMainImage.src = "./images/image-product-4.jpg";
      }
    })
);

left.onclick = () => {
  if (galleryID === 0) {
    galleryID = 3;
  }
  galleryID = galleryID - 1;
  gallery__product__image.src = `./images/image-product-${galleryID + 1}.jpg`;
};

right.onclick = () => {
  if (galleryID === 3) {
    galleryID = 0;
  }
  galleryID = galleryID + 1;
  gallery__product__image.src = `./images/image-product-${galleryID + 1}.jpg`;
};
