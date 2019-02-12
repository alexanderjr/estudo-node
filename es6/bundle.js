"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/****************** PARTE 1 ******************/
var Automovel =
/*#__PURE__*/
function () {
  function Automovel() {
    _classCallCheck(this, Automovel);

    this.quilometragem = 0;
  }

  _createClass(Automovel, [{
    key: "acelerar",
    value: function acelerar() {
      console.log("Acelerando");
    }
  }, {
    key: "frear",
    value: function frear() {
      console.log("Freando");
    }
  }, {
    key: "re",
    value: function re() {
      console.log("Ré");
    }
  }]);

  return Automovel;
}();

var Moto =
/*#__PURE__*/
function (_Automovel) {
  _inherits(Moto, _Automovel);

  function Moto() {
    _classCallCheck(this, Moto);

    return _possibleConstructorReturn(this, _getPrototypeOf(Moto).call(this));
  }

  _createClass(Moto, [{
    key: "re",
    value: function re() {
      console.log("Não pode andar de ré");
    }
  }]);

  return Moto;
}(Automovel);

var Carro =
/*#__PURE__*/
function (_Automovel2) {
  _inherits(Carro, _Automovel2);

  function Carro() {
    _classCallCheck(this, Carro);

    return _possibleConstructorReturn(this, _getPrototypeOf(Carro).apply(this, arguments));
  }

  return Carro;
}(Automovel);

console.log("Moto");
var moto = new Moto();
moto.acelerar();
moto.frear();
moto.re();
console.log("\nCarro");
var carro = new Carro();
carro.acelerar();
carro.frear();
carro.re();

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "somar",
    value: function somar(a, b) {
      console.log(a + b);
    }
  }]);

  return Matematica;
}();
/****************** PARTE 2 ******************/


console.log("\n");
Matematica.somar(1, 1);
console.log("\nMutação de valor na const");
var usuario = {
  nome: 'Alexander'
};
usuario.nome = "Alex";
console.log(usuario.nome);
/****************** PARTE 3, 4 e 5 ******************/

var arr = [1, 3, 4, 5, 6, 7];
var newArr = arr.map(function (item, index) {
  return item * 2;
});
console.log(arr);
console.log(newArr);
var somaTotal = arr.reduce(function (total, next) {
  return total + next;
});
console.log(somaTotal);
var pares = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(pares);
var buscar = arr.find(function (item) {
  return item === 4;
});
console.log(buscar);

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
}

console.log(soma(1));
/****************** PARTE 6 ******************/

var pessoa = {
  nome: "Alexander",
  idade: 10,
  endereco: {
    cidade: "São Vicente",
    estado: "SP"
  }
};
var nome = pessoa.nome,
    idade = pessoa.idade,
    cidade = pessoa.endereco.cidade;
console.log(cidade);

function exibirNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

exibirNome(pessoa);
/****************** PARTE 7 ******************/
//REST

var animal = {
  tipo: "Mamifero",
  apelido: "Cão",
  qt_patas: 4
};

var apelido = animal.apelido,
    resto = _objectWithoutProperties(animal, ["apelido"]);

console.log(apelido);
console.log(resto);

function quadrado() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  var quadrado = params.map(function (item) {
    return item * 2;
  });
  console.log(quadrado);
}

console.log(quadrado(10, 5, 2)); //SPREAD

var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);

var usuario2 = _objectSpread({}, pessoa, {
  nome: "Alexander Junior"
});

console.log(usuario2);
/****************** PARTE 8 e 9 ******************/

console.log("Meu nome \xE9 ".concat(pessoa.nome));
var pessoa2 = {
  nome: nome,
  sobrenome: "Junior"
};
console.log(pessoa2);
