function loginFreeyond() {
    const logins = window.document.getElementById('nameLogin').value;
    const passw = window.document.getElementById('passworLogin').value;
    

    if (logins.length == "0") {
        insertName.innerHTML = `<p class="lincorrect">enter a user</p>`
    } else if (passw.length == "0") {
        insertPass.innerHTML = `<p class="lincorrect">enter a password</p>`
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