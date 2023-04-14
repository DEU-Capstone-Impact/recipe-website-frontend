const form = document.getElementById('login-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // 로그인 처리를 위한 코드 추가
    } else {
        alert('Incorrect username or password.');
    }
});