//Удаление записи
(async function main() {
    try {
        const baseUrl = 'https://jsonplaceholder.typicode.com/';
        const id = 1; 
        const response = await fetch(`${baseUrl}posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseStatus = response.status;
        if (responseStatus === 200 || responseStatus === 204) {
            console.log('Запись успешно удалена.');
        } else {
            console.error('Ошибка выполнения запроса:', responseStatus);
        }
    } catch (error) {
        console.error('Ошибка выполнения запроса:', error);
    }
})();

async function fetchData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.statusText}`);
        }

        return response;
    } catch (error) {
        console.error('Ошибка выполнения запроса:', error);
    }
}

// Обновления записи
(async function mainUpdate() {
    try {
        const baseUrl = 'https://jsonplaceholder.typicode.com/';  
        const id = 1; 
        const newTitle = 'New Post Title'; 
        const data = {
            "title": newTitle
        };
        const jsonData = JSON.stringify(data);
        const response = await fetch(`${baseUrl}posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        });

        const responseStatus = response.status;

        if (responseStatus === 200) {
            const responseData = await response.json();
            console.log('Запись успешно обновлена:', responseData);
        } else {
            console.error('Ошибка выполнения запроса:', responseStatus);
        }
    } catch (error) {
        console.error('Ошибка выполнения запроса:', error);
    }
})();

async function fetchData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.statusText}`);
        }

        return response;
    } catch (error) {
        console.error('Ошибка выполнения запроса:', error);
    }
}


//  Тесты для рабочего апи, Создание Лида через форму
(async function main() {
    try {
        const baseUrl = 'https://api.stoking.ru/v1/';
        const email = "p.chistyakova@myspaceport.ru";
        const phone = "+7 (922) 364-12-63";
        const data = {
            email,
            phone
        };
        const jsonData = JSON.stringify(data);
        const response = await fetch(`${baseUrl}/shops/create-lead`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        });
        const responseStatus = response.status;
        if (responseStatus === 200) {
            const responseData = await response.json();
            console.log('Данные ответа:', responseData);
        } else {
            console.error('Ошибка выполнения запроса:', responseStatus);
        }
    } catch (error) {
        console.error('Ошибка выполнения запроса:', error);
    }
})();
async function fetchData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.statusText}`);
        }
        return response;
    } catch (error) {
        console.error('Ошибка выполнения запроса:', error);
    }
}



// //  Получение данных по поиску на сайте stoking.ru
(async function main() {
    try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const baseUrl = 'https://api.st-es.sp-systems.ru/v1/shops/search';
    const searchTerm = 'Вставка гибкая NAVEKA G- 370x170';
    const url = `${baseUrl}?s=${searchTerm}`;
    const response = await fetch(url);
    const responseStatus = response.status;
    if (responseStatus === 200) {
    console.log('Запрос выполнен успешно!');
    const responseData = await response.json();
    console.log('Данные ответа:', responseData);
    } else {
    console.error('Ошибка выполнения запроса:', responseStatus);
    }
    } catch (error) {
    console.error('Ошибка выполнения запроса:', error);
    } finally {
    delete process.env.NODE_TLS_REJECT_UNAUTHORIZED;
    }
   })();
   
   async function fetchData(url) {
    const response = await fetch(url);
    
    if (!response.ok) {
    throw new Error(`Ошибка сети: ${response.statusText}`);
    }
    
    return response;
   }



// 3. Тест успешной авторизации 

(async function main() {
    try {
        const baseUrl = 'https://api.stoking.ru/v1';

        const email = "p.chistyakova@myspaceport.ru";
        const password = "123123123";

        const response = await fetch(`${baseUrl}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const responseStatus = response.status;
        if (responseStatus === 200) {
            const responseData = await response.json();
            const { other_data, id, created_at, status, first_name, middle_name, last_name, avatar, organization_id } = responseData.user;
            const rest = { id, created_at, status, first_name, middle_name, last_name, avatar, organization_id };
            console.log('Авторизация выполнена успешно!', rest);
        } else {
            console.error('Ошибка выполнения авторизации: ', responseStatus);
        }
    } catch (error) {
        console.error('Ошибка выполнения запроса:', error);
    }
})();
      

  
//   Тест с неудачной авторизации
async function fetchData(url, method, body) {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return response;
  }
  (async function main() {
    try {
      
      const correctEmail = "p.chistyakova@myspaceport.ru";
      const correctPassword = "123123123";
      const incorrectEmail = "incorrectEmail"; 
      const incorrectPassword = "incorrectPassword"; 
      const responseFailure1 = await fetchData('https://api.stoking.ru/v1/user/login', 'POST', {
        "email": incorrectEmail,
        "password": correctPassword
      });
  
      const responseStatusFailure1 = responseFailure1.status;
      const responseDataFailure1 = await responseFailure1.json();
  
      console.log('Статус авторизации с неправильным email:', responseStatusFailure1);
      console.log('Данные авторизации с неправильным email:', responseDataFailure1);
  
      const responseFailure2 = await fetchData('https://api.stoking.ru/v1/user/login', 'POST', {
        "email": correctEmail,
        "password": incorrectPassword
      });
  
      const responseStatusFailure2 = responseFailure2.status;
      const responseDataFailure2 = await responseFailure2.json();
  
      console.log('Статус авторизации с неправильным паролем:', responseStatusFailure2);
      console.log('Данные авторизации с неправильным паролем:', responseDataFailure2);
  
      if (responseStatusFailure1 === 400) {
        console.log('Ошибка авторизации с неправильным email: Успешно возвращен статус 400');
      } else {
        console.error('Ошибка: Неправильный email не вернул статус 400');
      }
  
      if (responseStatusFailure2 === 401) {
        console.log('Ошибка авторизации с неправильным паролем: Успешно возвращен статус 401');
      } else {
        console.error('Ошибка: Неправильный пароль не вернул статус 401');
      }
    } catch (error) {
      console.error('Ошибка выполнения запроса', error);
    }
  })();













