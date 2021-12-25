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