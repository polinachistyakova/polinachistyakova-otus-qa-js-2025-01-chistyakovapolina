

import { nameIsValid, fullTrim, getTotal } from './app.';
// * Проверка имени пользователя
describe('nameIsValid', () => {
  test('Valid name', () => {
    expect(nameIsValid('John')).toBe(true);
    // Ожидаем, что имя "John" удовлетворяет условиям валидности
  });

  test('Invalid name - empty string', () => {
    expect(nameIsValid('')).toBe(false);
    // Ожидаем, что пустая строка не удовлетворяет условиям валидности имени
  });

  test('Invalid name - single character', () => {
    expect(nameIsValid('J')).toBe(false);
    // Ожидаем, что односимвольное имя не удовлетворяет условиям валидности
  });

  test('Invalid name - special characters', () => {
    expect(nameIsValid('John123')).toBe(false);
     // Ожидаем, что имя с цифрами не удовлетворяет условиям валидности
  });
});


// * Удаление пробелов из строки
describe('fullTrim', () => {
  test('Remove spaces', () => {
    expect(fullTrim('  John  ')).toBe('John');
    // Ожидаем, что строка "John" останется после удаления пробелов
  });

  test('Trim with single space', () => {
    expect(fullTrim(' John ')).toBe('John');
    // Ожидаем, что строка "John" останется после обрезки одного пробела
  });

  test('Trim with newline', () => {
    expect(fullTrim('\n\nJohn\n\n')).toBe('John');
      // Ожидаем, что строка "John" останется после обрезки переносов строк
  });
});


// * Подсчёт суммы заказа
describe('getTotal', () => {
  test('Simple calculation', () => {
    const items = [{ price: 10, quantity: 10 }];
    expect(getTotal(items)).toBe(100);
     // Ожидаем, что сумма заказа составит 100 при цене 10 и количестве 10
  });

  test('Multiple items', () => {
    const items = [
      { price: 10, quantity: 1 },
      { price: 10, quantity: 9 }
    ];
    expect(getTotal(items)).toBe(100);
     // Ожидаем, что сумма заказа составит 100 при цене 10 и количестве 1 и 9
  });

  test('Discount example', () => {
    const items = [{ price: 10, quantity: 10 }];
    const discount = 10;
    expect(getTotal(items, discount)).toBe(90);
      // Ожидаем, что сумма заказа составит 90 при скидке 10% на цену 100
  });

  test('Error - invalid discount type', () => {
    const items = [{ price: 10, quantity: 10 }];
    expect(() => getTotal(items, 'invalid')).toThrowErrorMatchingInlineSnapshot(
      `"Скидка должна быть числом"`
    );
     // Ожидаем, что будет выброшена ошибка при некорректном типе скидки
  });

  test('Error - discount out of range', () => {
    const items = [{ price: 10, quantity: 10 }];
    expect(() => getTotal(items, -1)).toThrowErrorMatchingInlineSnapshot(
      `"Процент скидки должен быть от 0 до 99"`
    );
     // Ожидаем, что будет выброшена ошибка при отрицательной скидке
  });

  test('Parametrized test - different discounts', () => {
    const tests = [
      { discount: 0, expectedTotal: 100 },
      { discount: 10, expectedTotal: 90 },
      { discount: 50, expectedTotal: 50 }
    ];

    tests.forEach(({ discount, expectedTotal }) => {
      const items = [{ price: 10, quantity: 10 }];
      expect(getTotal(items, discount)).toBe(expectedTotal);
        // Ожидаем, что сумма заказа будет корректно рассчитана для разных значений скидок
    });
  });
});