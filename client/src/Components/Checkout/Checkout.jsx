// Updated Checkout.js with modern design using Tailwind CSS and fixed image layout

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Checkout() {
  const product = useSelector((state) => state.product);

  // State to manage user input (e.g., name, address, payment info)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    creditCard: '',
    cvv: '',
    // Add more fields as needed
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform validation and submit data to your server for processing
    // You can also use a state management library like Redux for handling data
    // Reset the form after successful submission
    setFormData({
      name: '',
      address: '',
      creditCard: '',
      cvv: '',
    });
  };

  return (
    <div className="checkout-page w-full md:w-9/12 mx-auto p-4 gap-12 flex flex-col md:flex-row">
      {/* Left side: Checkout form */}
      <div className="w-full md:w-1/2 mb-4 md:mr-4">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="creditCard" className="block text-sm font-medium">
              Credit Card Number:
            </label>
            <input
              type="text"
              id="creditCard"
              name="creditCard"
              value={formData.creditCard}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block text-sm font-medium">
              CVV:
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2"
              required
            />
          </div>
          {/* Add more fields for items, shipping options, etc. */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Right side: Product information */}
      <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Product Info</h2>
        {/* Display your product information here */}
        <div className="mb-2 flex flex-wrap justify-center gap-4">
          <img
            className="sm:w-28 w-11/12 rounded-md "
            src={window.URL.createObjectURL(
              new Blob([Int8Array.from(product[0].product.img.data.data)], {
                type: product[0].product.img.contentType,
              })
            )}
            alt="product"
          />
          <div className="ml-6 text-sm">
            <p><span className="font-semibold"></span> {product[0].product.name}</p>
            <p><span className="font-semibold"></span> {product[0].product.price} $</p>
            {/* <p><span className="font-semibold">Category:</span> {product[0].product.category}</p> */}
            <p><span className="font-semibold"></span> {product[0].product.color}</p>
            {/* <p><span className="font-semibold">Quantity:</span> {product[0].product.quantity}</p> */}
          </div>
        </div>
        {/* Add more product details as needed */}
      </div>
    </div>
  );
}

export default Checkout;
