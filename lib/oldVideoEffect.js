function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OldVideoEffect = /*#__PURE__*/function () {
  function OldVideoEffect() {
    _classCallCheck(this, OldVideoEffect);

    console.log('start');
  }

  _createClass(OldVideoEffect, [{
    key: "doing",
    value: function doing() {
      console.log('doing');
    }
  }, {
    key: "remove",
    value: function remove() {
      console.log('asdf');
    }
  }]);

  return OldVideoEffect;
}();

export default OldVideoEffect;