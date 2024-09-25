function convertToRoman(num) {
    const object1 = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    var empty = "";
    var arr = num;
    // this for..in loop is subtracing from the index of the nested for loop.
    for (const i in object1) {
        for (let index = 0; index <= num; index++) {
            //if the variable arr is greater than or equal to object1[i] then the empty string will += i; what I think this code is doing is the math for the two loops. I think the for in loop is matching over the for loop until it is to its final number and the subtraction is done
            if (arr >= object1[i]) {
                empty += i;
                arr -= object1[i]
            }
        }
    }
    return empty;
};


function alphab() {
    document.getElementById("answer").innerHTML = convert();
};

function convert() {
    var myName = document.getElementById("word").value;
    return convertToRoman(myName);
}
document.getElementById("clicker").addEventListener("click", alphab)