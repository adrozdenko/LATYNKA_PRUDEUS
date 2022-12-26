function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $fee39a34470b7d1f$exports = {};
/* global module */ "use strict";
/**
 * Generate a transliteration function from a given transliteration
 * table object.
 *
 * @param [Object] table
 * @return [Function] function that transliterates its input
 */ $fee39a34470b7d1f$exports = function(table) {
    var keys, specialCases, singleLetter, searchPattern, lookupTable, i = 0;
    // If no transliteration table is given, return a function that will
    // return the input.
    if (!table) return function(subject) {
        return subject;
    };
    // Function used by the resulting replace function
    lookupTable = function(input) {
        return input in table ? table[input] : input;
    };
    // Fetch and sort the keys in the translitteration table object, to
    // ensure the longest keys in the table is first in the array. Then
    // it will find the position of the first one-letter index and split
    // the keys into single letter indexes and longer 'specialCases.'
    keys = Object.keys(table).sort(function(a, b) {
        return b.length - a.length;
    });
    for(; keys[i]; i += 1){
        if (keys[i].length === 1) break; // first one-letter index has been found, break out
    }
    specialCases = keys.slice(0, i).join("|");
    singleLetter = keys.slice(i).join("");
    keys = undefined; // reset keys
    // Compile a regular expression using the keys found in the given
    // translitteration object.
    //
    // specialCases are joined together with a pipe; `|`
    // singleLetters joined together and wrapped in square brackets so
    // that the resulting regular expressing have the following format:
    //
    //     /aa|bb|cc|[abc]/g
    //
    // This should create a working regular expression that will look
    // for every key in the transliteration table.
    searchPattern = new RegExp([
        specialCases,
        singleLetter ? "[" + singleLetter + "]" : ""
    ].join(singleLetter && specialCases ? "|" : ""), "g");
    /**
     * Search for occurrences of entries in the translitteration table
     * and replace these with their corresponding values.
     *
     * @param [String] subject to transliterate.
     * @return [String] transliterated string
     */ return function(subject) {
        // input sanity check, we expect a string
        if (typeof subject !== "string") {
            // Try to run toString, if it exist
            if (subject && typeof subject.toString === "function") subject = subject.toString();
            else return "";
        }
        // Replace letters in the input using the lookup table and the
        // compiled search pattern.
        return subject.replace(searchPattern, lookupTable);
    };
};


const $58986743b93a2578$export$9852986a3ec5f6a0 = {
    "А": "A",
    "а": "a",
    "Б": "B",
    "б": "b",
    "В": "V",
    "в": "v",
    "Г": "G",
    "г": "g",
    "Ґ": "Ĝ",
    "ґ": "ĝ",
    "Д": "D",
    "д": "d",
    "Е": "E",
    "е": "e",
    "Є": "Je",
    "є": "je",
    "Ж": "Ž",
    "ж": "ž",
    "З": "Z",
    "з": "z",
    "И": "Y",
    "и": "y",
    "І": "I",
    "і": "i",
    "Ї": "Ji",
    "ї": "ji",
    "Й": "J",
    "й": "j",
    "К": "K",
    "к": "k",
    "Л": "L",
    "л": "l",
    "М": "M",
    "м": "m",
    "Н": "N",
    "н": "n",
    "О": "O",
    "о": "o",
    "П": "P",
    "п": "p",
    "Р": "R",
    "р": "r",
    "С": "S",
    "с": "s",
    "Т": "T",
    "т": "t",
    "У": "U",
    "у": "u",
    "Ф": "F",
    "ф": "f",
    "Х": "H",
    "х": "h",
    "Ц": "C",
    "ц": "c",
    "Ч": "Č",
    "ч": "č",
    "Ш": "Š",
    "ш": "š",
    "Щ": "Šč",
    "щ": "šč",
    "Ю": "Ju",
    "ю": "ju",
    "Я": "Ja",
    "я": "ja",
    "ь": "'",
    "'": "'"
};


const $66bb3dd4bee0a861$var$inputForm = document.querySelector("#input_form");
const $66bb3dd4bee0a861$var$outputForm = document.querySelector("#output_form");
const $66bb3dd4bee0a861$var$transliterate = (0, (/*@__PURE__*/$parcel$interopDefault($fee39a34470b7d1f$exports)))((0, $58986743b93a2578$export$9852986a3ec5f6a0));
$66bb3dd4bee0a861$var$inputForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const inputText = e.target.querySelector("#input_text").value;
    const transcription = $66bb3dd4bee0a861$var$transliterate(inputText);
    $66bb3dd4bee0a861$var$outputForm.querySelector("#output_text").value = transcription;
});
$66bb3dd4bee0a861$var$outputForm.addEventListener("submit", (e)=>{
    event.preventDefault();
    const copyTextarea = event.target.querySelector("#output_text");
    copyTextarea.focus();
    copyTextarea.select();
    navigator.clipboard.writeText(copyTextarea.value);
});


//# sourceMappingURL=index.99078c5a.js.map
