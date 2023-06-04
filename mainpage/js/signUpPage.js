const form = document.getElementById('signup-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else if (!isValidEmail(email)) {
        alert('Invalid email address.');
    } else {
        alert('Sign up successful!');
        // 여기서 서버로 회원가입 정보를 전송하는 등의 추가적인 처리를 수행할 수 있습니다.
    }
});

function isValidEmail(email) {
    // 이메일 주소의 유효성을 검사하는 함수입니다.
    // 간단한 이메일 주소 유효성 검사이며, 복잡한 검사를 하려면 별도의 라이브러리를 사용해야 합니다.
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}