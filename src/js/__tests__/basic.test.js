import message from '../basic';

test('Функция должна возвращать сообщение', () => {
  const result = message();

  expect(result).toBe("It's work!");
});
