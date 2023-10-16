import React from 'react';
import './ProductCard.css';
import { FaSearch } from 'react-icons/fa';
const ProductCard = () => {
  const products = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      image: 'https://cdn.wallpapersafari.com/33/78/izY68n.jpg',
      stock: 10,
      price: 25.99,
      totalSales: 50,
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      image: 'https://cdn.wallpapersafari.com/33/78/izY68n.jpg',
      stock: 15,
      price: 19.99,
      totalSales: 35,
    },
  ];

  return (
   <div className='product-card'>
    <div className='product-header'>
        <h2>Products</h2>
        <div className='product-options'>
        <div className="product-search-bar">
        <FaSearch className='product-search-icon'/>
        <input type="text" placeholder="Search" />
      </div>
      <select className="selection-options">
        <option>Quarterly</option>
        <option>Half Yearly</option>
        <option>Monthly</option>
        <option>Annually</option>
      </select>
        </div>
    </div>
    <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className='product-grid'>
              <img src={product.image} alt={product.name} className='product-image' />
                <div className="product-details">
                  <p>{product.name}</p>
                  <p className="description">{product.description}</p>
                </div>
              </td>
              <td>{product.stock}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.totalSales}</td>
            </tr>
          ))}
        </tbody>
      </table>
   </div>
  );
};

export default ProductCard;
