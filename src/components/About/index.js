import React, { useState } from "react";
import { connect } from "react-redux";
import { addProduct } from "../../actions";

const About = ( {addProductProp, productsCount} ) => {
  const [itemName, setItem] = useState("");

  return (
    <>
      <h1>About Us</h1>
      <input onChange={(e) => setItem(e.target.value)} value={itemName} />
      <button
        onClick={() => {
          addProductProp({ id: productsCount + 1, name: itemName });
          setItem("");
        }}
      >
        ADD
      </button>
    </>
  );
};

const mapStateToProps = (store) => ({
  productsCount: store.products.length,
});

const mapDispatchToProps = (dispatch) => ({
  addProductProp: (data) => dispatch(addProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
