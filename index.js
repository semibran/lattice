module.exports = { contains, index, cells }

function contains (grid, x, y) {
	return x >= 0 && y >= 0 && x < grid.width && y < grid.height
}

function index (grid, x, y) {
	return y * grid.width + x
}

function cells (grid) {
	var width = grid.width
	var height = grid.height
	var cells = new Array(width * height)
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			cells[index(grid, x, y)] = { x, y }
		}
	}
	return cells
}
