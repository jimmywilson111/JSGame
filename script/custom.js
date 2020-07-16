let number = Math.floor(Math.random() * 1000) + 1;
console.log(number);
let count = 9;



document.getElementById('check').onclick = function () {

    if (count > 0) {
        let usernum = document.getElementById('mynum').value;
        usernum = parseInt(usernum);
        let out = document.getElementById('out');

        if (usernum == number) {
            alert('Congratulations you win! Wanna try again?');
            location.reload();
            document.getElementById("mynum").value = "";
        } else if (usernum > number) {
            out.innerHTML = 'Your number is more. Try again.';
        } else if (usernum < number) {
            out.innerHTML = 'Your number is less. Try again.';
        }

        document.getElementById('count').innerHTML = count;
        count = count - 1;
    } else {
        alert('You lose! Wanna try again?')
        location.reload();
        document.getElementById("textInput").value = "";
    }
}