const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (hero) => {
  return Math.ceil(Math.random() * (hero.strength - 15) + 15);
}

const warriorDamage = (hero) => {
  const maxDmg = hero.strength * hero.weaponDmg;
  const minDmg = hero.strength;
  return Math.ceil(Math.random() * (maxDmg - minDmg) + minDmg);
}

const mageStats = (hero) => {
  if (hero.mana < 15) {
    return {
      damage: 'Não possui mana suficiente',
      manaCost: 0,
    }
  }
  const maxDmg = hero.intelligence * 2;
  const minDmg = hero.intelligence;
  const dmg = Math.ceil(Math.random() * (maxDmg - minDmg) + minDmg);
  return {
    damage: dmg,
    manaCost: 15,
  }
}