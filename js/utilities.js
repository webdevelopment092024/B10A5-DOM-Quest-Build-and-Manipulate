function getInputDataByID(id){
    const inputValue = document.getElementById(id).value;
    const inputValueInNumber = parseFloat(inputValue);
    return inputValueInNumber;
}
function getTextDataByID(id){
    const textValue = document.getElementById(id).innerText;
    const textValueInNumber = parseFloat(textValue);
    return textValueInNumber;
}

// Header Color Set for home
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        document.getElementById('header-id').style.backgroundColor = 'Cornsilk';
        } 
    else {
        document.getElementById('header-id').style.backgroundColor = 'white';
        }
});

            //             window.addEventListener('scroll', function() {
            //     if (window.scrollY=true) {
            //         document.getElementById('header-id').style.backgroundColor = 'Apricot';
            //     }
            // });

function showSectionByID(id){
    document.getElementById('donation-whole-section').classList.add('hidden');
    document.getElementById('history-whole-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}