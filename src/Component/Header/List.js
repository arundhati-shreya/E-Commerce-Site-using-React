import React, { useContext } from "react";
import { CartContext } from "../Store/ContextProvider";
import { Link } from 'react-router-dom';

const List = () => {
  const DummyList = [
    {
      id: '1',
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      id: '2',
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      id: '3',
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      id: '4',
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];
  const cartContext = useContext(CartContext);

  const addItemToCart = (item) => {
    cartContext.addItemToCart(item);
  };

  return (
    <div className="text-center">
      <h3 style={{ fontStyle: 'italic', margin: 20 }}>Music</h3>
      <div className="row">
        {DummyList.map((item) => (
          <div key={item.id} className="col-md-6">
            <div className="mb-4">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="img-fluid rounded"
              />
              <p className="mt-2">Price: {item.price}</p>
              <button type="button" className="btn btn-primary btn-sm" onClick={() => addItemToCart(item)}>Add To Cart</button>
              <Link to={`/product/${item.id}`} className="btn btn-secondary btn-sm ms-2">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
