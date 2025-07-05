export default class Character {
    constructor(name, type) {
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Имя должно быть от 2 до 10 символов');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
    }
  
    levelUp() {
      if (this.health === 0) {
        throw new Error('Нельзя повысить уровень умершего персонажа');
      }
      this.level += 1;
      this.attack = +(this.attack * 1.2).toFixed(2);
      this.defence = +(this.defence * 1.2).toFixed(2);
      this.health = 100;
    }
  
    damage(points) {
      if (this.health === 0) return;
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
  