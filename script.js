function unlock() {
    var pin = document.getElementById('pin').value;
    if (pin === "12345678") { 
        document.querySelector('.lock-screen').style.display = 'none';
        document.querySelector('.unlock-screen').style.display = 'block';
    } else {
        alert("PIN salah!");
    }
}
