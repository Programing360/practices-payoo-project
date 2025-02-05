// login form----start----------------------------------------------
document.getElementById('input-login')
    .addEventListener('click', function (event) {
        event.preventDefault();

        document.getElementById('input-mob-number').value


        const pinNumber = document.getElementById('input-pin-number').value

        if (pinNumber === '1234') {
            const mobNumber = document.getElementById('login-form')
            mobNumber.classList.add('hidden')
            const homeSection = document.getElementById('home-section');
            homeSection.classList.remove('hidden')
            const latestUpdate = document.getElementById('latest-update')
            latestUpdate.classList.remove('hidden')
            // console.log('get the form')
        }
        else {
            alert('Pin Number is incorrect. Please try again!')
        }

        // console.log(typeof pMobNumber, pinNumber)
    })
// login form end-----------------------------------------------------
// btn added start----------------------------------------------------
document.getElementById('Money-btn')
    .addEventListener('click', function () {
        const addMoneyForm = document.getElementById('Add-money-form');
        addMoneyForm.classList.remove('hidden')
        const latestUpdate = document.getElementById('latest-update')
        latestUpdate.classList.add('hidden')
        document.getElementById('transfer-money-form').classList.add('hidden')
        document.getElementById('cash-out-form').classList.add('hidden')
    })
// btn added end----------------------------------------------------
// add money start--------------------------------------------------
document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()

        const getAmount = document.getElementById('get-amount').value
        const pGetAmount = parseFloat(getAmount)
        // console.log(typeof pGetAmount)
        const getPin = document.getElementById('get-pin-number').value
        const currentAmount = document.getElementById('current-amount').innerText
        const pCurrentAmount = parseFloat(currentAmount)
        if (getPin === '1234') {
            const newAmount = pCurrentAmount + pGetAmount
            const rightAmount = document.getElementById('current-amount')
            rightAmount.innerText = newAmount


        }
        else {
            alert('Something is wrong. Please try again!')
        }
        // console.log('paisi', getAmount, getPin)
    })
// add money end--------------------------------------------------
// cash out btn start---------------------------------------------
document.getElementById('cashout-btn')
    .addEventListener('click', function () {
        document.getElementById('Add-money-form').classList.add('hidden')
        document.getElementById('latest-update').classList.add('hidden')
        document.getElementById('transfer-money-form').classList.add('hidden')
        const getAmount = document.getElementById('cash-out-form')
        getAmount.classList.remove('hidden')

    })

document.getElementById('cash-out-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const getPin = document.getElementById('get-pin-number').value
        const getAmountOfCashOut = document.getElementById('get-amount').value
        parseFloat(getAmountOfCashOut)
        const currentBalance = document.getElementById('current-amount').innerText;
        // if (currentBalance < getAmountOfCashOut) {
        //     alert('you do not enough money to account!')
        // }
        if (getPin === '1234') {


            const updateBalance = currentBalance - getAmountOfCashOut

            document.getElementById('current-amount').innerText = updateBalance

        }
        else {
            alert('you have some mistake.Please try again!')
        }

    })
// cash out btn end---------------------------------------------
// transfer money btn end---------------------------------------------
document.getElementById('transfer-money-btn')
    .addEventListener('click', function () {

        document.getElementById('transfer-money-form').classList.remove('hidden')
        document.getElementById('Add-money-form').classList.add('hidden')
        document.getElementById('latest-update').classList.add('hidden')
        const getAmount = document.getElementById('cash-out-form')
        getAmount.classList.add('hidden')
    })

document.getElementById('send-money-btn')
    .addEventListener('click', function (event){
        event.preventDefault();
        const getPin = document.getElementById('get-pin-number-send-money').value;
        const getAmountSendMoney = document.getElementById('get-amount-send-money').value
        const sendMoney =  parseFloat(getAmountSendMoney);
        console.log(typeof sendMoney)
        const currentBalance = document.getElementById('current-amount').innerText;

        if(getPin === '1234'){
            const newAmount = currentBalance - sendMoney
            console.log(newAmount)
            document.getElementById('current-amount').innerText = newAmount;
        }
        else{
            alert('you have some mistake.Please try again!')
        }

    })
// transfer money btn end---------------------------------------------
