var jogoIniciado = false;
function iniciarJogo(){
    jogoIniciado = true;
}

var score = 0;
var dificuldade = 0;
var dimensao = 0;

var maze = [];

function labirintoLevelUm(){
    maze = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1],
        [1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1],
        [1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1],
        [1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1],
        [1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1],
        [1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1],
        [1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1],
        [1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1],
        [1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1],
        [1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
        [1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1],
        [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    return maze;
}

function labirintoLevelDois(){
    maze = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1],
        [1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1],
        [1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1],
        [1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1],
        [1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1],
        [1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1],
        [1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1],
        [1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1],
        [1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
        [1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1],
        [1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1],
        [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];
    return maze;
}

function labirintoLevelTres(){
    maze = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1],
        [1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1],
        [1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1],
        [1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1],
        [1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1],
        [1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1],
        [1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1],
        [1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1],
        [1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1],
        [1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1],
        [1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
        [1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1],
        [1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1],
        [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
        [1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
        [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
        [1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];
    return maze;
}


// Executada automaticamente e mantém tdas as var locais (evita conflito de memória)
(function(){
    // Ativar movimento das teclas
    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");

    // variaveis para limpar a tela
    var WIDTH = cnv.width, HEIGHT = cnv.height;

    // variáveis para trabalhar com a movimentação do personagem na tela
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40; // códigos da seta do teclado
    var mvLeft = mvUp = mvRight = mvDown = false; // variáveis referentes a movi com valores booleanos

    // variavel para definir o tamanho dos blocos
    var tileSize = 96;
    var tileSrcSize = 162; // dimensoes de captura da imagem

    var img = new Image(); // instancia de um obj imagem atribuindo o arquivo de origem
        img.src = "img/novo conju sem queijo.png";
        img.addEventListener("load", function(){ // evt de carregamento da img que dispara uma função
            // jogo só renderiza, depois de carregar as imagens
            requestAnimationFrame(loop, cnv); // primeira chamada para executar
        }, false); 

    // Template do rato com queijo
    var imgWithCheese = new Image(); // instancia de um obj imagem atribuindo o arquivo de origem
        imgWithCheese.src = "img/novo conju com queijo.png";
    
    // Imagem do queijo
    var cheeseImg = new Image();
        cheeseImg.src = "img/Queijo.png";

    // Imagem da toca
    var tocaImg = new Image();
        tocaImg.src = "img/toca.png";

    var firstZeroFound = false; // variável para controlar se o primeiro zero foi encontrado
    var lastZeroRow = -1; // linha com o último zero encontrado (é reutilizado dentro da função de renderização)
    var lastZeroCol = -1; // coluna com o último zero encontrado (esse aq tb é)

    // variaveis do player
    var player = {
        x: (tileSize + dimensao) - 10, // 2px para ter uma distância
        y: (tileSize + dimensao) - 10 ,
        width: 72, // largura de 28px
        height: 55,
        speed: 5, // velocidade do boneco
        srcX: 0,
        srcY: tileSrcSize,
        countAnim: 0, // em qnt em qnt tempo tem q mudar a animacao
        carryingCheese: false
    };

    // teremos um array com varios arrays, ou seja, um array de múltiplas dimensões (neste caso, 20x20)
    // deixar um lembrete aqui pra eu mudar o array aleatoriamente
    maze = labirintoLevelUm();

    // array com as paredes
    var walls = [];
    var T_WIDTH = maze[0].length * (tileSize + dimensao), // retorna o numero de colunas do labirinto * o tamanho da célula
        T_HEIGHT = maze.length * (tileSize + dimensao);
    
    function redefinirCenario(){
        walls = [];
        T_WIDTH = maze[0].length * (tileSize + dimensao), // retorna o numero de colunas do labirinto * o tamanho da célul
        T_HEIGHT = maze.length * (tileSize + dimensao);
    
        for(var row in maze){ // p/ cada linha ↴
            for(var col in maze[row]){  // pegar os índices da coluna
                var tile = maze[row][col];
                if(tile === 1){
                    var wall = { // declarar que vai ser um objeto com atributos
                        x: (tileSize + dimensao) * col, // tamanho dos bloquinhos * coluna
                        y: (tileSize + dimensao) * row,
                        width: (tileSize + dimensao), // altura e largura vai ser do tamanho da célula
                        height: (tileSize + dimensao) 
                    };
                    // inserção do objeto no array de muros
                    walls.push(wall);
                }
            }
        }
    }
    
    redefinirCenario();

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
        if(jogoIniciado === false){
            return;
        }
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
        if(jogoIniciado === false){
            return;
        }
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
            player.srcY = tileSrcSize + player.height * 2;
        } else if (mvRight && !mvLeft){ // caso esteja indo para direita
            player.x += player.speed; //
            player.srcY = tileSrcSize + player.height * 3;
        }
        if(mvUp && !mvDown){
            player.y -= player.speed;
            player.srcY = tileSrcSize + player.height * 1;
        } else if (mvDown && !mvUp){
            player.y += player.speed;
            player.srcY = tileSrcSize + player.height * 0;
        }

        if(mvLeft || mvRight || mvUp || mvDown){
            player.countAnim++; // contador da animação
            // /5 é o valor da frequencia q ta mudando a img, ou seja, + aguarda + tempo
            // este valor nunca pode passar de 7
            if(player.countAnim >= 80){
                player.countAnim = 0;
            }
            player.srcX = Math.floor(player.countAnim / 10) * player.width; // 3 * 8 = 24, 5 * 8 = 40;
        } else {
            player.srcX = 0;
            player.countAnim = 0;
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

    //var firstZeroFound = false; // variável para controlar se o primeiro zero foi encontrado
    function render(){ // fun para desenhar os elementos na tela
        ctx.clearRect(0, 0, WIDTH, HEIGHT); // limpa a tela nas coordenadas 0 e 0, até a altura e largura total do canvas
        ctx.save(); // pego o contexto deste ponto e salvo na memória
        ctx.translate(-cam.x, -cam.y); // ajusta a camera co, os padroes definidos
        firstZeroFound = false; // redefinir a variável antes do loop externo começar
        lastZeroRow = -1;
        lastZeroCol = -1;

        var playerRow = Math.floor(player.y / (tileSize + dimensao));
        var playerCol = Math.floor(player.x / (tileSize + dimensao));
        for(var row in maze){ // p/ cada linha ↴
            for(var col in maze[row]){  // pegar os índices da coluna
                var tile = maze[row][col];
                var x = col * (tileSize + dimensao); // recebe o valor da col multiplicado por algum valor especifico, (neste caso, 32px) para assim desenhar um gráfico na tela
                var y = row * (tileSize + dimensao); // eixo vertical da matriz
                ctx.drawImage(
                    player.carryingCheese ? imgWithCheese : img,
                    tile * tileSrcSize, 0, tileSrcSize, tileSrcSize, // se for chao 0, se for parede 96
                    x, y, (tileSize + dimensao), (tileSize + dimensao)
                );
                // encontra o último zero na matriz
                if (tile === 0) {
                    if (!firstZeroFound) {
                    ctx.drawImage(tocaImg, x, y, (tileSize + dimensao), (tileSize + dimensao));
                    firstZeroFound = true;
                    } else {
                    lastZeroRow = row;
                    lastZeroCol = col;
                    }
                }
            }
        }
        // desenha o queijo na posição encontrada (penultimo array dos 20 e no ultimo 0 encontrado)
        if (lastZeroRow !== -1 && lastZeroCol !== -1) {
            var x = lastZeroCol * (tileSize + dimensao);
            var y = lastZeroRow * (tileSize + dimensao);
            ctx.drawImage(cheeseImg, x, y, (tileSize + dimensao), (tileSize + dimensao));
        }
        ctx.drawImage(
            player.carryingCheese ? imgWithCheese : img,
            player.srcX, player.srcY, player.width, player.height,
            player.x, player.y, player.width, player.height
        );
        if (playerRow === 18 && playerCol === 18) {
            player.carryingCheese = true;
            console.log("Você pegou o queijo!");
        }
        if (playerRow === 1 && playerCol === 1) {
            if (player.carryingCheese) {
                player.carryingCheese = false;
                dificuldade += 1;
                if (dimensao < 165){
                    dimensao += 32;
                }
                if (dificuldade === 0){
                    maze = labirintoLevelUm();
                } else if (dificuldade === 1){
                    maze = labirintoLevelDois();
                } else {
                    maze = labirintoLevelTres();
                }
                redefinirCenario();

                ctx.drawImage(
                    player.carryingCheese ? imgWithCheese : img,
                    tile * tileSrcSize, 0, tileSrcSize, tileSrcSize, // se for chao 0, se for parede 96
                    x, y, (tileSize + dimensao) + dimensao, (tileSize + dimensao) + dimensao
                );
                score += 10 * dificuldade;
                document.getElementById("score").innerHTML='Score: ' + score;
                document.getElementById("level").innerHTML='Dificuldade: ' + dificuldade;
                return;
                //jogoIniciado = false;
            } else {
                console.log("Você precisa pegar o queijo antes de voltar para a toca.");
            }
        }
        ctx.restore(); // volta com todas as propriedades que tinham sido salvas antes das alterações (cor)
    }
    
    function loop(){ 
        update();
        render();

        requestAnimationFrame(loop, cnv); // chamada recursiva
    }

    /* Depois irei fazer uma atualização com timer
    const countdown = () => {
        const now = new Date().getTime();
        const countDate = new Date(now + 3 * 60 * 1000);
        const remainingTime = countDate - now;
    
        const millisecond = second * 1000;
        const second = minute * 60;
        const minute = second * 60;
        const hour = minute * 60;
    
        const textMinute = Math.floor((remainingTime % hour) / minute);
        const textSecond = Math.floor((remainingTime % minute) / second);
        const textMilliSecond = Math.floor((remainingTime % second) / millisecond);
    
        document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
        document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
        document.querySelector(".millisecond").innerText = textMilliSecond > 0 ? textMilliSecond : 0;
    };
    
    const startButton = document.getElementById('startGame');
    
    startButton.addEventListener('click', function() {
      countdown();
    });
    */
}());