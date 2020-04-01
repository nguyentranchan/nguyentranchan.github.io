function validateEmail(mail)
{
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
}
function sendMail() {
    const textarea = document.querySelector('.contact-form textarea')
    const emailInput = document.querySelector('.contact-form input')
    const email = (emailInput.value || '').trim()
    const content = (textarea.value || '').trim()
    const emailError = document.querySelector('#email-error')
    const contentError = document.querySelector('#content-error')
    const result = document.querySelector('#result')

    if (!email) {
        emailError.innerHTML = 'Email is required.'
        emailInput.classList.add('required')
        return
    } else if (!validateEmail(email)) {
        emailError.innerHTML = 'Please enter a valid email.'
        emailInput.classList.add('required')
        return
    }

    if (!content) {
        contentError.innerHTML = 'Email content is required.'
        textarea.classList.add('required')
        return
    }

    emailError.innerHTML = ''
    contentError.innerHTML = ''
    textarea.classList.remove('required')
    emailInput.classList.remove('required')

    $.ajax({
        url: "/sendMail",
        data: JSON.stringify({email, content}),
        type: 'POST',
        contentType: 'application/json'
    })
    .done(function(data) {
        result.classList.add('result-success')
        result.innerHTML = 'Thank you for contacting us, we will touch base you within 8 hours.'
    }).fail(function (error) {
        result.classList.add('result-error')
        result.innerHTML = 'Oops! Something went wrong.'
    });
}

function sendCV(e) {
    const textName = document.querySelector('.cv-form #name')
    const textPosition = document.querySelector('.cv-form #position')
    const textarea = document.querySelector('.cv-form textarea')
    const emailInput = document.querySelector('.cv-form #email')
    const email = (emailInput.value || '').trim()
    const message = (textarea.value || '').trim()
    const name = (textName.value || '').trim()
    const position = (textPosition.value || '').trim()
    const emailError = document.querySelector('.cv-form #email-error')
    const contentError = document.querySelector('.cv-form #content-error')
    const nameError = document.querySelector('.cv-form #name-error')
    const result = document.querySelector('.cv-form #result')
    if (!email) {
        emailError.innerHTML = 'Email is required.'
        emailInput.classList.add('required')
        return
    } else if (!validateEmail(email)) {
        emailError.innerHTML = 'Please enter a valid email.'
        emailInput.classList.add('required')
        return
    }

    if (!name) {
        nameError.innerHTML = 'Name content is required.'
        textarea.classList.add('required')
        return
    }

    if (!message) {
        contentError.innerHTML = 'Message content is required.'
        textarea.classList.add('required')
        return
    }

    emailError.innerHTML = ''
    nameError.innerHTML = ''
    contentError.innerHTML = ''
    textarea.classList.remove('required')
    emailInput.classList.remove('required')
    textName.classList.remove('required')

    $.ajax({
        url: "/sendCV",
        data: JSON.stringify({email, message,name,position}),
        type: 'POST',
        contentType: 'application/json'
    })
    .done(function(data) {
        result.classList.add('result-success')
        result.innerHTML = 'Thank you for contacting us, we will touch base you within 24 hours.'
    }).fail(function (error) {
        result.classList.add('result-error')
        result.innerHTML = 'Oops! Something went wrong.'
    });
}


