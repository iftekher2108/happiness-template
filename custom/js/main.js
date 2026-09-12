$(function () {
    $('.date').text(new Date().getFullYear())
    $('#loader').fadeOut(300)

    $('#contactForm').on('submit', function (event) {
        event.preventDefault()
        var submitButton = $(this).find('button[type="submit"]')
        submitButton.prop('disabled', true).html('Thanks, we will be in touch <i class="fa-solid fa-check ms-2"></i>')
    })
})