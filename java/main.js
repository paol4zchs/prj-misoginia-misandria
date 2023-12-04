function pesquisa(){
    const texto = document.querySelector("p");
    const x = document.querySelector('#x').value;
    const imagem = document.querySelector("img");

    if(x == "misoginia" || x == "Misoginia"){
        texto.innerHTML = "Misoginia é a repulsa, desprezo ou ódio contra as mulheres. Esta forma de aversão à mulher é centrada em uma visão sexista, que coloca a mulher em uma categoria de subalternidade em relação ao homem. O desprezo ou ódio dirigido às mulheres está diretamente relacionado com a violência praticada contra a mulher. Essas violências podem ser agressões físicas e psicológicas, mutilações, abusos sexuais, torturas, perseguições, entre outras. A misoginia é a principal responsável por grande parte dos assassinatos de mulheres, também conhecido por . Um homicídio é configurado como feminicídio, quando essa mulher é morta simplesmente por ser mulher.";
        imagem.setAttribute("src","dragdrop/imgs/miso2.jpg");
        imagem.setAttribute("width","500px");


    }  else if ( x == "misandria"){
        texto.innerHTML = "Misandria é a repulsa, desprezo ou ódio contra o sexo masculino. Esta é uma forma de aversão patológica aos homens, enquanto gênero sexual, sendo considerada o oposto da misoginia, que é o sentimento de repulsa e ódio pelo sexo feminino";
        imagem.setAttribute("src","dragdrop/imgs/misa.jpg");
        imagem.setAttribute("width","400px");

    } else{
        texto.innerHTML = "Assunto não encontrado... =(";
    }
}