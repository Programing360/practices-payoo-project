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
        else{
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
    })
// btn added end----------------------------------------------------
// add money start--------------------------------------------------
document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const getAmount = document.getElementById('get-amount').value
        const pGetAmount = parseFloat(getAmount)
        console.log(typeof pGetAmount)
        const getPin = document.getElementById('get-pin-number').value
        const currentAmount = document.getElementById('current-amount').innerText
        const pCurrentAmount = parseFloat(currentAmount)
        if(getPin === '1234'){
            const newAmount = pCurrentAmount + pGetAmount
            const rightAmount = document.getElementById('current-amount')
            rightAmount.innerText = newAmount

            
        }
        else{
            alert('Something is wrong. Please try again!')
        }
        // console.log('paisi', getAmount, getPin)
    })
// add money end--------------------------------------------------
