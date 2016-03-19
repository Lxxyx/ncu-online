'use strict';

require('babel-polyfill');

var _login = require('./login');

var _iconvLite = require('iconv-lite');

var _iconvLite2 = _interopRequireDefault(_iconvLite);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var login = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var options, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _login.getLogin)();

          case 2:
            options = _context.sent;

            options.uri = 'http://218.64.56.27/eol/welcomepage/student/index.jsp';
            _context.t0 = _iconvLite2.default;
            _context.next = 7;
            return (0, _requestPromise2.default)(options);

          case 7:
            _context.t1 = _context.sent;
            data = _context.t0.decode.call(_context.t0, _context.t1, 'gb2312');

            console.log(data);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function login() {
    return ref.apply(this, arguments);
  };
}();

login();