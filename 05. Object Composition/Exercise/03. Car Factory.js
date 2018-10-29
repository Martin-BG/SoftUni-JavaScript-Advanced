function carFactory(carProperties) {
  let engine;
  if (+carProperties.power <= 90) {
    engine = {power: 90, volume: 1800};
  } else if (+carProperties.power <= 120) {
    engine = {power: 120, volume: 2400};
  } else if (+carProperties.power <= 200) {
    engine = {power: 200, volume: 3500};
  }

  const wheelSize = +carProperties.wheelsize % 2 === 0 ? +carProperties.wheelsize - 1 : +carProperties.wheelsize;

  return {
    model: carProperties.model,
    engine,
    carriage: {
      type: carProperties.carriage,
      color: carProperties.color,
    },
    wheels: [wheelSize, wheelSize, wheelSize, wheelSize]
  };
}

console.log(carFactory({
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14
}));

console.log(carFactory({
  model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17
}));
