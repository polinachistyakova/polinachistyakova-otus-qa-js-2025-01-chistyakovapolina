/**
 * Подсчитывает сумму числовых значений в объекте с баллами
 * 
 * @param {Object} scores - Объект, содержащий пары ключ-значение, где ключи - имена участников, а значения - их баллы
 * @returns {Number} Сумма всех числовых значений из переданного объекта
 * 
 * @example
 * const scores = {
 *   Anna: 10,
 *   Olga: 1,
 *   Ivan: 5
 * };
 * 
 * const result = getScore(scores); // вернет 16
 * 
 * @throws {TypeError} Если scores не является объектом
 * 
 * @description
 * Функция принимает объект с числовыми значениями и возвращает их сумму.
 * Если объект пуст, возвращается 0.
 * 
 */

function getScore(scores) {
    let total = 0;
    for (let score of Object.values(scores)) {
    total += score;
    }
    return total;
    }
    
    const scores = {
    Anna: 70,
    Olga: 5,
    Ivan: 8
    };
    
    console.log(getScore(scores)); 