const bottonecarica = document.getElementById("btn1");
let x;
let z = 0;
const listaEmail = ["mail@mail.com" ,"mail@gmail.com" , "mail1@gmail.com"]

bottonecarica.addEventListener("click" , 
    function (){
        const emailUtente = document.getElementById("inputmail").value;
        console.log(emailUtente);
        for(let i=0 ; i < listaEmail.length ; i++) {
            x = listaEmail[i];
            console.log(x);
            if ( x === emailUtente ){
                z = 1;
            } 
            console.log(z);
        }
        if (z == 1){
            const stampoavideo = document.getElementById("rispostajs").innerHTML= "presente" ;
        } else stampoavideo = document.getElementById("rispostajs").innerHTML= "non è presente" ;
    }
)



