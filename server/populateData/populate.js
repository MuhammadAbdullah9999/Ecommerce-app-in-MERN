const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Product = require('../model/product');


const products = [
    {
      name: 'Headphone Model X',
      category: 'Headphone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex dui, eleifend quis ante a, consectetur vulputate eros. Etiam egestas et lacus sed iaculis.Etiam consequat neque et ligula dignissim sagittis Praesent vel nisl pretium, consectetur lectus eget, commodo odio Nullam in libero id turpis tempor dapibus',
      img: {
        data: fs.readFileSync(path.join(__dirname, 'Images', '1.png')), // Read binary image data
        contentType: 'image/png', // Set the MIME type
      },
      quantity: 50,
      title: 'Premium Headphones with Noise Cancellation',
      price:260.00,
    },
    {
        name: 'Headphone Model X',
        category: 'Headphone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex dui, eleifend quis ante a, consectetur vulputate eros. Etiam egestas et lacus sed iaculis.Etiam consequat neque et ligula dignissim sagittis Praesent vel nisl pretium, consectetur lectus eget, commodo odio Nullam in libero id turpis tempor dapibus',
        img: {
          data: fs.readFileSync(path.join(__dirname, 'Images', '2.png')), // Read binary image data
          contentType: 'image/png', // Set the MIME type
        },
        quantity: 50,
        title: 'Premium Headphones with Noise Cancellation',
        price:260.00,
      },
      {
        name: 'Headphone Model X',
        category: 'Headphone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex dui, eleifend quis ante a, consectetur vulputate eros. Etiam egestas et lacus sed iaculis.Etiam consequat neque et ligula dignissim sagittis Praesent vel nisl pretium, consectetur lectus eget, commodo odio Nullam in libero id turpis tempor dapibus',
        img: {
          data: fs.readFileSync(path.join(__dirname, 'Images', '3.png')), // Read binary image data
          contentType: 'image/png', // Set the MIME type
        },
        quantity: 50,
        title: 'Premium Headphones with Noise Cancellation',
        price:260.00,
      },
      {
        name: 'Headphone Model X',
        category: 'Headphone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex dui, eleifend quis ante a, consectetur vulputate eros. Etiam egestas et lacus sed iaculis.Etiam consequat neque et ligula dignissim sagittis Praesent vel nisl pretium, consectetur lectus eget, commodo odio Nullam in libero id turpis tempor dapibus',
        img: {
          data: fs.readFileSync(path.join(__dirname, 'Images', '5.png')), // Read binary image data
          contentType: 'image/png', // Set the MIME type
        },
        quantity: 50,
        title: 'Premium Headphones with Noise Cancellation',
        price:260.00,
      },
      {
        name: 'Earbuds Model X',
        category: 'Earbuds',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex dui, eleifend quis ante a, consectetur vulputate eros. Etiam egestas et lacus sed iaculis.Etiam consequat neque et ligula dignissim sagittis Praesent vel nisl pretium, consectetur lectus eget, commodo odio Nullam in libero id turpis tempor dapibus',
        img: {
          data: fs.readFileSync(path.join(__dirname, 'Earbuds', '1.png')), // Read binary image data
          contentType: 'image/png', // Set the MIME type
        },
        quantity: 50,
        title: 'Premium Headphones with Noise Cancellation',
        price:260.00,
      },
      {
        name: 'Earbuds Model X',
        category: 'Earbuds',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex dui, eleifend quis ante a, consectetur vulputate eros. Etiam egestas et lacus sed iaculis.Etiam consequat neque et ligula dignissim sagittis Praesent vel nisl pretium, consectetur lectus eget, commodo odio Nullam in libero id turpis tempor dapibus',
        img: {
          data: fs.readFileSync(path.join(__dirname, 'Earbuds', '2.png')), // Read binary image data
          contentType: 'image/png', // Set the MIME type
        },
        quantity: 50,
        title: 'Premium Headphones with Noise Cancellation',
        price:260.00,
      },
      {
        name: 'Earbuds Model X',
        category: 'Earbuds',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex dui, eleifend quis ante a, consectetur vulputate eros. Etiam egestas et lacus sed iaculis.Etiam consequat neque et ligula dignissim sagittis Praesent vel nisl pretium, consectetur lectus eget, commodo odio Nullam in libero id turpis tempor dapibus',
        img: {
          data: fs.readFileSync(path.join(__dirname, 'Earbuds', '3.png')), // Read binary image data
          contentType: 'image/png', // Set the MIME type
        },
        quantity: 50,
        title: 'Premium Headphones with Noise Cancellation',
        price:260.00,
      },
      {
        name: 'Earbuds Model X',
        category: 'Earbuds',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex dui, eleifend quis ante a, consectetur vulputate eros. Etiam egestas et lacus sed iaculis.Etiam consequat neque et ligula dignissim sagittis Praesent vel nisl pretium, consectetur lectus eget, commodo odio Nullam in libero id turpis tempor dapibus',
        img: {
          data: fs.readFileSync(path.join(__dirname, 'Earbuds', '4.png')), // Read binary image data
          contentType: 'image/png', // Set the MIME type
        },
        quantity: 50,
        title: 'Premium Headphones with Noise Cancellation',
        price:260.00,
      },
      {
        name: 'Earbuds Model X',
        category: 'Earbuds',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex dui, eleifend quis ante a, consectetur vulputate eros. Etiam egestas et lacus sed iaculis.Etiam consequat neque et ligula dignissim sagittis Praesent vel nisl pretium, consectetur lectus eget, commodo odio Nullam in libero id turpis tempor dapibus',
        img: {
          data: fs.readFileSync(path.join(__dirname, 'Earbuds', '5.png')), // Read binary image data
          contentType: 'image/png', // Set the MIME type
        },
        quantity: 50,
        title: 'Premium Headphones with Noise Cancellation',
        price:260.00,
      },
      {
        name: 'Earbuds Model X',
        category: 'Earbuds',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex dui, eleifend quis ante a, consectetur vulputate eros. Etiam egestas et lacus sed iaculis.Etiam consequat neque et ligula dignissim sagittis Praesent vel nisl pretium, consectetur lectus eget, commodo odio Nullam in libero id turpis tempor dapibus',
        img: {
          data: fs.readFileSync(path.join(__dirname, 'Earbuds', '6.png')), // Read binary image data
          contentType: 'image/png', // Set the MIME type
        },
        quantity: 50,
        title: 'Premium Headphones with Noise Cancellation',
        price:260.00,
      },
     
  ];

async function populateDatabase() {
  try {
    await Product.insertMany(products);
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    mongoose.disconnect();
  }
}

populateDatabase();
