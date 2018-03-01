// Привязка клавиш
function initKeysBinding() {
    let keysBindingTable = [];
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

    return keysBindingTable;
}

// Привязка символов для IE9
function initAltKeysBinding() {
    let binding = {
        "`": "ё",
        "q": "й",
        "w": "ц",
        "e": "у",
        "r": "к",
        "t": "е",
        "y": "н",
        "u": "г",
        "i": "ш",
        "o": "щ",
        "p": "з",
        "[": "х",
        "]": "ъ",
        "a": "ф",
        "s": "ы",
        "d": "в",
        "f": "а",
        "g": "п",
        "h": "р",
        "j": "о",
        "k": "л",
        "l": "д",
        ";": "ж",
        "'": "э",
        "z": "я",
        "x": "ч",
        "c": "с",
        "v": "м",
        "b": "и",
        "n": "т",
        "m": "ь",
        ",": "б",
        ".": "ю",

        "~": "Ё",
        "Q": "Й",
        "W": "Ц",
        "E": "У",
        "R": "К",
        "T": "Е",
        "Y": "Н",
        "U": "Г",
        "I": "Ш",
        "O": "Щ",
        "P": "З",
        "{": "Х",
        "}": "Ъ",
        "A": "Ф",
        "S": "Ы",
        "D": "В",
        "F": "А",
        "G": "П",
        "H": "Р",
        "J": "О",
        "K": "Л",
        "L": "Д",
        ":": "Ж",
        '"': "Э",
        "Z": "Я",
        "X": "Ч",
        "C": "С",
        "V": "М",
        "B": "И",
        "N": "Т",
        "M": "Ь",
        "<": "Б",
        ">": "Ю",

        "1": "!",
        "!": "!",
        "2": '"',
        "@": '"',
        "3": "№",
        "#": "№",
        "4": ";",
        "$": ";",
        "5": "%",
        "%": "%",
        "6": ":",
        "^": ":",
        "7": "?",
        "&": "?",
        "8": "*",
        "*": "*",
        "9": "(",
        "(": "(",
        "0": ")",
        ")": ")",
        "-": "-",
        "_": "_",
        "=": "=",
        "+": "+",
        "\\": "/",
        "|": "\\",

        "/": ".",
        "?": ",",
        " ": " ",
        "Spacebar": " "
    };

    
  
    

    

    // "": "",
    // "": "",
    // "": "",

    return binding;
}