import {renderElement} from '../utils';
import {loadBath} from './nata-load-bath';

import {bathCardTemplate} from './booking/templates/bath-card-template';

const renderBathList = () => {
  const baths = loadBath();

  const bathContainer = document.querySelector('.select-bath__wrapper');

  baths.map((bath) => {
    const bathTemplate = bathCardTemplate(bath);
    renderElement(bathContainer, bathTemplate)
  })



};

export {renderBathList}