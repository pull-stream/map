# pull-map [![stability][0]][1]
[![NPM version][2]][3] [![Downloads][4]][5] [![js-standard-style][6]][7]

> [].map for pull-streams

## Background

Pull-streams are arrays of data in time rather than space.

As with a [`[].map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), we may want to map a function over a stream.

## Usage

```js
var map = require('pull-map')
```

```js
pull(
  values([0, 1, 2, 3]),
  map(function (x) {
    return x * x
  }),
  log()
)
// 0
// 1
// 4
// 9
```

## API

```js
var map = require('pull-map')
```

### `map((data) => data)`

`map(fn)` returns a through stream that calls the given `fn` for each chunk of incoming data and outputs the return value, in the same order as before.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install pull-map
```

## See Also

- [`brycebaril/through2-map`](https://github.com/brycebaril/through2-map)
- [`Rx.Obsevable#map`](http://xgrommx.github.io/rx-book/content/observable/observable_instance_methods/map.html)

## License

[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/pull-map.svg?style=flat-square
[3]: https://npmjs.org/package/pull-map
[4]: http://img.shields.io/npm/dm/pull-map.svg?style=flat-square
[5]: https://npmjs.org/package/pull-map
[6]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[7]: https://github.com/feross/standard
