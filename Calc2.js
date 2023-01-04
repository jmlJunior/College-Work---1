function limpFunction(){
    localStorage.removeItem("A");
    localStorage.removeItem("B");
    }
var CA, CB, CC;
var Controle;
var button = document.querySelector('button');
    button.onclick = function (){
        var Qtde = document.getElementById("Livros").value;
        CA = (0.25 * Qtde) + 7.50;
        CB = (0.50 * Qtde) + 2.50;
        CC = (0.65 * Qtde) + 1.50;
        if (Qtde <= 0) {
            document.getElementById("conteudo").innerHTML = "Ops! Esse não é um valor válido... Me descupe!" + " Escolha uma quantidade mínima de Livro para comprar!";
            } else if (Qtde > 0){
                localStorage.setItem("A", Qtde);

            if (CB == CC || CA > CB && CA > CC){
                document.getElementById("conteudo").innerHTML = "Você selecionou " + Qtde 
                                                                                   + " livros!" 
                                                                                   + " No Criterio A, o desconto obtido na compra de " 
                                                                                   + Qtde 
                                                                                   + " livros é de R$ " 
                                                                                   + CA;
                localStorage.setItem("B", CA);
                document.getElementById("conteudo").innerHTML = "Você selecionou " + Qtde 
                                                                                   + " livros!" 
                                                                                   + " No Criterio A, o desconto obtido na compra de " 
                                                                                   + Qtde 
                                                                                   + " livros é de R$ " 
                                                                                   + CA;
                document.getElementById("cupom").addEventListener("click", myFunction);
                }
            }
            if (CA == CC || CB > CA && CB > CC){
                document.getElementById("conteudo").innerHTML = "Você selecionou " + Qtde 
                                                                                   + " livros!" 
                                                                                   + " No Criterio B, o desconto obtido na compra de " 
                                                                                   + Qtde 
                                                                                   + " livros é de R$ " 
                                                                                   + CB;
                localStorage.setItem("B", CB);
                document.getElementById("conteudo").innerHTML = "Você selecionou " + Qtde 
                                                                                   + " livros!" 
                                                                                   + " No Criterio B, o desconto obtido na compra de " 
                                                                                   + Qtde 
                                                                                   + " livros é de R$ " 
                                                                                   + CB;
                document.getElementById("cupom").addEventListener("click", myFunction);
            }
            if (CA == CB || CC > CA && CC > CB){
                document.getElementById("conteudo").innerHTML = "Você selecionou " + Qtde 
                                                                                   + " livros!" 
                                                                                   + " No Criterio C, o desconto obtido na compra de " 
                                                                                   + Qtde 
                                                                                   + " livros é de R$ " 
                                                                                   + CC;
                localStorage.setItem("B", CC);
                document.getElementById("conteudo").innerHTML = "Você selecionou " + Qtde 
                                                                                   + " livros!" 
                                                                                   + " No Criterio C, o desconto obtido na compra de " 
                                                                                   + Qtde 
                                                                                   + " livros é de R$ " 
                                                                                   + CC;
                document.getElementById("cupom").addEventListener("click", myFunction);
            }
        }
