class Cat {
  constructor() {
    this._tiredness = 0;
    this._hunger = 0;
    this._loneliness = 0;
    this._happiness = 0;
  }
  increaseTiredness(value) {
    this._tiredness += value;
  }
  decreaseTiredness(value) {
    this._tiredness -= value;
  }
  increaseHunger(value) {
    this._hunger += value;
  }
  decreaseHunger(value) {
    this._hunger -= value;
  }
  increaseLoneliness(value) {
    this._hunger += value;
  }
  decreaseLoneliness(value) {
    this._loneliness -= value;
  }
  increaseHappiness(value) {
    this._happiness += value;
  }
  decreaseHappiness(value) {
    this._happiness -= value;
  }

  /** Cat actions */

  sleep(sleepValue, happyValue) {
    this.decreaseTiredness(sleepValue), this.increaseHappiness(happyValue);
  }

  eat(hungerValue, happyValue, tiredValue) {
    this.decreaseHunger(hungerValue),
      this.increaseHappiness(happyValue),
      this.increaseTiredness(tiredValue);
  }

  run() {
    this.increaseTiredness(50),
      this.increaseHappiness(20),
      this.increaseHunger(40);
  }

  printStatus() {
    if (this._tiredness > 10) {
      console.log("The cat is tired");
    } else {
      console.log("The cat is not tired");
    }
    if (this._happiness < 10) {
      console.log("The cat is sad");
    } else {
      console.log("The cat is happy");
    }
    if (this._hunger < 10) {
      console.log("The cat is full");
    } else {
      console.log("The cat is hungry");
    }
  }
}

const Kitty = new Cat();

Kitty.run();
Kitty.printStatus();
console.log(Kitty);
