import Character from '../Character';

describe('Character класс', () => {
  test('конструктор корректно создаёт объект', () => {
    const char = new Character('Robin', 'Bowman');
    expect(char.name).toBe('Robin');
    expect(char.type).toBe('Bowman');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
    expect(char.attack).toBe(25);
    expect(char.defence).toBe(25);
  });

  test('конструктор выбрасывает ошибку, если имя меньше 2 символов', () => {
    expect(() => new Character('R', 'Swordsman')).toThrow('Имя должно быть от 2 до 10 символов');
  });

  test('конструктор выбрасывает ошибку, если имя больше 10 символов', () => {
    expect(() => new Character('ОченьДлинноеИмя', 'Magician')).toThrow('Имя должно быть от 2 до 10 символов');
  });

  test('конструктор выбрасывает ошибку, если тип некорректный', () => {
    expect(() => new Character('Robin', 'UnknownType')).toThrow('Некорректный тип персонажа');
  });

  test('levelUp повышает уровень, характеристики и здоровье', () => {
    const char = new Character('Robin', 'Bowman');
    char.levelUp();
    expect(char.level).toBe(2);
    expect(char.attack).toBeCloseTo(30); // 25 * 1.2 = 30
    expect(char.defence).toBeCloseTo(30); // 25 * 1.2 = 30
    expect(char.health).toBe(100);
  });

  test('levelUp выбрасывает ошибку, если персонаж мёртв', () => {
    const char = new Character('Robin', 'Bowman');
    char.health = 0;
    expect(() => char.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  test('damage уменьшает здоровье с учётом защиты', () => {
    const char = new Character('Robin', 'Bowman');
    char.damage(50); // 50 * (1 - 0.25) = 37.5 урона
    expect(char.health).toBeCloseTo(62.5);
  });

  test('damage не уводит здоровье ниже 0', () => {
    const char = new Character('Robin', 'Bowman');
    char.health = 10;
    char.damage(1000); // Очень большой урон
    expect(char.health).toBe(0);
  });

  test('damage не срабатывает, если персонаж мёртв (health === 0)', () => {
    const char = new Character('Robin', 'Bowman');
    char.health = 0;
    char.damage(50);
    expect(char.health).toBe(0);
  });

  test('создание всех допустимых типов персонажей', () => {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    types.forEach((type) => {
      const char = new Character('Hero', type);
      expect(char.type).toBe(type);
    });
  });
});
