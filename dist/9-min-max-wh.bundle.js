webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _extends = __webpack_require__(10)['default'];

	var React = __webpack_require__(7);
	var PureRenderMixin = __webpack_require__(9);
	var _ = __webpack_require__(21);
	var ReactGridLayout = __webpack_require__(13);

	var MinMaxLayout = React.createClass({
	  displayName: 'MinMaxLayout',

	  mixins: [PureRenderMixin],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      isDraggable: true,
	      isResizable: true,
	      items: 20,
	      rowHeight: 30,
	      cols: 12 };
	  },

	  getInitialState: function getInitialState() {
	    return {};
	  },

	  generateDOM: function generateDOM() {
	    // Generate items with properties from the layout, rather than pass the layout directly
	    var layout = this.generateLayout();
	    return _.map(layout, function (l) {
	      var mins = [l.minW, l.minH],
	          maxes = [l.maxW, l.maxH];
	      return React.createElement(
	        'div',
	        { key: l.i, _grid: l },
	        React.createElement(
	          'span',
	          { className: 'text' },
	          l.i
	        ),
	        React.createElement(
	          'div',
	          { className: 'minMax' },
	          'min:' + mins + ' - max:' + maxes
	        )
	      );
	    });
	  },

	  generateLayout: function generateLayout() {
	    var p = this.props;
	    return _.map(new Array(p.items), function (item, i) {
	      var minW = _.random(1, 6),
	          minH = _.random(1, 6);
	      var maxW = _.random(minW, 6),
	          maxH = _.random(minH, 6);
	      var w = _.random(minW, maxW);
	      var y = _.random(minH, maxH);
	      return {
	        x: i * 2 % 12, y: Math.floor(i / 6) * y, w: w, h: y, i: i,
	        minW: minW, maxW: maxW, minH: minH, maxH: maxH
	      };
	    });
	  },

	  onLayoutChange: function onLayoutChange(layout) {
	    this.props.onLayoutChange(layout);
	  },

	  render: function render() {
	    return React.createElement(
	      ReactGridLayout,
	      _extends({ onLayoutChange: this.onLayoutChange
	      }, this.props),
	      this.generateDOM()
	    );
	  }
	});

	module.exports = MinMaxLayout;

	if (__webpack_require__.c[0] === module) {
	  __webpack_require__(14)(module.exports);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }
]);