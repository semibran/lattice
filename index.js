exports.contains = function (space, point) {
  var dimensions = point.length
  for (var dimension = 0; dimension < dimensions; dimension++) {
    var axis = point[dimension]
    var size = space[dimension]
    if (axis < 0 || axis >= size) {
      return false
    }
  }
  return true
}

exports.flatten = function (space, point) {
  var dimensions = point.length
  var index = 0
  for (var dimension = 0; dimension < dimensions; dimension++) {
    var size = 1
    for (var i = 0; i < dimension; i++) {
      size *= space[i]
    }
    index += size * point[dimension]
  }
  return index
}

exports.project = function (space, index) {
  var point = new Array(dimensions)
  for (var dimension = 0; dimension < dimensions; dimension++) {
    var axis = index
    for (var i = 0; i < dimension; i++) {
      axis = (axis - point[i]) / space[i]
    }
    axis %= space[dimension]
    point[dimension] = axis
  }
  return point
}
