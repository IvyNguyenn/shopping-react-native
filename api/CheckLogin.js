const CheckLogin = (token) => (
    fetch('http://192.168.56.1:88/api/check_login.php', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token })
    })
        .then(response => response.json())
        .catch(error => console.log(error))
);

module.exports = CheckLogin;