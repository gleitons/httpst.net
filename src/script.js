function loginFreeyond() {
    const logins = window.document.getElementById('nameLogin').value;
    const passw = window.document.getElementById('passworLogin').value;
    const OcultList = document.getElementById('insertName');
    

    if (logins.length == "0") {
        
        insertName.innerHTML = `<p class="lincorrect">enter a user</p>`
        OcultList.classList.replace('ocult', 'bol');
    } else if (passw.length == "0") {
        insertPass.innerHTML = `<p class="lincorrect">enter a password</p>`
        
    } else if (logins == "admin" && passw == "admin") {
            window.location.href = '/connected.html'
    }
    else {
        connectFreeyond.innerHTML = `<p class="lincorrect">Incorrect login, please check the information.</p>
    <p>are you not registered? <a href="https://go.hotmart.com/F64158184S" target="_blank" rel="nofollow"><button class="registerNow">Register now!</button></a></p>`
    }

    



    
}
function sendMessage() {
    const validatorTextArea = window.document.getElementById('insertTextA').value;
    const viewButtonSend = document.getElementById('SForm');
    const dontContHTTP = "http";
    const dontContCom = "/.com/"
    
    if (validatorTextArea.match(dontContHTTP) || validatorTextArea.match(/.com/)){
        window.location.href = '/dont-spam.html'
    }
    else {
        viewButtonSend.classList.replace('SendTo', 'ocult');

        SendF.innerHTML = `<p>Confirm that there is no link in the message.</p><input class="SendTo" type="submit" id="SForm" value="Confirmed"> `
    }

    //MessageText.innerHTML = `${validatorTextArea}`
}

function verifiquedState() {
    const name = window.document.getElementById('emails').value;

    if (name.length == "0") {
        MessageText.innerHTML = `E-mail is Required`
    } else {
        sendMessage();
    }
}
function ocultClass() {
    const OcultList = document.getElementById('insertName');

    OcultList.classList.replace('bol', 'ocult');
    
}