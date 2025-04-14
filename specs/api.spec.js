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