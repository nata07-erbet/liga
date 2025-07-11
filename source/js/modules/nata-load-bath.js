import mockData from '../../api/objects.json';

// При загрузке страницы все бани должны быть активными. Не устанавливать выбранную баню по умолчанию.
const loadBath = async () => {
  // const response = await fetch('../../../source/objects');
  // const data = await response.json();
  console.log(mockData);
  return mockData;


}

export {loadBath}
