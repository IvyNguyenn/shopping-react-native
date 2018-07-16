const Login = (email,password) =>(
    fetch('http://192.168.56.1:88/api/login.php',{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(response => response.json())
    .catch(error => console.log(error))
);

module.exports = Login;