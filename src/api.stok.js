const axios = require('axios');

const getDataFromApi = async () => {
  try {
    const response = await axios.get('http://calc.pecom.ru/bitrix/components/pecom/calc/ajax.php', {
      params: {
        taketown: -477,
        delivertown: -484,
        places: [0.5, 0.5, 0.5, 8, 1] // Передача параметров в виде массива
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return null;
  }
};

module.exports = getDataFromApi;