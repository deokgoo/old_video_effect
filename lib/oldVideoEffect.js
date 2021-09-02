function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NOISE_IMG = 'https://deokgoo.github.io/old_video_effect/img/noise.jpg';
var SPACE_SIZE = 5;

var OldVideoEffect = /*#__PURE__*/function () {
  function OldVideoEffect(target, imgUrl, size) {
    _classCallCheck(this, OldVideoEffect);

    this._target = target;
    if (size) this._size = size;
    this.reSize();
    this.createNoise();
    this.defineImage(imgUrl);
    this.filter('black');
    this.render();
    this.animationRun();
  }

  _createClass(OldVideoEffect, [{
    key: "createNoise",
    value: function createNoise() {
      var noise = document.createElement('div');
      noise.classList.add('noise');
      noise.style.backgroundImage = "url(".concat(NOISE_IMG, ")");
      noise.style.width = "calc(".concat(this._size.width, "px*2)");
      noise.style.height = "calc(".concat(this._size.height, "px*2)");
      noise.style.position = 'absolute';
      noise.style.left = "calc(-".concat(this._size.width, "px/2)");
      noise.style.top = "calc(-".concat(this._size.height, "px/2)");
      noise.style.animation = 'noiseAnimation 1s steps(1) infinite';
      noise.style.zIndex = '10';
      noise.style.opacity = '0.3';
      this._noise = noise;
    }
  }, {
    key: "reSize",
    value: function reSize() {
      this._target.style.position = 'relative';
      this._target.style.width = "".concat(this._size.width, "px");
      this._target.style.height = "".concat(this._size.height, "px");
      this._target.style.overflow = 'hidden';
    }
  }, {
    key: "animationRun",
    value: function animationRun() {
      var _this = this;

      setInterval(function () {
        _this._imgLWrapper.classList.toggle('use-moveAnimation');

        _this._imgRWrapper.classList.toggle('use-moveAnimation');

        if (_this._imgRWrapper.classList.contains('use-moveAnimation')) {
          _this._imgRWrapper.style.zIndex = '1';
          _this._imgLWrapper.style.zIndex = '0';
        } else {
          _this._imgRWrapper.style.zIndex = '0';
          _this._imgLWrapper.style.zIndex = '1';
        }
      }, 6000);
    }
  }, {
    key: "defineImage",
    value: function defineImage(imgUrl) {
      this._imgL = document.createElement('img');
      this._imgL.src = imgUrl;
      this._imgL.style.width = "calc(".concat(this._size.width, "px)");
      this._imgL.style.height = "calc(".concat(this._size.height, "px)");
      this._imgR = document.createElement('img');
      this._imgR.src = imgUrl;
      this._imgR.style.width = "calc(".concat(this._size.width, "px+").concat(SPACE_SIZE, "px)");
      this._imgR.style.height = "calc(".concat(this._size.height, "px)");
      this._imgLWrapper = document.createElement('div');

      this._imgLWrapper.classList.add('wrapper-left');

      this._imgRWrapper = document.createElement('div');

      this._imgRWrapper.classList.add('wrapper-right');

      this._imgLWrapper.style.overflow = 'hidden';
      this._imgLWrapper.style.width = "calc(".concat(this._size.width, "px+").concat(SPACE_SIZE, "px)");
      this._imgLWrapper.style.paddingLeft = "".concat(SPACE_SIZE, "px");
      this._imgLWrapper.style.height = "".concat(this._size.height, "px");
      this._imgLWrapper.style.position = 'absolute';
      this._imgRWrapper.style.overflow = 'hidden';
      this._imgRWrapper.style.width = "".concat(this._size.width, "px");
      this._imgRWrapper.style.position = 'absolute';

      this._imgRWrapper.classList.add('use-moveAnimation');
    }
  }, {
    key: "render",
    value: function render() {
      this._target.append(this._noise);

      this._imgLWrapper.appendChild(this._imgL);

      this._imgRWrapper.appendChild(this._imgR);

      this._target.append(this._imgLWrapper);

      this._target.append(this._imgRWrapper);
    }
  }, {
    key: "filter",
    value: function filter(kind) {
      switch (kind) {
        case 'black':
          {
            this._imgL.style.filter = "grayscale(100%)";
            this._imgR.style.filter = "grayscale(100%)";
            break;
          }

        case 'white':
          {
            break;
          }

        default:
          {}
      }
    }
  }], [{
    key: "createImg",
    value: function createImg(_ref) {
      var target = _ref.target,
          size = _ref.size,
          imgUrl = _ref.imgUrl;
      var oldVideoEffect = new OldVideoEffect(target, imgUrl, size);
      return oldVideoEffect;
    }
  }]);

  return OldVideoEffect;
}();

export default OldVideoEffect;