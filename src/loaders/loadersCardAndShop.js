import { getStroedCard } from "../utilities/fakedb";

export const loadersCardAndShop = async () => {
  let data = await fetch(
    "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
  );
  let products = await data.json();
  let storedCard = getStroedCard();

  let previousCart = [];
  for (const id in storedCard) {
    let addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      let quantity = storedCard[id];
      addedProduct.quantity = quantity;
      previousCart.push(addedProduct);
    }
  }
  return { products, previousCart };
};
