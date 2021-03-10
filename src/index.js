module.exports = function toReadable(number = 0) {
    let firstDigit = [
        " ",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let secondDigit10_19 = [
        " ",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let secondDigit20_90 = [
        " ",
        " ",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number == 0) {
        return "zero";
    }
    let readable = "";
    numbArr = number.toString().split("");
    let i = numbArr.length;
    if (i == 3) {
        readable = firstDigit[numbArr[0]] + " hundred ";
        i--;
        number -= numbArr[0] * 100;
    }
    if (i == 2 && number < 20 && number >= 10) {
        readable =
            readable +
            secondDigit10_19[
                parseInt(numbArr[numbArr.length - i + 1], 10) +
                    parseInt(numbArr[numbArr.length - i], 10)
            ];
        return readable.trim();
    }
    if (i == 2 && number >= 20) {
        readable =
            readable + secondDigit20_90[numbArr[numbArr.length - i]] + " ";
        i--;
        number -= numbArr[0] * 10;
    }
    if (i == 1 || number < 10) {
        i = 1;
        readable = readable + firstDigit[numbArr[numbArr.length - i]];
    }
    return readable.trim();
};

//toReadable(909);
