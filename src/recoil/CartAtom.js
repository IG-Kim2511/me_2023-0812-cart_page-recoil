import { atom, selector } from "recoil";


// 👉./components/ProductCard.js
// 👉./pages/Cart.js
export const CartAtom = atom({
  key: "CartAtom",
  default: [],
});


// 👉./components/CartItem.js
// 👉./pages/Cart.js
export const QuantitySelector = selector({
  key: "QuantitySelector",
  get: ({ get }) => {
    const CurrentItem = get(CartAtom);
    return CurrentItem.length.toLocaleString();
  },
});

// 👉./components/CartItem.js
// 👉./pages/Cart.js
export const TotalPriceSelector = selector({
  key: "TotlaPriceSelector",
  get: ({ get }) => {
    const CurrentItem = get(CartAtom);
    return CurrentItem.reduce(
      (acc, cur) => acc + cur.price,
      0
    ).toLocaleString();
  },
});
