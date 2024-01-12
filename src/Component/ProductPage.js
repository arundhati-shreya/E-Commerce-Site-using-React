import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();

  // Assuming that you have the product data available in some context or state
  // You should replace this with your actual data fetching logic
  const productData = {
    id: Number(productId) ,
    images: [
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    ],
    price: [
        100,
        50,
        70,
        100,
      ],
    reviews: [
      { id: 1, text: 'Great product!', rating: 5 },
      { id: 2, text: 'Not bad, could be better', rating: 3 },
      { id: 3, text: 'Great product!', rating: 5 },
     

    ],
  };

  const selectedProductIndex = Number(productId);

  if (selectedProductIndex >= 0 && selectedProductIndex < productData.images.length) {
    const selectedProductImage = productData.images[selectedProductIndex];
    const selectedProductPrice = productData.price[selectedProductIndex];
    // const selectedProductReview = productData.reviews[selectedProductIndex];
    return (
      <div>
        <h2>Product Page - {productData.id}</h2>
        <div>
          <h3>Image</h3>
          <img src={selectedProductImage} alt={`Product ${productData.id}`} />
        </div>
        <div>
          <h3>Price <p>${selectedProductPrice}</p></h3>
          
        </div>
        <div>
          <h3>Reviews</h3>
          {productData.reviews.map((review) => (
            <div key={review.id}>
              <h6>User{review.id}</h6>
              <p>{review.text}</p>
              <p>Rating: {review.rating}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>Product not found</div>;
  }
};

export default ProductPage;
