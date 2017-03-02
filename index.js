module.exports = function Grid(data, cols, rows) {

	grid.data = data
	grid.cols = cols
	grid.rows = rows

	return grid

	function grid(x, y, value) {
		if (x < 0 || y < 0 || x >= cols || y >= rows)
      return null
    if (arguments.length === 2)
      return data[y * cols + x]
		data[y * cols + x] = value
    return value
	}
}
