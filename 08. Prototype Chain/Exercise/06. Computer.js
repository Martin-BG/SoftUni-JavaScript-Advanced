function computer() {
  class Component {
    constructor(manufacturer) {
      if (new.target === Component) {
        throw new Error('Cannot make an instance of abstract class Component');
      }
      this.manufacturer = manufacturer;
    }
  }

  class Keyboard extends Component {
    constructor(manufacturer, responseTime) {
      super(manufacturer);
      this.responseTime = responseTime;
    }
  }

  class Monitor extends Component {
    constructor(manufacturer, width, height) {
      super(manufacturer);
      this.width = width;
      this.height = height;
    }
  }

  class Battery extends Component {
    constructor(manufacturer, expectedLife) {
      super(manufacturer);
      this.expectedLife = expectedLife;
    }
  }

  class Computer extends Component {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target === Computer) {
        throw new Error('Cannot make an instance of abstract class Computer');
      }
      super(manufacturer);
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }
  }

  class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = weight;
      this.color = color;
      this.battery = battery;
    }

    get battery() {
      return this._battery;
    }

    set battery(newBattery) {
      if (!(newBattery instanceof Battery)) {
        throw new TypeError('not a valid battery');
      }
      this._battery = newBattery;
    }
  }

  class Desktop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.keyboard = keyboard;
      this.monitor = monitor;
    }

    get keyboard() {
      return this._keyboard;
    }

    set keyboard(newKeyboard) {
      if (!(newKeyboard instanceof Keyboard)) {
        throw new TypeError('Not a valid keyboard');
      }
      this._keyboard = newKeyboard;
    }

    get monitor() {
      return this._monitor;
    }

    set monitor(newMonitor) {
      if (!(newMonitor instanceof Monitor)) {
        throw new TypeError('Not a valid monitor');
      }
      this._monitor = newMonitor;
    }
  }

  return {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop,
  };
}
