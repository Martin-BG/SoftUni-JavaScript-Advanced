function orderRectangles(input) {
  const createRect = (width, height) => {
    let rect = {
      width: width,
      height: height,
      area: function () {
        return rect.width * rect.height;
      },
      compareTo: function (other) {
        return other.area() - rect.area() || other.width - rect.width;
      }
    };

    return rect;
  };

  let rectangles = [];
  input.forEach(([width, height]) => rectangles.push(createRect(width, height)));

  rectangles.sort((a, b) => a.compareTo(b));
  return rectangles;
}

console.log(orderRectangles([[10, 5], [5, 12]]));

console.log(orderRectangles([[10, 5], [3, 20], [5, 12]]));
