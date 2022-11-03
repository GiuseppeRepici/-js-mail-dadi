const bottonecarica = document.getElementById("btn1");

const listaEmail = ["mail@mail.com" ,"mail@gmail.com" , "mail1@gmail.com"]

bottonecarica.addEventListener("click" , 
    function (){

        trovata = false;

        const emailUtente = document.getElementById("inputmail").value;
        console.log(emailUtente);
        for(let i=0 ; i < listaEmail.length ; i++) {
            if ( listaEmail[i] === emailUtente ){
                trovata = true;
            } 
            console.log(trovata);
        }
        if (trovata == true){
            document.getElementById("rispostajs").innerHTML= "presente" ;
        } else {
            document.getElementById("rispostajs").innerHTML= "non è presente" ;
        }
    }
)



