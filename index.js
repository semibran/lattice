module.exports = function Grid(data, cols, rows) {

	grid.data = data
	grid.cols = cols
	grid.rows = rows

	return grid

	function grid(x, y, value) {
		if (x < 0 || y < 0 || x >= grid.cols || y >= grid.rows)
      return null
    if (arguments.length === 2)
      return grid.data[y * grid.cols + x]
		grid.data[y * grid.cols + x] = value
    return value
	}
}
