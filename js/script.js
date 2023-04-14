// Executada automaticamente e mantém tdas as var locais (evita conflito de memória)
(function(){
    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");

    // variaveis para limpar a tela
    var WIDTH = cnv.width, HEIGHT = cnv.height;

    // variáveis para trabalhar com a movimentação do personagem na tela
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40; // códigos da seta do teclado
    var mvLeft = mvUp = mvRight = mvDown = false; // variáveis referentes a movi com valores booleanos

    // variavel para definir o tamanho dos blocos
    var tileSize = 64; // 32px

    // array com as paredes
    var walls = [];

    // variaveis do player
    var player = {
        x: tileSize + 2, // 2px para ter uma distância
        y: tileSize + 2,
        width: 28, // largura de 28px
        height: 28,
        speed: 1.5 // velocidade do boneco
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

    var T_WIDTH = maze[0].length * tileSize, // retorna o numero de colunas do labirinto * o tamanho da célul
        T_HEIGHT = maze.length * tileSize;
    
    for(var row in maze){ // p/ cada linha ↴
        for(var col in maze[row]){  // pegar os índices da coluna
            var tile = maze[row][col];
            if(tile === 1){
                var wall = { // declarar que vai ser um objeto com atributos
                    x: tileSize * col, // tamanho dos bloquinhos * coluna
                    y: tileSize * row,
                    width: tileSize, // altura e largura vai ser do tamanho da célula
                    height: tileSize 
                };
                // inserção do objeto no array de muros
                walls.push(wall);
            }
        }
    }

    var cam = {
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
        // 4 metodos que estabelecem os limites que o personagem pode se deslocar sem mover a camera
        innerLeftBoundary: function(){
            // ate 25% da largura total da camera a esquerda o personagem pode se deslocar sem interferir a camera em relação ao jogo
            return this.x + (this.width * 0.25);
        },
        innerRightBoundary: function(){
            return this.x + (this.width * 0.75);
        },
        innerTopBoundary: function(){
            return this.y + (this.height * 0.25);
        },
        innerBottomBoundary: function(){
            return this.y + (this.height * 0.75);
        }
    };

    function blockRectangle(objA, objB){ // player e muro
        // armazena a distancia dos objetos no eixo X -> este calculo retorna o ponto exato do ponto A no tabuleiro
        var distX = (objA.x + objA.width / 2) - (objB.x + objB.width / 2);
        // se estiver a direita, retorna um valor negativo, ao contrário, positivo, ou seja
        // objeto B a esquerda do objeto A, positivo
        var distY = (objA.y + objA.height / 2) - (objB.y + objB.height / 2);
        // agora é preciso saber o valor da soma das metades da largura e da altura dos objetos
        var sumWidth = (objA.width + objB.width) / 2;
        var sumHeight = (objA.height + objB.height) / 2;
        // agora é preciso saber se o valor absoluto da distância dos objetos em determinado eixo (X ou Y) é menor que
        // a soma das larguras ou soma das alturas
        if(Math.abs(distX) < sumWidth && Math.abs(distY) < sumHeight){ // se for verdade, colisão!!
            // verifica quantos pixels o objA invadiu para ajustar, voltar na sua posição
            var overlapX = sumWidth - Math.abs(distX);
            var overlapY = sumHeight - Math.abs(distY);
            // agora é preciso saber que lado ocorreu a colisão
            if(overlapX > overlapY){ // a colisão ocorreu no eixo Y, ou o obj bateu de cima pra baixo ou de baixo pra cima
                // se a dist em Y for maior que 0 isso quer dizer q o bloco estava acima do personagem
                objA.y = distY > 0 ? objA.y + overlapY : objA.y - overlapY;
            } else {
                objA.x = distX > 0 ? objA.x + overlapX : objA.x - overlapX;
            }
        }
    }

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
            player.x -= player.speed; // coordenada em x vai ser subtraida de x
        } else if (mvRight && !mvLeft){ // caso esteja indo para direita
            player.x += player.speed; //
        }
        if(mvUp && !mvDown){
            player.y -= player.speed;
        } else if (mvDown && !mvUp){
            player.y += player.speed;
        }

        // verificar se o personagem está colidindo com as paredes
        for(var i in walls){ // vai varrer todos os muros de walls
            var wall = walls[i]; // recebendo o objeto que está sendo referenciado pelo indice i no array de muros
            blockRectangle(player, wall); // pega um muro de cada vez e verifica se esta colidindo
        }

        if(player.x < cam.innerLeftBoundary()){ // se for menor que o limite esquerdo da camera
            cam.x = player.x - (cam.width * 0.25); // a cam recebe a pos do personagem - 25% da largura da cam
        }
        if((player.x + player.width) > cam.innerRightBoundary()){ // se for menor que o limite do direita da camera
            cam.x = player.x + player.width - (cam.width * 0.75); // a cam recebe a pos do personagem + a largura do personagem - 75% da largura da cam
        }
        if(player.y < cam.innerTopBoundary()){ // se for menor que o limite do topo da camera
            cam.y = player.y - (cam.height * 0.25); // a cam recebe a pos do personagem - 25% da largura da cam
        }
        if((player.y + player.height) > cam.innerBottomBoundary()){ // se for menor que o limite de baixo da camera
            cam.y = player.y + player.height - (cam.height * 0.75); // a cam recebe a pos do personagem + a largura do personagem - 75% da largura da cam
        }

        // fun que faz com que entre 0 e o limite a direita, respeite o limite da coordenada x
        cam.x = Math.max(0, Math.min(T_WIDTH - cam.width, cam.x));
        cam.y = Math.max(0, Math.min(T_HEIGHT - cam.height, cam.y));
    } 

    function render(){ // fun para desenhar os elementos na tela
        ctx.clearRect(0, 0, WIDTH, HEIGHT) // limpa a tela nas coordenadas 0 e 0, até a altura e largura total do canvas
        ctx.save(); // pego o contexto deste ponto e salvo na memória
        ctx.translate(-cam.x, -cam.y); // ajusta a camera co, os padroes definidos
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