document.getElementsByTagName("p")[0].innerText = "Eu me vejo trabalhando com programação, na senioridade pleno ou quase lá, ganhando pelo menos 2x mais do que ganhava como técnica de seguro.".toUpperCase();
document.getElementsByTagName("main")[0].style.backgroundColor = "rgb(76,164,109)";
document.getElementsByTagName("section")[0].style.backgroundColor = "white";
document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript".toUpperCase();
document.getElementsByTagName("p")[2].innerText = "Trybe".toUpperCase();

function tagsP(){
    let variav = document.getElementsByTagName("main");

    for (let i = 0; i < variav.length; i += 1){
        let nova = variav[i];
    }
    console.log([nova]);
}
console.log(tagsP());
