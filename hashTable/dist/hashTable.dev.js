"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var hashTable =
/*#__PURE__*/
function () {
  function hashTable(size) {
    _classCallCheck(this, hashTable);

    this.table = new Array(size);
    this.size = size;
  }

  _createClass(hashTable, [{
    key: "hash",
    value: function hash(key) {
      var total = 0;

      for (var i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }

      return total % this.size;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var index = this.hash(key);
      this.table[index] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      var index = this.hash(key);
      return this.table[index];
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var index = this.hash(key);
      this.table[index] = undefined;
    }
  }, {
    key: "display",
    value: function display() {
      for (var i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          console.log(i, this.table[i]);
        }
      }
    }
  }]);

  return hashTable;
}();

var table = new hashTable(50);
table.set('name', 'rilwan');
table.set('age', 22);
table.display();
console.log(table.get("name"));
table.remove("name");
console.log(table.get("name"));
table.set("mane", "shamis");