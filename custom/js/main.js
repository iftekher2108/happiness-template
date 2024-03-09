console.log('this is psd to html theme.')
console.log("developed by Iftekher Mahmud Pervez.")

// copy right date
var date = new Date().getFullYear()
$('.date').html(date)

// web loading effect

$(document).ready(function(){
    $('#loader').fadeOut(300)
})