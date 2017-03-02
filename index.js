module.exports = Grid

function Grid(cols, rows, data) {
	return { cols: cols, rows: rows, data: data || Array(cols * rows) }
}

Grid.get = function (grid, x, y) {
	if (!Grid.inside(grid, x, y))
		return null
	return grid.data[y * grid.cols + x]
}

Grid.set = function (grid, x, y, value) {
	if (Grid.inside(grid, x, y))
		grid.data[y * grid.cols + x] = value
}

Grid.inside = function (grid, x, y) {
	return x >= 0 && y >= 0 && x < grid.cols && y < grid.rows
}
