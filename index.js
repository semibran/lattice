module.exports = Grid
Grid.get = get
Grid.set = set
Grid.inside = inside

function Grid(cols, rows, data) {
	return { cols: cols, rows: rows, data: data || Array(cols * rows) }
}

function get(grid, x, y) {
	var cols = grid.cols
	var data = grid.data
	var inside = Grid.inside(grid)
	return function at(x, y) {
		if (!inside(x, y))
			return null
		return data[y * cols + x]
	}
}

function set(grid) {
	var cols = grid.cols
	var data = grid.data
	var inside = Grid.inside(grid)
	return function at(x, y) {
		return function to(value) {
			if (inside(x, y))
				data[y * cols + x] = value
			return at
		}
	}
}

function inside(grid) {
	var cols = grid.cols
	var rows = grid.rows
	return function at(x, y) {
		return x >= 0 && y >= 0 && x < cols && y < rows
	}
}
