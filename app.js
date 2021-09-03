function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update case total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    totalCalculate();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function totalCalculate() {

    const phoneTotal = getInputValue('phone') * 1219;

    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    // update on the html 
    document.getElementById('sub-total').innerHTML = subTotal;
    document.getElementById('tax-amount').innerHTML = tax;
    document.getElementById('total-price').innerHTML = total;
}

// phone handle count
document.getElementById('phone-plus').addEventListener('click',
    function () {
        updateProductNumber('phone', 1229, true);
    })
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})

// case handle count
document.getElementById('case-plus').addEventListener('click',
    function () {
        updateProductNumber('case', 59, true);

    });
document.getElementById('case-minus').addEventListener('click',
    function () {
        updateProductNumber('case', 59, false);

    });