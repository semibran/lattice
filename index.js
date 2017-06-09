exports.contains = contains
exports.project = project
exports.cells = cells

function contains(grid, cell) {
  return cell.x >= 0 && cell.y >= 0 && cell.x < grid.width && cell.y < grid.height
}

function project(grid, cell) {
  if (contains(grid, cell)) {
    return cell.y * grid.width + cell.x
  }
}

function cells(grid) {
  var width = grid.width
  var height = grid.height
  var cells = new Array(width * height)
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var cell = { x: x, y: y }
      cells[project(grid, cell)] = cell
    }
  }
  return cells
}
