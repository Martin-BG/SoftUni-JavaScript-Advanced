for (var i = 1; i <= 10; ++i) {
  setTimeout((() => {
    console.log(i);
  }), 0);
}

for (let i = 1; i <= 10; ++i) {
  setTimeout((() => {
    console.log(i);
  }), 0);
}
