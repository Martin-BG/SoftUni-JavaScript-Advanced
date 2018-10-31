function keplersProblem(mean, ecc) {
  console.log(+approximate(mean, ecc, 0).toFixed(9));

  function approximate(E0, ecc, series) {
    if (Math.abs(mean - (E0 - ecc * Math.sign(E0))) < 1e-9 || series > 200) {
      return E0;
    }

    return approximate(E0 - (E0 - ecc * Math.sin(E0) - mean) / (1 - ecc * Math.cos(E0)), ecc, ++series);
  }
}

keplersProblem(1, 0); // 1
keplersProblem(0.25, 0.99); // 1.156077257
keplersProblem(3.1415926535, 0.75); // 3.141592654
keplersProblem(4.8, 0.2); // 4.601234265
