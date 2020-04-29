import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from './models/Color';
import { Car } from './models/Car';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList: Color[] = [
  { id: 1, name: 'red' },
  { id: 2, name: 'white' },
  { id: 3, name: 'orange' },
  { id: 4, name: 'brown' },
];

const carList: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'blue', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
];

ReactDOM.render(
  <>
    {/* React.createElement(ColorTool, { colors: colorList } <= is the props object); */}
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);
