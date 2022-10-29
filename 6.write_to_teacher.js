
function BinaDec(num) {
    let sum = 0;
    let phoneNumber = "11000000010111011010110001110110"

    for (let i = 0; i < phoneNumber.length; i++) {
       sum += +phoneNumber[i] * 2 ** (phoneNumber.length - 1 - i);
    }
    return sum;
}

console.log(BinaDec("11000000010111011010110001110110"));

