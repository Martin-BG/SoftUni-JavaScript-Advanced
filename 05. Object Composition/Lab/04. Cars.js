function processCommands(commands) {
  let map = new Map();
  const cmdExecutor = {
    create: function ([objName, inherits, parent]) {
      parent = parent ? map.get(parent) : null;
      let newObj = Object.create(parent);
      map.set(objName, newObj);
      return newObj;
    },
    set: function ([objName, key, value]) {
      let obj = map.get(objName);
      obj[key] = value;
    },
    print: function ([objName]) {
      let obj = map.get(objName), objects = [];
      for (let key in obj) {
        objects.push(`${key}:${obj[key]}`);
      }
      console.log(objects.join(', '));
    }
  };

  for (let command of commands) {
    let commandParameters = command.split(' ');
    let action = commandParameters.shift();
    cmdExecutor[action](commandParameters);
  }
}

processCommands([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2',
]);

function objectInheritance(input) {
  const solve = (() => {
    let cars = new Map();

    const create = (name, prop, prototype) => {
      cars.set(name, (prototype === undefined) ? {} : Object.create(cars.get(prototype)));
    };

    const set = (name, prop, value) => {
      cars.get(name)[prop] = value;
    };

    const print = (name) => {
      let arr = [];
      for (let c in cars.get(name)) {
        arr.push(c + ':' + cars.get(name)[c]);
      }
      console.log(arr.join(', '));
    };

    return {
      create,
      set,
      print,
    };
  })();

  input.forEach((line) => {
    let tokens = line.split(/\s+/);
    let command = tokens.shift();
    solve[command](...tokens);
  });
}

objectInheritance([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2',
]);
