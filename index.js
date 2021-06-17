console.log ("Bem vindo ao delivery de bebidas. Primeiramente:")
var idade = prompt ("Digite sua idade")

if (idade >= 18) {
console.log ("Qual seu pedido?");
}
else {
  prompt ("Fim");
}

var i = 0;
for (; i < 3; i++) {
var bebida = prompt("");

switch (bebida) {
    case "brahma":
        mensagem = "Brahma Latão R$ 5,99";
        break;
    case "budweiser":
        mensagem = "Budweiser 300ml R$ 4,99";
        break;
    case "heineken":
      mensagem = "Heineken 600ml R$ 7,99"
    default:
        mensagem = "Obrigado!";
}
}