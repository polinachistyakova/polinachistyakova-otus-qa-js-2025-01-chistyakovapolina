const axios = require('axios');

const createUserErrorDuplicateLogin = async () => {
    try {
        const response = await axios.post('https://bookstore.demoqa.com/api/v1/auth/signup', {
            "email": "test@example.com",
            "password1": "password123",
            "password2": "password123"
        });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.response.data);
    }
};

createUserErrorDuplicateLogin();