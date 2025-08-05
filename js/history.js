
// For Noakhali
document.getElementById('btn-noakhali-donate').addEventListener('click', function(event){
    event.preventDefault();
    const myBalance = getTextDataByID('my-balance');
    const noakhaliDonateInput = getInputDataByID('noakhali-donate-input');
    const noakhaliHeading = document.getElementById('noakhali-heading').innerText;
    if(myBalance<noakhaliDonateInput){
        alert('You have no sufficient balance');
        return;
    }


    const date = new Date(); //
    const targetTimeZone = 'Asia/Dhaka';
    const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: targetTimeZone,
    weekday:"long",
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'long', // or 'long', 'shortOffset', 'longOffset', 'shortGeneric'
    });
    const formattedTime = formatter.format(date);  

    const div = document.createElement('div');
    div.classList.add('bg-white-300', 'p-4', 'border-2', 'border-dashed', 'pl-20', 'pr-20', 'mb-4');
    div.innerHTML = `
    <div id="time-date">
        <h3 class="font-bold">${noakhaliDonateInput} Taka is Donated ${noakhaliHeading}</h3>
        <p>${formattedTime}</p>
    </div>
    `
    document.getElementById('show-history').appendChild(div);

})
// For Feni
document.getElementById('btn-feni-donate').addEventListener('click', function(event){
    event.preventDefault();
    const myBalance = getTextDataByID('my-balance');
    const feniDonateInput = getInputDataByID('feni-donate-input');
    const feniHeading = document.getElementById('feni-heading').innerText;
    if(myBalance<feniDonateInput){
        alert('You have no sufficient balance');
        return;
    }


    const date = new Date(); //
    const targetTimeZone = 'Asia/Dhaka';
    const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: targetTimeZone,
    weekday:"long",
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'long', // or 'long', 'shortOffset', 'longOffset', 'shortGeneric'
    });
    const formattedTime = formatter.format(date);  

    const div = document.createElement('div');
    div.classList.add('bg-white-300', 'p-4', 'border-2', 'border-dashed', 'pl-20', 'pr-20', 'mb-4');
    div.innerHTML = `
    <div id="time-date">
        <h3 class="font-bold">${feniDonateInput} Taka is Donated ${feniHeading}</h3>
        <p>${formattedTime}</p>
    </div>
    `
    document.getElementById('show-history').appendChild(div);

})
// For Quota Protest
document.getElementById('btn-quota-protest-donate').addEventListener('click', function(event){
    event.preventDefault();
    const myBalance = getTextDataByID('my-balance');
    const quptaProtestDonateInput = getInputDataByID('quota-protest-donate-input');
    const quptaProtesHeading = document.getElementById('quota-protest-heading').innerText;
    if(myBalance<quptaProtestDonateInput){
        alert('You have no sufficient balance');
        return;
    }


    const date = new Date(); //
    const targetTimeZone = 'Asia/Dhaka';
    const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: targetTimeZone,
    weekday:"long",
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'long', // or 'long', 'shortOffset', 'longOffset', 'shortGeneric'
    });
    const formattedTime = formatter.format(date);  

    const div = document.createElement('div');
    div.classList.add('bg-white-300', 'p-4', 'border-2', 'border-dashed', 'pl-20', 'pr-20', 'mb-4');
    div.innerHTML = `
    <div id="time-date">
        <h3 class="font-bold">${quptaProtestDonateInput} Taka is Donated for ${quptaProtesHeading}</h3>
        <p>${formattedTime}</p>
    </div>
    `
    document.getElementById('show-history').appendChild(div);

})

