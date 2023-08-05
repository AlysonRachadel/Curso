/* 
Entre 0- 11 - Bom dia
entre 12-17 - boa tarde
entre 18 - 23 - boa noite
*/ 

// If pode ser usado sozinho
// Sempre que utilizo a palavra else , preciso de um if 
// Eu posso ter vários "else if" na checagem
// Só posso ter um else na checagem
// podemos usar condições sem else if, utilizando apenas if e else 



const hora= 50; 

if (hora >= 0 && hora <= 11 ) {
    console.log ('BOMMMMMMMMMMMM DIA!!!!!!!!!!');
} else if (hora >= 12 && hora <= 17){
    console.log ("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite");

} else{ 
    console.log("oi");
}