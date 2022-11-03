

bottonecarica.addEventListener("click",
    function (){
        let dado1 = 0;
        let dado2 = 0;
        dado1 = Math.floor((Math.random() * (7-1)) +1);
        dado2 = Math.floor((Math.random() * (7-1)) +1);
        console.log(dado1);
        console.log(dado2);
        const dadoUtente = document.getElementById("dadoutente").innerHTML= "Dado utente: " + dado1;
        const dadoCpu = document.getElementById("dadocpu").innerHTML= "Dado cpu: " + dado2;

        console.log(dadoUtente);
        console.log(dadoCpu);
        if (dado1 == dado2){
            const vincente = document.getElementById("vincitore").innerHTML= "stesso risultato , parità " ;
        } else if (dado1 > dado2){
            const vincente = document.getElementById("vincitore").innerHTML= "vince l'utente" ;
        } else vincente = document.getElementById("vincitore").innerHTML= "vince la cpu " ;
})

