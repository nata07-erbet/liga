import {renderElement} from '../utils/render';
import {loadBath} from './nata-load-bath';

import {bathCardTemplate} from './booking/templates/bath-card-template';

const renderBathList = async () => {
  const { data: baths } = await loadBath();

  const bathContainer = document.querySelector('.select-bath__wrapper');

  if (bathContainer) {
    baths.forEach((bath) => {
      const bathTemplate = bathCardTemplate(bath);
      renderElement(bathContainer, bathTemplate);
    });
  }
};

export {renderBathList};
