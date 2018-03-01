const rusKeyboard = (function() {
    const field = document.getElementById("textfield");
    // список кнопок управления для firefox
    const notIgnoreKeys = [
        "Backspace",
        "Delete",
        "ArrowRight",
        "ArrowLeft"
    ];
    let keysBindingTable = [];
    let altKeysBindingTable;

    function _init() {
        altKeysBindingTable = initAltKeysBinding();
        console.log(altKeysBindingTable);

        field.addEventListener("keypress", _listerner);
        _initKeysBinding();
    }

    function _listerner(e) {
        if (e.code) {
            _keysEnter(e);
        }
        else if (e.locale) {
            _altKeysEnter(e);
        }

        console.log(e);
        console.log("locale - " + e.locale);
        console.log("key - " + e.key);
        console.log("keyCode - " + e.keyCode);
        console.log("charCode - " + e.charCode);
        console.log("shiftKey - " + e.shiftKey);
        console.log("code - " + e.code);
    }

    // function _isLetter(code) {
    //     if ((code >= 97 && code <= 122) ||
    //         (code >= 65 && code <= 90)) {
    //             return true;
    //         }
    //         else {
    //             return false;
    //         }
    // }

    function _keysEnter(e) {
        let upperCase;

        // проверка для firefox
        for (let i = 0; i < notIgnoreKeys.length; i++) {
            if (e.code ==  notIgnoreKeys[i]) {
                return;
            }
        }       

        e.preventDefault();

        upperCase = _capsLockIsActive(_getKeyCode(e), e.shiftKey) || e.shiftKey;

        for (let i = 0; i < keysBindingTable.length; i++) {
            if (keysBindingTable[i].key == e.code) {
                field.value += keysBindingTable[i][upperCase.toString()];
            }
        } 
    }

    // Альтернативная функция для IE9
    function _altKeysEnter(e) {
        if (_isCyrillicLetter(e)) {
            return;
        }

        e.preventDefault();

        for(let item in altKeysBindingTable) {
            if (item == e.key) {
                field.value += altKeysBindingTable[item];
            }
        } 
    }

    function _isCyrillicLetter(e) {       
        for(let item in altKeysBindingTable) {
            if (altKeysBindingTable[item] == e.key && e.locale == "ru-RU") {
                return true;
            }
        } 
        return false;
    }

    function _capsLockIsActive(key, shift) {
        if (((key >= 65 && key <= 90) || (key >= 1040 && key <= 1071) || (key == 1025)) &&
            !shift) {
                return true;
            }
            else {
                return false;
            }

    }

    function _initKeysBinding() {
        let binding = [];
        let nums = [];

        binding["KeyQ"] = "й";
        binding["KeyW"] = "ц";
        binding["KeyE"] = "у";
        binding["KeyR"] = "к";
        binding["KeyT"] = "е";
        binding["KeyY"] = "н";
        binding["KeyU"] = "г";
        binding["KeyI"] = "ш";
        binding["KeyO"] = "щ";
        binding["KeyP"] = "з";
        binding["BracketLeft"] = "х";
        binding["BracketRight"] = "ъ";
        binding["KeyA"] = "ф";
        binding["KeyS"] = "ы";
        binding["KeyD"] = "в";
        binding["KeyF"] = "а";
        binding["KeyG"] = "п";
        binding["KeyH"] = "р";
        binding["KeyJ"] = "о";
        binding["KeyK"] = "л";
        binding["KeyL"] = "д";
        binding["Semicolon"] = "ж";
        binding["Quote"] = "э";
        binding["KeyZ"] = "я";
        binding["KeyX"] = "ч";
        binding["KeyC"] = "с";
        binding["KeyV"] = "м";
        binding["KeyB"] = "и";
        binding["KeyN"] = "т";
        binding["KeyM"] = "ь";
        binding["Comma"] = "б";
        binding["Period"] = "ю";

        for (let item in binding) {
            keysBindingTable.push(
                {
                    key: item,
                    "false": binding[item],
                    "true": String.fromCharCode(binding[item].charCodeAt() - 32)
                }
            );
        }

        nums["Digit1"] = "!";
        nums["Digit2"] = '"';
        nums["Digit3"] = "№";
        nums["Digit4"] = ";";
        nums["Digit5"] = "%";
        nums["Digit6"] = ":";
        nums["Digit7"] = "?";
        nums["Digit8"] = "*";
        nums["Digit9"] = "(";
        nums["Digit0"] = ")";

        for (let item in nums) {
            keysBindingTable.push(
                {
                    key: item,
                    "false": nums[item],
                    "true": nums[item]
                }
            );
        }

        keysBindingTable.push(
            {
                key: "Backquote",
                "false": "ё",
                "true": "Ё"
            }
        );   

        keysBindingTable.push(
            {
                key: "Slash",
                "false": ".",
                "true": ","
            }
        );

        keysBindingTable.push(
            {
                key: "Equal",
                "false": "=",
                "true": "+"
            }
        );

        keysBindingTable.push(
            {
                key: "Minus",
                "false": "-",
                "true": "_"
            }
        );

        keysBindingTable.push(
            {
                key: "Backslash",
                "false": "/",
                "true": "\\"
            }
        );

        keysBindingTable.push(
            {
                key: "Space",
                "false": " ",
                "true": " "
            }
        );

        console.log(keysBindingTable);
    }

    // возвращает код нажатой клавиши
    function _getKeyCode(e) {
        if (e.keyCode) {
            return e.keyCode;
        }
        else {
            return e.charCode;
        }
    }

    return {
        init: _init
    };
})();

rusKeyboard.init();