function generateProducts() {
  const phones = [];
  const minPrice = 1000;
  const maxPrice = 4000;

  for (let i = 0; i < 11; i++) {
    phones.push({
      name: ` phone ${i}`,
      storage: "256 GB",
      price: Math.trunc(Math.random() * (maxPrice + 1 - minPrice)) + minPrice,
    });
    return phones;
  }
}
export default generateProducts;
