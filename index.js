module.exports = Grid
Grid.get = get
Grid.set = set

function Grid(data, cols, rows) {
	return { data: data, cols: cols, rows: rows }
}

function get(grid, x, y) {
	if (contains(grid, x, y))
		return grid.data[y * grid.cols + x]
}

function set(grid, x, y, value) {
	if (contains(grid, x, y)) {
		grid.data[y * grid.cols + x] = value
		return value
	}
}

function contains(grid, x, y) {
	return x >= 0 && y >= 0 && x < grid.cols && y < grid.rows
}
