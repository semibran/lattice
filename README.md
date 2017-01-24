# grid
> tiny lib for storing and modifying two-dimensional data

## Introduction

A common practice in tile-based games is the use of a two-dimensional array filled with objects to represent the game world.

```javascript
function World(width, height) {
  if (!height)
    height = width
  this.width = width
  this.height = height
  this.clear()
}

World.prototype.clear = function () {
  var data = this.data = []
  for (var y = this.height; y--;) {
    data[y] = []
    for (var x = this.width; x--;) {
      data[y][x] = new Tile(x, y, 'floor')
    }
  }
}
```

At first glance, such a system may look like a no-brainer to you. Getting and setting the value of  `world.data[y][x]` enables the access and modification of individual tiles. Pretty natural, right?

Don't get me wrong, due to its inherent simplicity and widespread use in beginner programming tutorials, I've actually used this kind of model countless times in the past. Recently, however, I've noticed that it's plagued by **two major flaws**:

### 1. It's slow
If you take a good look at the code example above, you'll find plenty of performance pitfalls: nested loops, unnecessary object creation (exactly 256 times!) and plenty of excessive array lookups, all of which are highly inefficient in the grand scheme of things.

### 2. It's error-prone
In a world map of this nature, the only way to access a map tile is via a sketchy double reference (triple, if you count the object reference) in the form `world.data[y][x]`.

Minor performance issues aside, what happens when you try to access a tile that is out of bounds?

```javascript
var world = new World(25)
var tile = world.data[12][25] // undefined (acceptable result)
tile = world.data[25][12] // Uncaught TypeError: Cannot read property '0' of undefined
```

Here's another limitation of this system: when you access a column of an invalid row, you get a nasty error.

Certainly there must be a better model to represent a game world that circumvents these issues?

## Enter `grid`
`grid` uses a single `Uint8ClampedArray` to represent all our data, effectively limiting our possible array values to whole numbers from 0-255. Instead of using tile objects for each cell, each integer points to a unique instance in an external `tiles` array detailing individual properties like `solid` and `opaque`.

```javascript
var FLOOR = { solid: false }
var BLOCK = { solid: true  }
var tiles = [ FLOOR, BLOCK ]
var world = Grid(25, 25)

var tile = tiles[world.get(12, 12)]

console.log(tile === FLOOR) // true
```

Not only does this method alleviate the creation of unnecessary tile objects, but it also supports the use of methods to access data. This makes it easy to filter out faulty results, preventing us from accessing nonexistent tiles.

That being said, let's jump into the specifics.

## Documentation

### Factory
```javascript
// NOTE: `Grid` is a factory, not a constructor.
//       This helps the source stay clean and concise.
var world = Grid(cols, rows)
```
Creates and returns a new `Grid` object with the specified dimensions.

### Methods
The methods below have been provided to abstract away most of the math and logic involved in manipulating grid data.

#### `get`
```javascript
grid.get(x, y) === grid.data[x * grid.cols + y]
```
Returns the `data` value at `(x, y)`.



If the provided cell is not in the grid, `null` is returned.

#### `set`
```javascript
grid.set(value)(x, y)
```
Sets coordinate `(x, y)` in `data` to `value`. No errors will be thrown if the user attempts to set an out-of-bounds coordinate pair.

`set` has been curried into a sequence of two functions, so it can be used in other ways as well:

```javascript
// Reusable version (ft. spreads)
var setWall = world.set(WALL)
setWall(...cell1)
setWall(...cell2)
setWall(...cell3)
```

Additionally, `set` also returns itself, allowing you to alter the values of multiple cells at once with ease.

```javascript
// Multiple positions
world.set(FLOOR)
  (...cell1)
  (...cell2)
  (...cell3)
```

#### `contains`
```javascript
grid.contains(x, y)
```
Determines if the provided cell is within the grid boundaries.

#### `each`
```javascript
grid.each(callback)
```
Iterates through each cell in the grid.

```javascript
world.each((value, x, y) => world.set(WALL)(x, y))
```

### Properties

#### `cols`
The amount of columns in (i.e. the width of) the grid, reflecting the value passed into the initial factory at instantiation.

#### `rows`
The amount of rows in the grid. Equivalent to the grid height.

#### `data`
A `Uint8ClampedArray` with a `length` of `cols * rows`. After instantiation, it will consist exclusively of zeros.

## License
MIT
