"use strict";

var rusKeyboard = function () {
    var field = void 0;
    var keysBindingTable = void 0; // таблица привязки клавиш
    var altKeysBindingTable = void 0; // таблица привязки для IE9

    // список кнопок управления для firefox
    var notIgnoreKeys = ["Backspace", "Delete", "ArrowRight", "ArrowLeft"];

    function _init(id) {
        field = document.getElementById(id);
        keysBindingTable = initKeysBinding();
        altKeysBindingTable = initAltKeysBinding();

        field.addEventListener("keypress", _listerner);
    }

    function _listerner(e) {
        if (e.code) {
            _keysEnter(e);
        } else if (e.locale) {
            _altKeysEnter(e);
        }

        // console.log(e);
        // console.log("locale - " + e.locale);
        // console.log("key - " + e.key);
        // console.log("keyCode - " + e.keyCode);
        // console.log("charCode - " + e.charCode);
        // console.log("shiftKey - " + e.shiftKey);
        // console.log("code - " + e.code);
    }

    function _keysEnter(e) {
        var upperCase = void 0;

        // проверка для firefox
        for (var i = 0; i < notIgnoreKeys.length; i++) {
            if (e.code == notIgnoreKeys[i]) {
                return;
            }
        }

        e.preventDefault();

        // либо зажат caps либо shift
        upperCase = _capsLockIsActive(_getKeyCode(e), e.shiftKey) || e.shiftKey;

        for (var _i = 0; _i < keysBindingTable.length; _i++) {
            if (keysBindingTable[_i].key == e.code) {
                field.value += keysBindingTable[_i][upperCase.toString()];
            }
        }
    }

    // Альтернативная функция для IE9
    function _altKeysEnter(e) {
        if (_isCyrillicLetter(e)) {
            return;
        }

        e.preventDefault();

        for (var item in altKeysBindingTable) {
            if (item == e.key) {
                field.value += altKeysBindingTable[item];
            }
        }
    }

    function _isCyrillicLetter(e) {
        for (var item in altKeysBindingTable) {
            if (altKeysBindingTable[item] == e.key && e.locale == "ru-RU") {
                return true;
            }
        }
        return false;
    }

    function _capsLockIsActive(key, shift) {
        if ((key >= 65 && key <= 90 || key >= 1040 && key <= 1071 || key == 1025) && !shift) {
            return true;
        } else {
            return false;
        }
    }

    // возвращает код нажатой клавиши
    function _getKeyCode(e) {
        if (e.keyCode) {
            return e.keyCode;
        } else {
            return e.charCode;
        }
    }

    return {
        init: _init
    };
}();

rusKeyboard.init("textfield");