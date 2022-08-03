
let total = 0

function adicionar() {
    let frutaSelecionada = document.getElementById("fruta").value

    switch (frutaSelecionada) {
        case "banana":
            total += 2
            alert("Banana R$ 2.00 Adicionada, Valor total da Compra" + total)
            break;

        case "maça":
            total += 4
            alert("Maça R$ 4.00 Adicionada, Valor total da Compra" + total)
            break;

        case "abacate":
            total += 2.5
            alert("Acabate R$ 2.50 Adicionada, Valor total da Compra" + total)
            break;

        case "abacaxi":
            total += 3.8
            alert("abacaxi R$ 3.80 Adicionada, Valor total da Compra" + total)
            break;

        default:
            alert("Por Gentileza Selecione Uma Fruta")
            break;
    }

}


function finalizar() {
    alert("Sua compra foi Realizada com Sucesso" + total + " Reais")
    total = 0
}
