export const renderElement = (container, component, place = 'beforeend') => {
  container.insertAdjacentHTML(place, component);
};
