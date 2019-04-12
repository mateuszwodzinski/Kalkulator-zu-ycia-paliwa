function calculate() {

    let price = document.getElementById("price").value;
    let distance = document.getElementById("distance").value;
    let liter = document.getElementById("liter").value;

    price = parseFloat(price);
    distance = parseFloat(distance);
    liter = parseFloat(liter);


    let wynik = liter / distance;
    suma = wynik * 100;
    let suma2 = suma.toFixed(2); //zaokrąglenie do dwóch cyfr po przycinku
    document.getElementById("score").innerHTML = suma2 + "litra";

    let kosztprzejazdu = suma2 * price;
    let fixedKosztPrzejazdu = kosztprzejazdu.toFixed(2);
    document.getElementById("score2").innerHTML = fixedKosztPrzejazdu + "zł";

    let kosztKilometra = kosztprzejazdu / 100;
    let sumaKilometra = kosztKilometra * 100;
    sumaKilometra = Math.round(sumaKilometra); //zaokragla liczbe w dół
    document.getElementById("score3").innerHTML = sumaKilometra + "gr";
}
