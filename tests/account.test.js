import AccountController from '../controllers/accountController';
import config from '../config/config';

describe('Account API Tests', () => {
 let accountController;
 
 beforeEach(() => {
 accountController = new AccountController();
 });
 
 test('Successful authorization', async () => {
 const response = await accountController.authorize();
 expect(response.statusCode).toBe(config.statusCodes.SUCCESS);
 expect(response.response).toHaveProperty('token');
 });
 
 test('Invalid credentials', async () => {
 accountController.auth_data.password = 'wrong_password';
 const response = await accountController.authorize();
 expect(response.statusCode).toBe(config.statusCodes.UNAUTHORIZED);
 });
 
 test('Get user info', async () => {
 const response = await accountController.getUser(config.authData.userId);
 expect(response.statusCode).toBe(config.statusCodes.SUCCESS);
 expect(response.response.userName).toBe(config.authData.username);
 });
 
 test('Delete user', async () => {
 const response = await accountController.deleteUser(config.authData.userId);
 expect(response.statusCode).toBe(config.statusCodes.SUCCESS);
 expect(response.response.success).toBe(true);
 });
 
 test('Get deleted user', async () => {
 const response = await accountController.getUser(config.authData.userId);
 expect(response.statusCode).toBe(config.statusCodes.BAD_REQUEST);
 });
});
