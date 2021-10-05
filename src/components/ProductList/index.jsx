import Product from "../Product";

const ProductList = ({ newProduct, setCurrentSale, currentSale }) => {
  const addProduct = (id) => {
    const produto = newProduct.find((item) => item.id === id);
    setCurrentSale([...currentSale, produto]);
  };

  return (
    <div className="Product">
      <p>Produto escolhido</p>
      {newProduct[0] &&
        newProduct.map((item, index) => (
          <Product
            key={index}
            item={item}
            addProduct={addProduct}
            hasButton={true}
          ></Product>
        ))}
    </div>
  );
};

export default ProductList;
