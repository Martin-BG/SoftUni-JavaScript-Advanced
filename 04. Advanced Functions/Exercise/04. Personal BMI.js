function personalBmi(name, age, weight, height) {
  const BMI = Math.round(weight / (height * height / 10000));
  const status = BMI < 18.5 ? 'underweight' : BMI < 25 ? 'normal' : BMI < 30 ? 'overweight' : 'obese';
  const patient = {
    name,
    personalInfo: {
      age,
      weight,
      height
    },
    BMI,
    status
  };

  if (patient.status === 'obese') {
    patient.recommendation = 'admission required';
  }

  return patient;
}

console.log(personalBmi('Peter', 29, 75, 182));
console.log(personalBmi('Honey Boo Boo', 9, 57, 137));
