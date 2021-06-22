var perso = "p";
var trap = 5;

// variables pour gérer la position 
var x = 0;
var y = 1;

var win;
var level = 1;

// variable pour initialiser le timer 
var seconde = 0;
var minutes = 0;
var timerTotal;


// fonction qui permet de start le game 
function start(){
  // appel la fonction piege et de plus fais spawn 3 piege 
  piege(3);
  // permet de placer le perso
  board[x][y] = perso;
  // affiche le Labyrinthe 
  console.log(board);
  
  //permet de mettre a jour le timer toute les secondes
  timerTotal = window.setInterval(startTimer,1000);
  
  createTable();
  
  
}



// creation du Première etages les 1 sont les mures et le 0 le chemin 
var board = [
  [ 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [ 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
  [ 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1],
  [ 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [ 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var board1 = [
  [ 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [ 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
  [ 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1],
  [ 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [ 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// creation du Deuxième etages
var board2 = [
  [ 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [ 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [ 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1],
  [ 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
  [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [ 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [ 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [ 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [ 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [ 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//// creation du Troisième etages
var board3 = [
  [ 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [ 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
  [ 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [ 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [ 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


// Début des fonctions de déplacement 
//fonction qui permet de deplacer le perso vers le haut
function haut(){
  // condition qui permet de remplacer le perso par 0 pour garder le chemin 
  if (board[x][y] == "p"){
    board[x][y] = 0;
  }

  // condition qui dit que si la prochaine valeur sur la quelle je vais me deplacer 
  // est 1 donc un mur alors tu ni va pas et tu envoie "aie"
  if (board[x-1][y] == 1){
    board[x][y] = "p";
    console.log("aie")
  }
  // sinon si la valeur est 0 donc le chemin, tu peut te déplacer et nous montrer le 
  // résultat 
  else if (board[x-1][y] == 0){
    x = x-1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
  }
  // condition qui permet de changer d'étages donc si la valeur sur la quelle tu va te
  // déplacer est 3 alors tu rajoute 10seconde, tu change la variable lvl,
  // tu montre le resultat et tu indique que la personne à fini le lvl
  else if (board[x-1][y] == 3){
    x = x-1;
    board[x][y] = perso;

    console.log(board);
    updateLaby()
    console.log("Fin du level: " + level)
    level += 1;
    // Appelle de la fonction qui permet de changer de niveau
    switchlevel()
  }
  // condition pour dire si on a win donc si la prochaine case sur la quelle tu
  // te déplacer esr 4 alors (win=true)
  else if (board[x-1][y] == 4){
    x = x-1;
    board[x][y] = 0;
    console.log(board);
    updateLaby();
    win();
  }
  
  // condition qui dit que si la prochaine valeur sur la quelle je vais me deplacer 
  // est 5 alors tu revient a la posistion de départ et tu envoir "oh mince !!"
  // et enleve 2 seconde dans le timer
  else if (board[x-1][y] == 5){
    if (board[x][y] == "p"){
      board[x][y] = 0;
    }
    board[x-1][y] = 0;
    console.log("Oh mince !!");
    x = 0;
    y = 1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
  }
}

function bas(){
  if (board[x][y] == "p"){
    board[x][y] = 0;
  }

  if (board[x+1][y] == 1){
    board[x][y] = "p";
    console.log("aie")
  }
  else if (board[x+1][y] == 0){
    x = x+1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
    // board.splice([x], [y], perso);
  }

  else if (board[x+1][y] == 3){
    x = x+1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
    console.log("Fin du level: " + level);
    level += 1;
    switchlevel()
  }else if (board[x+1][y] == 4){
    x = x+1;
    board[x][y] = 0;
    console.log(board);
    updateLaby();
    win();
  }

  else if (board[x+1][y] == 5){
    if (board[x][y] == "p"){
      board[x][y] = 0;
    }
    board[x+1][y] = 0;
    console.log("Oh mince !!");
    x = 0;
    y = 1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
  }
}

function droite(){
  if (board[x][y] == "p"){
    board[x][y] = 0;
  }
  
  if (board[x][y+1] == 1){
    board[x][y] = "p";
    console.log("aie")
  }
  else if (board[x][y+1] == 0){
    y = y+1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
  }

  else if (board[x][y+1] == 3){
    y = y+1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
    console.log("Fin du level: " + level);
    level += 1;
    switchlevel()
  }else if (board[x][y+1] == 4){
    y = y+1;
    board[x][y] = 0;
    console.log(board);
    updateLaby();
    win();
  }

  else if (board[x][y+1] == 5){
    if (board[x][y] == "p"){
      board[x][y] = 0;
    }
    board[x][y+1] = 0;
    console.log("Oh mince !!");
    x = 0;
    y = 1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
  }
}

function gauche(){
  if (board[x][y] == "p"){
    board[x][y] = 0;
  }
  
  if (board[x][y-1] == 1){
    board[x][y] = "p";
    console.log("aie")
  }
  else if (board[x][y-1] == 0){
    y = y-1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
  }

  else if (board[x][y-1] == 3){
    y = y-1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
    console.log("Fin du level: " + level);
    level += 1;
    switchlevel()
  }else if (board[x][y-1] == 4){
    y = y-1;
    board[x][y] = 0;
    board[x][y-1] = perso;
    console.log(board);
    updateLaby();
    win();
  }

  else if (board[x][y-1] == 5){
    if (board[x][y] == "p"){
      board[x][y] = 0;
    }
    board[x][y-1] = 0;
    console.log("Oh mince !!");
    x = 0;
    y = 1;
    board[x][y] = perso;
    console.log(board);
    updateLaby()
  }
}
// Fin des fonctions de déplacement 

// fonction qui permet de changer de lvl
function switchlevel(){
    board = board;
    x = 0;
    y = 1;
    board[x][y] = perso;
    piege(3)
    console.log(board);
    updateLaby()
  // condition qui dit que si le (lvl==2) alors tu remplace l'ancien Labyrinthe
  // par le nouveau Labyrinthe (étage)
  // permet aussi d'ajouter des pieges en avec la fonction piege(10)
  if (level == 2){
    board = board2;
    x = 0;
    y = 1;
    board[x][y] = perso;
    piege(6)
    console.log("Début du niveau: " +level)
    console.log(board);
    updateLaby()
  }
  // condition qui dit que si le (lvl==3) alors tu remplace l'ancien Labyrinthe
  // par le nouveau Labyrinthe (étage)
  // permet aussi d'ajouter des pieges en avec la fonction piege(10) 
  else if (level == 3){
    board = board3;
    x = 0;
    y = 1;
    board[x][y] = perso;
    piege(10)
    console.log("Début du niveau: " +level)
    console.log(board);
    updateLaby()
  }
}


// fonction pour géneré des pieges aleatoire dans le Labyrinthe  
function piege(nbpieges){

  z = 0;

  // boucle pour ajouter le nombre de piege voulu dans chaque Labyrinthe 
  while (z < nbpieges){
    var min= 0; 
    var max= board.length;
    
    // permet de généré des nombre aléatoire
    var random = Math.floor(Math.random() * (max - min)) + min; 

    // ajoute les pieges a leur posistion
    board[random][random] = trap;
    board[random][random] = trap;
    z +=1;
  }
}

// fonction timer
function startTimer(){
  seconde++;

  // si seconde/60 est Strictement egale a 1 alors seconde sera egale a 0 et minute
  // augmente de 1
  if (seconde/60 ===1){
    seconde=0;
    minutes++;

  }
  // si les secondes son inferieur a 10 tu rajoute un 0 devant 
  if (seconde < 10){
    seconde = "0"+seconde;
  }

  // permet d'afficher le temps sur html
  document.getElementById('timer').innerHTML = minutes +":"+seconde; 
}

function resetTimer(){
  clearInterval(timerTotal);
  minutes = "0";
  seconde = "00";
  document.getElementById('timer').innerHTML = minutes +":"+seconde;
}


var table;
var myTableDiv;


// fonction qui permet de créer le tableau 
function createTable(){
  myTableDiv = document.getElementById("myDynamicTable");

  table = document.createElement('TABLE');
  table.setAttribute("id", "laby")

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < board.length; i++) {
    var tr = document.createElement('TR');
    tr.setAttribute("id", "TR");
    tableBody.appendChild(tr);

    for (var j = 0; j < board.length; j++) {
      var td = document.createElement('TD');
      td.setAttribute("id", "TD");
      td.width = '33';
      td.height = '33';
      td.appendChild(document.createElement('div'));
      td.appendChild(document.createTextNode(board[i][j]));
      tr.appendChild(td);
      
      if (board[i][j] == 1){
        td.setAttribute("id", "mur");
      }else if (board[i][j] == 5){
        td.setAttribute("id", "piege");
      }
      else if (board[i][j] == 3){
        td.setAttribute("id", "etage");
      }
      else if (board[i][j] == 0){
        td.setAttribute("id", "chemin");
      }
      else if (board[i][j] == "p"){
        td.setAttribute("id", "perso");
      }
      else if (board[i][j] == 2){
        td.setAttribute("id", "entrer");
      }
      else if (board[i][j] == 4){
        td.setAttribute("id", "fin");
      }

    }
    
  }
  myTableDiv.appendChild(table);
};

// fonction qui permet de suprimer le table et de le remplacer 
// par le tableau mis a jour; 
function updateLaby(){ 
  myTableDiv.removeChild(table);
  createTable();
}

document.onkeydown = function(event)
	{	
		if (event.keyCode == 37)  gauche(); 
		if (event.keyCode == 39) droite() ; 
		if (event.keyCode == 38) haut();  
		if (event.keyCode == 40) bas() ; 
	}


function win(){
  var msg = ("Vous avez gagné !! Avec un temps de : " + minutes + ":" + seconde);
  myTableDiv.removeChild(table);
  clearInterval(timerTotal);
  document.getElementById("msgWinH1").innerHTML = msg;
}


let togg1 = document.getElementById("btnStart");
let d1 = document.getElementById("btnStart");
togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
})