window.addEventListener("scroll", function () {
  const header = document.getElementById("sticky-header");
  if (window.scrollY > 0) {
    header.classList.add("shadow-lg");
  } else {
    header.classList.remove("shadow-lg");
  }
});

function getInputValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function createDivInHistory(currentDonationAmount , h2Id){
    const h2Text = document.getElementById(h2Id).innerText;
    let newText;
    if(h2Text.includes('Donate for ')){
         newText = h2Text.split('Donate for ')[1];
    } else{
         newText = h2Text;
    }
    const historyItem = document.createElement("div");
    historyItem.className = 'p-8 rounded-2xl border-custom border-card_border_secondary mb-6 max-w-6xl mx-auto';
    historyItem.innerHTML = `
    <p class="text-2xl text-primary">${currentDonationAmount} Taka is Donated for ${newText}</p>
    <p class="text-base text-secondary mt-4">${new Date().toString()}</p>
    `;
    const historyContainer = document.getElementById("history-div");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}

function updateCurrentBalance(amount , currentDonationId , h2Id){
    const currentBalanceElement = parseFloat(document.getElementById('current-balance').innerText);
    const currentBalance =  currentBalanceElement - amount;
    document.getElementById('current-balance').innerText = currentBalance.toFixed(2);


    const currentDonation = parseFloat(document.getElementById(currentDonationId).innerText);
    const currentDonationAmount = (currentDonation + amount).toFixed(2);
    document.getElementById(currentDonationId).innerText = currentDonationAmount;
    createDivInHistory(currentDonationAmount , h2Id);
}

function updateButtons(clickedButton, otherButton){
    clickedButton.classList.add(
        'bg-btn_bg',
        'text-primary'
    );

    clickedButton.classList.remove(
        'text-secondary',
        'border-custom',
        'border-btn_border_secondary'
    );

    otherButton.classList.add(
        'text-secondary',
        'border-custom',
        'border-btn_border_secondary'
    );
    otherButton.classList.remove(
        'bg-btn_bg',
        'text-primary'
    );
}

const modal = document.getElementById("my_modal_1");
function showModal(){
    modal.showModal();
}

function validateInput(id) {
    const inputElement = document.getElementById(id);
    const inputValue = parseFloat(inputElement.value);
    const currentBalanceElement = parseFloat(document.getElementById('current-balance').innerText);

    if (inputValue > currentBalanceElement || isNaN(inputValue) || inputValue <= 0 || inputElement.value.trim() === '') {
        alert('Invalid Data');
        return false;
    }
    return true;
}


const donateNoakhaliButton =  document.getElementById('btn-donate-noakhali');
donateNoakhaliButton.addEventListener("click", function () {
    if (validateInput('input-noakhali')) {
        const donateNoakhaliAmount = getInputValueById('input-noakhali');
        updateCurrentBalance(donateNoakhaliAmount, 'current-donation-noakhali', "h2-noakhali");
        showModal();
    }
});

const donateFeniButton = document.getElementById('btn-donate-feni');
donateFeniButton.addEventListener("click", function () {
    
    if (validateInput('input-feni')) {
        const donateFeniAmount = getInputValueById('input-feni');
        updateCurrentBalance(donateFeniAmount, 'current-donation-feni', 'h2-feni');
        showModal();
    }
});

const donateQuotaButton = document.getElementById('btn-donate-quota');
donateQuotaButton.addEventListener("click", function () {
    
    if (validateInput('input-quota')) {
        const donateQuotaAmount = getInputValueById('input-quota');
        updateCurrentBalance(donateQuotaAmount, 'current-donation-quota', 'h2-quota');
        showModal();
    }
});

const btnHistory =  document.getElementById('btn-history');
const btnDonation = document.getElementById('btn-donation');
btnHistory.addEventListener('click', function() {
    updateButtons(btnHistory, btnDonation);
    document.getElementById("donation-section").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
});

btnDonation.addEventListener('click', function() {
    updateButtons(btnDonation, btnHistory);
    document.getElementById("donation-section").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
});
