function Sign(){
    var password = document.querySelector('.Password').value;
    var pass1 = document.querySelector('.pass')
    var email = document.querySelector('.mail').value;
    var pass2 = document.querySelector('.email')
    var user = document.querySelector('.userName').value;
    var pass3 = document.querySelector('.user')
    if (password.match( /^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
        pass1.style.color = 'green'
        
    }
    else{
        pass1.style.color = 'red'
    }

    if (email.match(/^[a-zA-Z]+(\d|.|\w)*@[a-zA-Z]+.[a-zA-Z]+.*[a-zA-Z]+$/)) {
        pass2.style.color = 'green'
        
    }
    else{
        pass2.style.color = 'red'
    }

    if (user.match(/^[A-Z][A-Za-z0-9_-]{5,9}$/)) {
        pass3.style.color = 'green'
        
    }
    else{
        pass3.style.color = 'red'
    }


}