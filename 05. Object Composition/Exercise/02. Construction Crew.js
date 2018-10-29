function crewProcessor(worker) {
  const newWorker = JSON.parse(JSON.stringify(worker));
  if (newWorker.handsShaking) {
    newWorker.bloodAlcoholLevel += newWorker.experience * newWorker.weight * 0.1;
    newWorker.handsShaking = false;
  }
  return newWorker;
}

console.log(crewProcessor({
  weight: 80,
  experience: 1,
  bloodAlcoholLevel: 0,
  handsShaking: true
}));
console.log(crewProcessor({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
  }
));
console.log(crewProcessor({
    weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false
  }
));
