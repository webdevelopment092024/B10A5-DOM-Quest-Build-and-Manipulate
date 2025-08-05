document.getElementById('donation-button').addEventListener('click', function(event){
    event.preventDefault();
    showSectionByID('donation-whole-section');
    document.getElementById('donation-button').classList.remove('bg-white')
    document.getElementById('history-button').classList.remove('bg-colorprimary')
    document.getElementById('donation-button').classList.add('bg-colorprimary')

})
document.getElementById('history-button').addEventListener('click', function(event){
    event.preventDefault();
    showSectionByID('history-whole-section');
    document.getElementById('history-button').classList.remove('bg-white')
    document.getElementById('donation-button').classList.remove('bg-colorprimary')
    document.getElementById('history-button').classList.add('bg-colorprimary')
})