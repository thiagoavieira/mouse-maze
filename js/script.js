// Executada automaticamente e mantém tdas as var locais (evita conflito de memória)
(function(){
    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");

    // variáveis para trabalhar com a movimentação do personagem na tela
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40; // códigos da seta do teclado
    var mvLeft = mvUp = mvRight = mvDown = false; // variáveis referentes a movi com valores booleanos

    // variavel para definir o tamanho dos blocos
    var tileSize = 32; // 32px

    // variaveis do player
    var player = {
        x: tileSize + 2, // 2px para ter uma distância
        y: tileSize + 2,
        width: 28, // largura de 28px
        height: 28
    };

    // teremos um array com varios arrays, ou seja, um array de múltiplas dimensões (neste caso, 20x20)
    // deixar um lembrete aqui pra eu mudar o array aleatoriamente
    var maze = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
		[1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1],
		[1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1],
		[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1],
		[1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1],
		[1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
		[1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
		[1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
		[1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1],
		[1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
		[1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];
    
    window.addEventListener("keydown", keydownHandler, false); // evento para aguardar a interação de alguma tecla, que dispara uma função
    window.addEventListener("keyup", keyupHandler, false); // evento para quando soltar alguma tecla, que dispara uma função
    
    function keydownHandler(e){
        var key = e.keyCode; // recebe o código da tecla que foi pressionada que disparou o evt
        switch(key){ // switch case padrão do evt, trocando o valor bool
            case LEFT:
                mvLeft = true;
                break;
            case UP:
                mvUp = true;
                break;
            case RIGHT:
                mvRight = true;
                break;
            case DOWN:
                mvDown = true;
                break;
        }
    }

    function keyupHandler(e){
        var key = e.keyCode; // recebe o código da tecla que foi despressionada que disparou o evt
        switch(key){ // switch case padrão do evt, trocando novamente o valor bool
            case LEFT:
                mvLeft = false;
                break;
            case UP:
                mvUp = false;
                break;
            case RIGHT:
                mvRight = false;
                break;
            case DOWN:
                mvDown = false;
                break;
        }
    }

    function update(){ // fun para atualizar os movimentos do jogo
        if(mvLeft && !mvRight){ // verificar o mvLeft se é VERDADEIRO e o mvRight armazenando FALSO, ou seja o personagem vai ser mover a ESQUERDA

        }
    } 

    function render(){ // fun para desenhar os elementos na tela
        ctx.save(); // pego o contexto deste ponto e salvo na memória
        for(var row in maze){ // p/ cada linha ↴
            for(var col in maze[row]){  // pegar os índices da coluna
                var tile = maze[row][col];
                if(tile === 1){
                    var x = col * tileSize; // recebe o valor da col multiplicado por algum valor especifico, (neste caso, 32px) para assim desenhar um gráfico na tela
                    var y = row * tileSize; // eixo vertical da matriz
                    ctx.fillRect(x, y, tileSize,tileSize); // fun que desenha um retangulo na tela
                }
            }
        }
        ctx.fillStyle = "#00f";
        ctx.fillRect(player.x, player.y, player.width, player.height); // 34 em x e y, 28 de altura e largura
        ctx.restore(); // volta com todas as propriedades que tinham sido salvas antes das alterações (cor)
    }
    
    function loop(){ 
        update();
        render();

        requestAnimationFrame(loop, cnv); // chamada recursiva
    }
    requestAnimationFrame(loop, cnv); // primeira chamada para executar
}());