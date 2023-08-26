const wrapper = document.querySelector(".sliderWrap");
const menueItem = document.querySelectorAll(".menueItem");
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 30000,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 40000,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 25000,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 22000,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 20000,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImage");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".sizes");

menueItem[0].style.color = `#EEE4AB`;
menueItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    menueItem.forEach((stuff) => {
      stuff.style.color = `grey`;
    });
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    wrapper.style.transition = `all 1s ease-in-out`;
    item.style.color = `#EEE4AB`;
    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₦" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColor.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

const productBuy = document.querySelector(".productBuy");
const close = document.querySelector(".close");
const payment = document.querySelector(".payment");

productBuy.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
