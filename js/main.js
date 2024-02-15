import products from './products.js';
import renderProducts from './renderProducts.js';
import './productCart.js';

const catalogList = document.querySelector('.catalog__list');
const catalogItemTemplate = document.querySelector('#product').content;

renderProducts(products, catalogItemTemplate, catalogList, true, 'catalog__item');
