const rusKeyboard = (function() {
    const field = document.getElementById("textfield");
    let keysBindingTable = [];

    function _init() {
        field.addEventListener("keypress", _listerner);
        _initKeysBinding();
    }

    function _listerner(e) {

        if (e.code) {
            _keysEnter(e);
        }

        console.log(e);
        console.log("locale - " + e.locale);
        console.log("key - " + e.key);
        console.log("keyCode - " + e.keyCode);
        console.log("charCode - " + e.charCode);
        console.log("shiftKey - " + e.shiftKey);
        console.log("code - " + e.code);

        // for (let i = 1072; i <= 1103; i++) {
        //     console.log(String.fromCharCode(i));
        // }
    }

    function _isLetter(code) {
        if ((code >= 97 && code <= 122) ||
            (code >= 65 && code <= 90)) {
                return true;
            }
            else {
                return false;
            }
    }

    function _keysEnter(e) {
        e.preventDefault();

        for (let i = 0; i < keysBindingTable.length; i++) {
            if (keysBindingTable[i].key == e.code) {
                // console.log(keysBindingTable[i][e.shiftKey.toString()]);
                field.value += keysBindingTable[i][e.shiftKey.toString()];
            }
        } 
    }

    function _initKeysBinding() {
        // console.log(keysBindingTable);
        let binding = [];

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
            // console.log(item + " - " + binding[item]);
            keysBindingTable.push(
                {
                    key: item,
                    "false": binding[item],
                    "true": String.fromCharCode(binding[item].charCodeAt() - 32)
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
                key: "Digit2",
                "false": '"',
                "true": '"'
            }
        );

        keysBindingTable.push(
            {
                key: "Digit3",
                "false": "№",
                "true": "№"
            }
        );

        keysBindingTable.push(
            {
                key: "Digit4",
                "false": ";",
                "true": ";"
            }
        );

        keysBindingTable.push(
            {
                key: "Digit7",
                "false": "?",
                "true": "?"
            }
        );

        keysBindingTable.push(
            {
                key: "Backslash",
                "false": "/",
                "true": "/"
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
        // binding.forEach(function(item, i) {
        //     console.log(item + " - " + i);

        // });

        // keysBindingTable["Slash"][false] = ".";

        // keysBindingTable["Key"][false] = "";
        // keysBindingTable["Key"][false] = "";
        // keysBindingTable["Key"][false] = "";
        // keysBindingTable["Key"][false] = "";
        // keysBindingTable["Key"][false] = "";
        // keysBindingTable["Key"][false] = "";
        // keysBindingTable["Key"][false] = "";
      
        
    }

    // возвращает код нажатой клавиши
    function getKeyCode(e) {
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