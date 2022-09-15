let vez = "X";

let vit_X = 0;
let vit_O = 0;

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");

let casa04 = document.getElementById("casa04");
let casa05 = document.getElementById("casa05");
let casa06 = document.getElementById("casa06");

let casa07 = document.getElementById("casa07");
let casa08 = document.getElementById("casa08");
let casa09 = document.getElementById("casa09");

function jogada(casa){
    if(casa.innerHTML === ""){
        casa.innerHTML = vez; 
        ganhador();
        alterna_jogador();
    }
    
}

function ganhador (){
    if( casa01.innerHTML != "" && casa01.innerHTML === casa02.innerHTML && casa01.innerHTML === casa03.innerHTML){
            alert(`Temos um vencedor: ${casa01.innerHTML}`);
            placar(casa01.innerHTML);
        }
     else if(casa04.innerHTML != "" && casa04.innerHTML === casa05.innerHTML && casa04.innerHTML === casa06.innerHTML){
        alert(`Temos um vencedor: ${casa04.innerHTML}`);
        placar(casa04.innerHTML);
     }    
     else if (casa07.innerHTML != "" && casa07.innerHTML === casa08.innerHTML && casa07.innerHTML === casa09.innerHTML){
        alert(`Temos um vencedor: ${casa07.innerHTML}`);
        placar(casa07.innerHTML);
     }
     else if (casa01.innerHTML != "" && casa01.innerHTML == casa04.innerHTML && casa01.innerHTML === casa07.innerHTML){
        alert(`Temos um vencedor: ${casa01.innerHTML}`);
        placar(casa01.innerHTML);
     }
     else if (casa02.innerHTML != "" && casa02.innerHTML == casa05.innerHTML && casa02.innerHTML === casa08.innerHTML){
        alert(`Temos um vencedor: ${casa02.innerHTML}`);
        placar(casa02.innerHTML);
     }
     else if (casa03.innerHTML != "" && casa03.innerHTML == casa06.innerHTML && casa03.innerHTML === casa09.innerHTML){
        alert(`Temos um vencedor: ${casa03.innerHTML}`);
        placar(casa03.innerHTML);
     }
     else if (casa01.innerHTML != "" && casa01.innerHTML == casa05.innerHTML && casa01.innerHTML === casa09.innerHTML){
        alert(`Temos um vencedor: ${casa01.innerHTML}`);
        placar(casa01.innerHTML);
     }
     else if (casa03.innerHTML != "" && casa03.innerHTML == casa05.innerHTML && casa03.innerHTML === casa07.innerHTML){
        alert(`Temos um vencedor: ${casa03.innerHTML}`);
        placar(casa03.innerHTML);
     }
     
}

function alterna_jogador(){
    if(vez =="X"){
        vez = "O";
    }else{
        vez = "X";
    }
}

function placar (vencedor){
    casa01.innerHTML = "";
    casa02.innerHTML = "";
    casa03.innerHTML = "";
    casa04.innerHTML = "";
    casa05.innerHTML = "";
    casa06.innerHTML = "";
    casa07.innerHTML = "";
    casa08.innerHTML = "";
    casa09.innerHTML = "";

    vez = "X"


if (vencedor === "X"){
    vit_X = vit_X + 1;
}else{
    vit_O = vit_O + 1;
}


document.getElementById("resultado").innerHTML=`<h1>Placar</h1> <p>X: ${vit_X} </p> <p>O: ${vit_O}</p>`


}