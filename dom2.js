document.getElementById('skrivUt').addEventListener('click', function () {
    let tallet1 = document.getElementById("tall1").value;
    let tallet2 = document.getElementById("tall2").value;
    const num = Math.ceil(Math.random() * let tallet1, let tallet2);
    document.write(num);


    if (tallet1 < tallet2) {
        document.getElementById("result").innerHTML = "tallet 1 er mindre enn tallet 2";
    } else if (tallet1 > tallet2) {
        document.getElementById("result").innerHTML = "tallet 1 er større enn tallet 2";
    } else {
        document.getElementById("result").innerHTML = "De er like";
    }
    if (gnum == num) console.log('Matched');
    else console.log('Not matched, the number was ' + gnum);

});


