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

function sendCV() {
    const cv = document.querySelector('.cv-form #cv-file')
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
    const cvError = document.querySelector('.cv-form #cv-error')
    const result = document.querySelector('.cv-form #result')
    emailError.innerHTML = ''
    nameError.innerHTML = ''
    contentError.innerHTML = ''
    cvError.innerHTML = ''
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
    
    if (!cv.files.length) {
        cvError.innerHTML = 'CV file is required.'
        return
    }

    var formData = new FormData();
      formData.append("cv", cv.files[0]);
      formData.append("email", email)
      formData.append("name", name)
      formData.append("message", message)
      formData.append("position", position)

    emailError.innerHTML = ''
    nameError.innerHTML = ''
    contentError.innerHTML = ''
    cvError.innerHTML = ''
    textarea.classList.remove('required')
    emailInput.classList.remove('required')
    textName.classList.remove('required')


    axios.post("/sendCV",formData).then(data => {
        if (data.status==200) {
            result.classList.add('result-success')
            result.innerHTML = 'Thank you for contacting us, we will touch base you within 24 hours.'
        //  document.getElementById("form-recruit").reset();
        }
      }).catch(err => {
          result.classList.add('result-error')
        result.innerHTML = 'Oops! Something went wrong, please make you send an CV with PDF type'
      })
      
    // $.ajax({
    //     url: "/sendCV",
    //     data: formData,
    //     processData: false,
    //     type: 'POST',
    //     contentType: 'application/json'
    // })
    // .done(function(data) {
    //     result.classList.add('result-success')
    //     result.innerHTML = 'Thank you for contacting us, we will touch base you within 24 hours.'
    // }).fail(function (error) {
    //     result.classList.add('result-error')
    //     result.innerHTML = 'Oops! Something went wrong.'
    // });
}


