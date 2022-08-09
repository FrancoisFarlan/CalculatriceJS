function addition(nombreA, nombreB) {
    return nombreA + nombreB;

}

function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
    
}

function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
    
}

function division(nombreA, nombreB) {
   if(nombreB ==0) {
       throw new Error("Impossible de diviser par 0");
   }
   return nombreA / nombreB;
}

let restart = false;
do {
    do {
        var choix = Number(prompt ("Que souhaitez-vous faire \n\n1 - Addition \n2 - Soustraction \n3 - Multiplication \n4 - Division\n")); 
    } while (choix != 1 && choix !=2 && choix!= 3 && choix != 4); 

    //console.log(typeof choix);

    do {
        var  premierNombre  = Number(prompt("Entrez un 1er chiffre"));
        var  deuxiemeNombre = Number(prompt("Entrez un 2eme chiffre"));
    } while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

    let resultat; 
    try {
        switch (choix) {
        case 1:
            resultat = addition(premierNombre, deuxiemeNombre);
            break;
        case 2:
            resultat = soustraction(premierNombre, deuxiemeNombre);
            break;
        case 3:
            resultat = multiplication(premierNombre, deuxiemeNombre);
            break;
        case 4:
            resultat = division(premierNombre, deuxiemeNombre);
            break;

        default:
            throw new Error("Une erreur s'est produite"); 
            break;
        }
        alert("Le resultat de votre opération est " + resultat);
    }
    catch(error) {
        alert(error);
    }
    restart = confirm("Voulez vous faire un autre calcul ?"); 
} while (restart)