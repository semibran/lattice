module.exports = function Grid(cols, rows) {

  var area = cols * rows
  var data = new Uint8ClampedArray(area)

  return {
    get: get, set: set,
    contains: contains,
    each: each,
    cols: cols,
    rows: rows,
    data: data
  }

  function get(x, y) {
    if (!contains(x, y))
      return null
    return data[y * cols + x]
  }

  function set(value) {
    return function set(x, y) {
      if (contains(x, y))
        data[y * cols + x] = value
      return set
    }
  }

  function contains(x, y) {
    return x >= 0 && y >= 0 && x < cols && y < rows
  }

  function each(callback) {
    for (var i = 0; i < area; i++) {
      var x = i % cols
      var y = (i - x) / cols
      var value = get(x, y)
      callback(value, x, y)
    }
  }
}
