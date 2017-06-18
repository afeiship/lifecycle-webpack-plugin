'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = require('./const');

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//helpers:
function dasherize(inStr) {
  return inStr.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
}

var LifecycleWebpackPlugin = function () {
  function LifecycleWebpackPlugin(inOptions) {
    _classCallCheck(this, LifecycleWebpackPlugin);

    this.options = Object.assign(_const2.default, {
      debug: false
    }, inOptions);
  }

  _createClass(LifecycleWebpackPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      var keys = Object.keys(this.options);
      var debug = this.options.debug;
      keys.forEach(function (item) {
        if (debug) {
          console.log(dasherize(item), _this.options[item]);
        } else {
          var callback = _this.options[item];
          if (typeof callback === 'function') {
            compiler.plugin(dasherize(item), callback);
          }
        }
      });
    }
  }]);

  return LifecycleWebpackPlugin;
}();

exports.default = LifecycleWebpackPlugin;