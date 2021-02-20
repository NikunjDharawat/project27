class Quiz {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
     async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contetantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
      
        question = new Question()
        question.display();
      }
    }
    play(){
      form.hide();
      textSize(30);
      text("game start",120,100);
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        var display_position = 130;
        for(var plr in allPlayers){
          if(plr === "player" + player.index)
          fill("red")
          
          else
          fill("black");
        }
      }
    }
       
    }

