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

function updateCurrentBalance(amount , currentDonationId){
    const currentBalanceElement = parseFloat(document.getElementById('current-balance').innerText);
    const currentBalance =  currentBalanceElement - amount;
    document.getElementById('current-balance').innerText = currentBalance.toFixed(2);

    const currentDonation = parseFloat(document.getElementById(currentDonationId).innerText);
    const currentDonationAmount = currentDonation + amount;
    document.getElementById(currentDonationId).innerText = currentDonationAmount.toFixed(2);
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

const donateNoakhaliButton =  document.getElementById('btn-donate-noakhali');
donateNoakhaliButton.addEventListener("click", function () {
    const donateNoakhaliAmount =  getInputValueById('input-noakhali');
    updateCurrentBalance(donateNoakhaliAmount , 'current-donation-noakhali');
});

const donateFeniButton = document.getElementById('btn-donate-feni');
donateFeniButton.addEventListener("click", function () {
    const donateFeniAmount = getInputValueById('input-feni');
    updateCurrentBalance(donateFeniAmount , 'current-donation-feni');
});

const donateQuotaButton = document.getElementById('btn-donate-quota');
donateQuotaButton.addEventListener("click", function () {
    const donateQuotaAmount = getInputValueById('input-quota');
    updateCurrentBalance(donateQuotaAmount , 'current-donation-quota');
});

const btnHistory =  document.getElementById('btn-history');
const btnDonation = document.getElementById('btn-donation');
btnHistory.addEventListener('click', function() {
    updateButtons(btnHistory, btnDonation);
    document.getElementById("donation-section").classList.add("hidden");
    document.getElementById("history-div").classList.remove("hidden");
});

btnDonation.addEventListener('click', function() {
    updateButtons(btnDonation, btnHistory);
    document.getElementById("donation-section").classList.remove("hidden");
    document.getElementById("history-div").classList.add("hidden");
});