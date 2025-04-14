 //Удаление записи
async function deletePost(id) {
    try {
        const baseUrl = 'https://jsonplaceholder.typicode.com/';
        const response = await fetch(`${baseUrl}posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}

describe('DELETE /posts/:id endpoint', () => {
    it('should successfully delete a post and return 200 status', async () => {
        const id = 1;
        const response = await deletePost(id);
        expect(response.status).toBe(200);
        expect(response.ok).toBeTruthy();
    });
    it('should handle error when deleting non-existent post', async () => {
        const nonExistentId = 999999;
        try {
            const response = await deletePost(nonExistentId);
            expect(response.status).toBe(404);
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
    it('should handle network errors', async () => {
        const invalidUrlId = 'invalid-id';
        try {
            await deletePost(invalidUrlId);          
        } catch (error) {
            expect(error).toBeDefined();
            expect(error.message).toContain('Failed to fetch');
        }
    });
});

// Функция для обновления поста
async function updatePost(id, newTitle) {
    try {
        const baseUrl = 'https://jsonplaceholder.typicode.com/';
        const data = { title: newTitle };
        const response = await fetch(`${baseUrl}posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response;
    } catch (error) {
        throw error;
    }
}

// Тестирование функции обновления
describe('PUT /posts/:id endpoint', () => {
    it('should successfully update a post and return 200 status', async () => {
        const id = 1;
        const newTitle = 'Updated Title';
        const response = await updatePost(id, newTitle);
        expect(response.status).toBe(200);
        expect(response.ok).toBeTruthy();
    });

    it('should handle error when updating non-existent post', async () => {
        const nonExistentId = 999999;
        try {
            const response = await updatePost(nonExistentId, 'Updated Title');
            expect(response.status).toBe(404);
        } catch (error) {
            expect(error).toBeDefined();
        }
    });

    it('should handle network errors', async () => {
        const invalidUrlId = 'invalid-id';
        try {
            await updatePost(invalidUrlId, 'Updated Title');
        } catch (error) {
            expect(error).toBeDefined();
            expect(error.message).toContain('Failed to fetch');
        }
    });
});






// Тест успешной авторизации
describe('POST /users/login endpoint', () => {
    const baseUrl = 'https://api.stoking.ru/v1';
    const validCredentials = {
        email: "p.chistyakova@myspaceport.ru",
        password: "123123123"
    };

    const requiredUserFields = [
        'id', 'created_at', 'status', 'first_name',
        'middle_name', 'last_name', 'avatar', 'organization_id'
    ];

    it('should successfully authenticate user with valid credentials', async () => {
        try {
            const response = await fetch(`${baseUrl}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(`${validCredentials.email}:${validCredentials.password}`)}`
                },
                body: JSON.stringify(validCredentials)
            });

            expect(response.status).toBe(200);
            const responseData = await response.json();
            
            expect(responseData).toHaveProperty('user');
            requiredUserFields.forEach(field => {
                expect(responseData.user).toHaveProperty(field);
            });

          
            if (responseData.token) {
                expect(responseData.token).toBeTruthy();
                console.log('Токен авторизации получен');
            }

        } catch (error) {
            console.error('Ошибка при авторизации:', error);
            expect(error).toBeFalsy();
        }
    });

  
    it('should return error with invalid credentials', async () => {
      try {
        const response = await fetch(`${baseUrl}/users/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: "invalid@email.com",
            password: "wrongpassword"
          })
        });
  
        // Проверка статуса ошибки
        expect(response.status).not.toBe(200);
        
        // Парсинг ошибки
        const errorData = await response.json();
        console.log('Данные ошибки:', errorData);
        
        // Проверка структуры ошибки
        expect(errorData).toHaveProperty('message');
        expect(errorData.message).toBeTruthy();
  
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

});

// Тест авторизации заблокированного аккаунта 
describe('POST /user/login endpoint - Forbidden Scenarios', () => {
    const baseUrl = 'https://api.stoking.ru/v1';
    const forbiddenEmail = "pol123@mail.ru";
    const validPassword = "123123123";
   
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
   
    it('should return 403 for blocked user', async () => {
    const response = await fetchData(`${baseUrl}/user/login`, 'POST', {
    email: forbiddenEmail,
    password: validPassword
    });
    
    // Проверяем статус ответа
    expect(response.status).toBe(403);
    
    // Получаем данные из ответа
    const responseData = await response.json();
    console.log('Данные ответа:', responseData);
    
    // Добавляем проверки содержимого ответа
    expect(responseData).toHaveProperty('name', 'Forbidden');
    expect(responseData).toHaveProperty('message', 'Ваш аккаунт заблокирован');
    expect(responseData).toHaveProperty('code', 0);
    expect(responseData).toHaveProperty('status', 403);
    expect(responseData).toHaveProperty('type', 'yii\\web\\HttpException');
    });
   });



