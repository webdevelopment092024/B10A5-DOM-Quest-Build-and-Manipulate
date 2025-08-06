// Noakhali Popup start 
document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtn = document.getElementById('btn-noakhali-donate');
    const myPopup = document.getElementById('myPopup');
    const popupBody = document.getElementById('popupBody');
    const closeBtn = document.querySelector('.close-btn');

    openPopupBtn.addEventListener('click', () => {
        // Set the content of the pop-up using innerHTML
        popupBody.innerHTML = `
             <h1 class="text-5xl font-bold text-center">Congrates!</h1>
             <div class="flex justify-center"><img src="assets/coin.png" alt="" class="w-16 h-16"></div>
             <h3  class="text-center text-xl text-gray-500">You Have Donated for Humankind</h3>
             <h2 class="text-center text-2xl font-bold">Successfully</h2>
        `;
        myPopup.style.display = 'flex'; // Show the pop-up
    });

    closeBtn.addEventListener('click', () => {
        myPopup.style.display = 'none'; // Hide the pop-up
    });

    // Close pop-up when clicking outside the content
    myPopup.addEventListener('click', (event) => {
        if (event.target === myPopup) {
            myPopup.style.display = 'none';
        }
    });
});

// Noakhali Popup end
// Feni Popup start 
document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtn = document.getElementById('btn-feni-donate');
    const myPopup = document.getElementById('myPopup');
    const popupBody = document.getElementById('popupBody');
    const closeBtn = document.querySelector('.close-btn');

    openPopupBtn.addEventListener('click', () => {
        // Set the content of the pop-up using innerHTML
        popupBody.innerHTML = `
             <h1 class="text-5xl font-bold text-center">Congrates!</h1>
             <div class="flex justify-center"><img src="assets/coin.png" alt="" class="w-16 h-16"></div>
             <h3  class="text-center text-xl text-gray-500">You Have Donated for Humankind</h3>
             <h2 class="text-center text-2xl font-bold">Successfully</h2>
        `;
        myPopup.style.display = 'flex'; // Show the pop-up
    });

    closeBtn.addEventListener('click', () => {
        myPopup.style.display = 'none'; // Hide the pop-up
    });

    // Close pop-up when clicking outside the content
    myPopup.addEventListener('click', (event) => {
        if (event.target === myPopup) {
            myPopup.style.display = 'none';
        }
    });
});

// Feni Popup end

// Quota Protest Popup start 
document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtn = document.getElementById('btn-quota-protest-donate');
    const myPopup = document.getElementById('myPopup');
    const popupBody = document.getElementById('popupBody');
    const closeBtn = document.querySelector('.close-btn');

    openPopupBtn.addEventListener('click', () => {
        // Set the content of the pop-up using innerHTML
        popupBody.innerHTML = `
             <h1 class="text-5xl font-bold text-center">Congrates!</h1>
             <div class="flex justify-center"><img src="assets/coin.png" alt="" class="w-16 h-16"></div>
             <h3  class="text-center text-xl text-gray-500">You Have Donated for Humankind</h3>
             <h2 class="text-center text-2xl font-bold">Successfully</h2>
        `;
        myPopup.style.display = 'flex'; // Show the pop-up
    });

    closeBtn.addEventListener('click', () => {
        myPopup.style.display = 'none'; // Hide the pop-up
    });

    // Close pop-up when clicking outside the content
    myPopup.addEventListener('click', (event) => {
        if (event.target === myPopup) {
            myPopup.style.display = 'none';
        }
    });
});

// Quota Protest Popup end


