// Noakhali Section start
document.getElementById('btn-noakhali-donate').addEventListener('click', function(event){
    event.preventDefault();
    // Noakhali Donation Input and My Balance Section
    const noakhaliDonateInput = getInputDataByID('noakhali-donate-input');

    if(noakhaliDonateInput<=0){
        alert('Please provide a value');
        return;
    }



    const myBalance = getTextDataByID('my-balance');
    if(myBalance<noakhaliDonateInput){
        alert('You have no sufficient balance');
        return;
    }
    const newBalanceOfMyBalance = myBalance-noakhaliDonateInput;
    document.getElementById('my-balance').innerText = newBalanceOfMyBalance;

    // Noakhali Donation Input and Noakhali Donation balance section
    const noakhaliDonationBalance = getTextDataByID('noakhali-donation-balance');
    const newBalanceOfNoakhaliDonationBalance = noakhaliDonationBalance+noakhaliDonateInput;
    document.getElementById('noakhali-donation-balance').innerText = newBalanceOfNoakhaliDonationBalance;
})

// Noakhali Section End
// Feni Section start
document.getElementById('btn-feni-donate').addEventListener('click', function(event){
    event.preventDefault();
    // Feni Donation Input and My Balance Section
    const feniDonateInput = getInputDataByID('feni-donate-input');
    if(feniDonateInput<=0){
        alert('Please provide a value');
        return;
    }

    const myBalance = getTextDataByID('my-balance')
        if(myBalance<feniDonateInput){
        alert('You have no sufficient balance');
        return;
    }
    const newBalanceOfMyBalance = myBalance-feniDonateInput;
    document.getElementById('my-balance').innerText = newBalanceOfMyBalance;
    
    // Feni Donation Input and Noakhali Donation balance section
    const feniDonationBalance = getTextDataByID('feni-donation-balance');
    const newBalanceOfFeniDonationBalance = feniDonateInput+feniDonationBalance;
    document.getElementById('feni-donation-balance').innerText = newBalanceOfFeniDonationBalance;
})
// Feni Section End
// Quota Protest Section Start
document.getElementById('btn-quota-protest-donate').addEventListener('click', function(event){
    event.preventDefault();
    // Quota Protest Donation Input and My Balance Section
    const quotaProtestDonateInput = getInputDataByID('quota-protest-donate-input');
    if(quotaProtestDonateInput<=0){
        alert('Please provide a value');
        return;
    }


    const myBalance = getTextDataByID('my-balance');
    if(myBalance<quotaProtestDonateInput){
        alert('You have no sufficient balance');
        return;
    }


    const newBalanceOfMyBalance = myBalance-quotaProtestDonateInput;
    document.getElementById('my-balance').innerText = newBalanceOfMyBalance;
    // Quota Protest Donation Input and Noakhali Donation balance section
    const quotaProtestDonationBalance = getTextDataByID('quota-protest-donation-balance');
    const newBalanceOfQuotaProtestDonationBalance = quotaProtestDonateInput+quotaProtestDonationBalance;
    document.getElementById('quota-protest-donation-balance').innerText = newBalanceOfQuotaProtestDonationBalance;

})
// Quota Protest Section End




