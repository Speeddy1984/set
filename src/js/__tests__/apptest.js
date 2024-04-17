import Team from "../app"

test("add character", () => {
    const newCharaacter = new Team();
    expect(newCharaacter.add('Лучник')).toEqual(Set ['Лучник']);
  });

test("add double character", () => {
  const newCharaacter = new Team();
  newCharaacter.add('Лучник');
  expect(() => newCharaacter.add('Лучник')).toThrowError('Персонаж уже существует');
});

test("addAll some characters", () => {
  const newCharaacter = new Team();
  expect(newCharaacter.addAll('Лучник', 'Маг', 'Лучник', 'Демон')).toEqual(Set ['Лучник', 'Маг', 'Демон']);
});

test("characters toArray", () => {
  const newCharaacter = new Team();
  newCharaacter.addAll('Лучник', 'Маг', 'Лучник', 'Демон');
  expect(newCharaacter.toArray()).toEqual(['Лучник', 'Маг', 'Демон']);
});