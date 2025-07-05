import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Character from '../Character';

describe('Классы персонажей', () => {
  test('Bowman создаётся корректно', () => {
    const unit = new Bowman('Robin');
    expect(unit).toEqual({
      name: 'Robin',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });

  test('Swordsman создаётся корректно', () => {
    const unit = new Swordsman('Arthas');
    expect(unit.attack).toBe(40);
    expect(unit.defence).toBe(10);
  });

  test('Magician создаётся корректно', () => {
    const unit = new Magician('Merlin');
    expect(unit.attack).toBe(10);
    expect(unit.defence).toBe(40);
  });

  test('Daemon создаётся корректно', () => {
    const unit = new Daemon('Diablo');
    expect(unit.attack).toBe(10);
    expect(unit.defence).toBe(40);
  });

  test('Undead создаётся корректно', () => {
    const unit = new Undead('Skull');
    expect(unit.attack).toBe(25);
    expect(unit.defence).toBe(25);
  });

  test('Zombie создаётся корректно', () => {
    const unit = new Zombie('Zed');
    expect(unit.attack).toBe(40);
    expect(unit.defence).toBe(10);
  });

  test('Имя короче 2 символов вызывает ошибку', () => {
    expect(() => new Bowman('A')).toThrow('Имя должно быть от 2 до 10 символов');
  });

  test('Имя длиннее 10 символов вызывает ошибку', () => {
    expect(() => new Bowman('ОченьДлинноеИмя')).toThrow('Имя должно быть от 2 до 10 символов');
  });

  test('levelUp работает корректно', () => {
    const unit = new Bowman('Robin');
    unit.levelUp();
    expect(unit.level).toBe(2);
    expect(unit.attack).toBeCloseTo(30); // 25 * 1.2
    expect(unit.defence).toBeCloseTo(30); // 25 * 1.2
    expect(unit.health).toBe(100);
  });

  test('levelUp выбрасывает ошибку, если персонаж мёртв', () => {
    const unit = new Bowman('Robin');
    unit.health = 0;
    expect(() => unit.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  test('damage уменьшает здоровье с учётом защиты', () => {
    const unit = new Bowman('Robin');
    unit.damage(40); // 40 * (1 - 0.25) = 30
    expect(unit.health).toBeCloseTo(70);
  });

  test('damage не уменьшает здоровье ниже 0', () => {
    const unit = new Bowman('Robin');
    unit.health = 10;
    unit.damage(1000);
    expect(unit.health).toBe(0);
  });

  test('damage не срабатывает, если здоровье 0', () => {
    const unit = new Bowman('Robin');
    unit.health = 0;
    unit.damage(40);
    expect(unit.health).toBe(0);
  });

  test('Character выбрасывает ошибку при неправильном имени напрямую', () => {
    expect(() => new Character('', 'Bowman')).toThrow('Имя должно быть от 2 до 10 символов');
  });
});
