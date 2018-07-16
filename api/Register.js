const Register = (email, name, password) => (
    fetch('http://192.168.56.1:88/api/register.php', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, name, password })
    })
        .then(response => response.text())
        .catch(error => console.log(error))
);

module.exports = Register;