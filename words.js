
function loadCanvas() {
  var canvas = document.getElementById('canvas');

  if(canvas.getContext('2d')) {
    var startScreen = true;
    var screenTwo = false;
    var screenThree = false;
    var context = canvas.getContext('2d');

    context.fillStyle = '#FFFFFF';
    context.fillRect(0 , 0 , 600 , 600);
    context.font = '40px Cambria';
    context.fillStyle = '#000000';
    context.textAlign = 'center';
    context.fillText('Words, Words, Words',300, 300);
    context.font = '20px Cambria';
    context.fillText('Press space to begin', 300, 400);
    var keysDown = {};
    addEventListener('keydown', function(e){
      var x = e.keyCode;
      keysDown[x] = true;
      if(x == 32 && startScreen){
        startScreen = false;
        screenTwo = true;
        screen2();
      }
    }, false)
    function screen2(){
      context.fillStyle = '#FFFFFF';
      context.fillRect(0 , 0 , 600 , 600);

      var words = "Words are a powerful thing...";
      var count = 0;
      var pause = 175;
      var chars;
      var finished = false;

      function draw() {
          count ++;
          chars = words.substr(0, count);
          context.fillStyle = '#FFFFFF';
          context.fillRect(0 , 0 , 600 , 600);
          context.font = '20px Cambria';
          context.fillStyle = '#000000';
          context.fillText(chars, 300, 300);

          if (count < words.length) setTimeout(draw, pause);
          else finished = true;
          }
      draw();
      addEventListener('keydown', function(e){
        var x = e.keyCode;
        keysDown[x] = true;
        if(x == 32 && screenTwo && finished){
          screenTwo = false;
          screenThree = true;
          screen3();
        }
      }, false)


    }
    function screen3(){
      var right = false;
      var left = false;
      var up = false;
      var enter = false;
      var spritex = 100;
      var isStanding = true;
      var isJumping = false;
      var cowboy = false;
      var astro = false;
      var pirate = false;
      var displayBook1 = true;
      var displayBook2 = true;
      var displayBook3 = true;
      var displayBook4 = true;
      var displayBook5 = true;
      var displayLight = true;
      var hasFallen = false;
      var beforeRun = true;
      var pastWall = false;
      var displayMonster = false;
      var displayMonster1 = true;
      var displayMelt = false;
      var displayPencil = true;
      var writeScreen = false;
      var counter = 0;
      var standingOnSomething = false;
      var canMoveForward = true;
      var canMoveBackwards = true;
      var translation = 0;
      var spritey = 385;
      var g = -9.8;
      var t;
      var canJump = true;
      var sprite = new Image();
      var books = new Image();
      var book1 = new Image();
      var book2 = new Image();
      var book3 = new Image();
      var book4 = new Image();
      var book5 = new Image();
      var galaxy = new Image();
      var ocean = new Image();
      var wildwest = new Image();
      var cactus1 = new Image();
      var cactus2 = new Image();
      var light = new Image();
      var monster = new Image();
      var monster1 = new Image();
      var monster2 = new Image();
      var monsterMelt = new Image();
      var gradient = new Image();
      var pencil = new Image();

      addEventListener("keydown", function (e) {
        var x = e.keyCode;
        if(x == 39) right = true;
        if(x == 37) left = true;
        if(x == 38) up = true;
        if(x == 13) enter = true;
      }, false);

      addEventListener("keyup" , function(e1) {
        var x = e1.keyCode;
        if(x == 39) right = false;
        if(x == 37) left = false;
        if(x == 38) up = false;
        if(x == 13) enter = false;
      } , false);

        if(screenThree) var intervalID = window.requestAnimationFrame(walk);



      function walk(){
        var now = (new Date).getTime();
        isStanding = true;
        isJumping = false;

        if(right && spritex <= 400 && canMoveForward){
          spritex += 6;
          isStanding = false;
        }
        else if(left && ((spritex >= 10 && !hasFallen) || spritex >= 85)&& canMoveBackwards){
           spritex -= 6;
           isStanding = false;
        }
        if(spritex >= 400 && right && canMoveForward){
           translation += 6;
           isStanding = false;
        }
        if((spritey < 385 || (spritex >= 3330-translation && !hasFallen)) && !standingOnSomething) {
          up = false;
          spritey -= g*(now - t)/1000 + 6;
          isStanding = false;
          isJumping = true;
          if(spritey >= 385 && (spritex <= 3330-translation || hasFallen)) {
            spritey = 385;
            canJump = true;
          }
        } else isJumping = false;

        if((spritey == 385) && up && canJump) {
          t = (new Date).getTime();
          spritey -= 6;
          up = false;
          canJump = false;
        }
        if(standingOnSomething && up){
          t = (new Date).getTime();
          spritey -= 6;
          up = false;
          canJump = false;
        }
        if(spritex >= 830-translation && enter && displayBook1){
          cowboy = true;
          displayBook1 = false;
        }
        if(spritex >= 1330-translation && enter && displayBook2){
          cowboy = false;
          astro = true;
          displayBook2 = false;
        }
        if(spritex >= 1830-translation && enter && displayBook3){
          astro = false;
          pirate = true;
          displayBook3 = false;
        }
        if(spritex >= 2330-translation && enter && displayBook4){
          pirate = false;
          displayBook4 = false;
        }
        if(hasFallen && spritex >= 4820-translation && enter && displayLight){
          displayLight = false;
        }
        if(spritex >= 8530-translation && enter && displayPencil){
          displayPencil = false;
          screenThree = false;
          writeScreen = true;
        }

        if(spritex >= 2470-translation && spritex <= 2480-translation && spritey >= 345) canMoveForward = false;
        else if(spritex >= 2500-translation && spritex <= 2510-translation && spritey >= 310) canMoveForward = false;
        else if(spritex >= 2535-translation && spritex <= 2545-translation && spritey >= 275) canMoveForward = false;
        else if(spritex >= 2560-translation && spritex <= 2570-translation && spritey >= 235) canMoveForward = false;
        else if(spritex >= 2590-translation && spritex <= 2600-translation && spritey >= 200) canMoveForward = false;
        else if(spritex >= 830-translation && spritex <= 840-translation && !cowboy) canMoveForward = false;
        else if(spritex >= 1330-translation && spritex <= 1340-translation && !astro) canMoveForward = false;
        else if(spritex >= 1830-translation && spritex <= 1840-translation && !pirate) canMoveForward = false;
        else if(spritex >= 2330-translation && spritex <= 2340-translation && pirate) canMoveForward = false;
        else if(spritex >= 4820-translation && spritex <= 4830-translation && displayLight && hasFallen) canMoveForward = false;
        else if(spritex >= 8530-translation && spritex <= 8540-translation && displayPencil) canMoveForward = false;
        else canMoveForward = true;

        if(spritex >= 2480-translation && spritex <= 3325-translation && spritey >= 340 && spritey <= 352){
          standingOnSomething = true;
          spritey = 345;
        }
        else if(spritex >= 2510-translation && spritex <= 3325-translation && spritey >= 305 && spritey <= 317){
           standingOnSomething = true;
           spritey = 310;
        }
        else if(spritex >=2545-translation && spritex <= 3325-translation && spritey >=270 && spritey <=282){
          standingOnSomething = true;
          spritey = 275;
        }
        else if(spritex >= 2570-translation && spritex <= 3325-translation && spritey >= 230 && spritey<=242){
          standingOnSomething = true;
          spritey = 235;
        }
        else if(spritex >= 2600-translation && spritex <= 3325-translation && spritey >= 195 && spritey <= 207){
          standingOnSomething = true;
          spritey = 200;
        }
        else standingOnSomething = false;

        if(spritex >= 3325-translation && spritex <= 3345-translation && !hasFallen) canMoveBackwards = false;
        else canMoveBackwards = true;

        context.fillStyle = '#FFFFFF';
        context.fillRect(0 , 0 , 600 , 600);
        if(astro) context.drawImage(galaxy, 0, 0);
        else if(cowboy){
          context.drawImage(wildwest, 0, 0);
          context.drawImage(cactus1, 1000-translation, 420);
          context.drawImage(cactus2, 1200-translation, 420);
        }
        else if(pirate) context.drawImage(ocean, 0, 0);

        if(hasFallen){
          if(displayLight){
            context.fillStyle = '#000000';
            context.fillRect(0, 0, 600, 600);
            context.drawImage(light, spritex-75, 0);
            context.drawImage(book5, 4890-translation, 435);
            context.font = '15px Cambria';
            context.fillText('annoying', 4000-translation, 300);
            context.fillText('stupid', 4200-translation, 250);
            context.fillText('failure', 4400-translation, 320);
            context.fillText('not good enough', 4650-translation, 380);
          }
          else{
            if(beforeRun){
              canMoveForward = false;
              canMoveBackwards = false;
              canJump = false;
            }
            context.fillStyle = "#262626";
            context.fillRect(0, 0, 600, 600);
            context.drawImage(monster, 4400-translation, 100);
            setTimeout(moveScreen, 1750);
            function moveScreen(){
              if(translation <= 4850){
                translation += 2;
                spritex -= 2;
                window.requestAnimationFrame(moveScreen);
              }
              else{
                if(spritex < 10) spritex = 10;
                if(counter == 0){
                  canMoveForward = true;
                  canMoveBackwards = true;
                  canJump = true;
                  counter++;
                }
                beforeRun = false;
              }
            }
            context.fillStyle = "#FFFFFF";
            context.font = '20px Cambria';
            context.fillText('Run!', 5150-translation, 200);
            context.fillStyle = "#000000";
            if(!pastWall) context.fillRect(5900-translation, 0, 300, 600);
            if(spritex >= 5825-translation && !pastWall){
              canMoveForward = false;
              canMoveBackwards = false;
              canJump = false;
              if(displayMonster1){
                context.drawImage(monster1, 5100-translation, 100);
                setTimeout(melt, 8000);
              }


            }

            function melt(){
              if(displayMonster1){
                displayMonster1 = false;
                displayMelt = true;
              }
            }
            if(displayMelt){
              context.drawImage(monsterMelt, 5465-translation, 100);
              setTimeout(wall, 4000);
            }
            function wall(){
              pastWall = true;
              canJump = true;

            }
            if(pastWall){
              context.drawImage(gradient, 5900-translation, 0, 2400, 600);
              context.fillStyle = "#FFFFFF";
              context.fillRect(8300-translation, 0, 1200, 600);
              if(spritex >= 8600-translation){
                context.fillStyle = "#FFFFFF";
                context.fillRect(0, 0, 600, 600);
              }
            }

            context.fillStyle = "#000000";
            context.font = '20px Cambria';
            context.fillText('But I learned to write my own words', 6300-translation, 200);
            context.fillText('my own stories', 6800-translation, 200);
            context.fillText('my own thoughts', 7200-translation, 200);
            context.fillText('I could take back the words that hurt me', 7700-translation, 200);
            context.fillText('I could write my own ending', 8200-translation, 200);
            if(displayPencil) context.drawImage(pencil, 8600-translation, 430);
            if(writeScreen){
              screen4();
            }
          }
        }
        if(screenThree) context.drawImage(sprite, spritex, spritey);

        if(spritey >= 650){
          hasFallen = true;
          spritey = -250;
          spritex = 50;
          translation += 600;
        }

        context.font = '20px Cambria';
        if(astro) context.fillStyle = '#FFFFFF'
        else context.fillStyle = '#000000';
        context.fillText('move with arrow keys', 300-translation, 200);
        context.fillText('press enter to read a book', 300-translation, 250);
        context.fillText('I grew up reading and writing', 800-translation, 200);
        if(displayBook1) context.drawImage(book1, 900-translation, 435);
        context.fillText('I loved words', 1300-translation, 200);
        if(displayBook2) context.drawImage(book2, 1400-translation, 435);
        context.fillText('they let me be anything I wanted', 1800 - translation, 200);
        if(displayBook3) context.drawImage(book3, 1900-translation, 435);
        context.fillText('they inspired me', 2300-translation, 200);
        if(displayBook4) context.drawImage(book4, 2400-translation, 435);
        if(!hasFallen) context.drawImage(books, 2500-translation, 130);
        if(!hasFallen) context.fillText('but words can also hurt', 3325-translation, 100);

        if(screenThree) var intervalID1 = window.requestAnimationFrame(walk);

        if(isStanding){
          if(cowboy) sprite.src = 'cowboy1.png';
          else if(astro) sprite.src = 'astro1.png';
          else if(pirate) sprite.src = 'pirate1.png';
          else sprite.src = 'sprite1.png';
        }
        else if(isJumping){
          if(cowboy) sprite.src = 'cowboy2.png';
          else if(astro) sprite.src = 'astro2.png';
          else if(pirate) sprite.src = 'pirate2.png';
          else sprite.src = 'sprite2.png';
        }
        else{
          if(cowboy) sprite.src = 'cowboy.gif';
          else if(astro) sprite.src = 'astro.gif';
          else if(pirate) sprite.src = 'pirate.gif';
          else sprite.src = 'sprite.gif';
        }
        books.src = 'books.png';
        book1.src = 'book1.png';
        book2.src = 'book2.png';
        book3.src = 'book3.png';
        book4.src = 'book4.png';
        book5.src = 'book5.png';
        galaxy.src = 'galaxy.png';
        ocean.src = 'ocean.png';
        wildwest.src = 'wildwest.png';
        cactus1.src = 'cactus1.png';
        cactus2.src = 'cactus2.png';
        light.src = 'light.png';
        monster.src = 'monster1.gif';
        monster1.src = 'monsterwalk.gif';
        monster2.src = 'monster.gif';
        monsterMelt.src = 'melt1.gif';
        gradient.src = 'gradient.png';
        pencil.src = 'pencil.png';

    }
  }

  function screen4(){
    context.fillStyle = '#FFFFFF';
    context.fillRect(0 , 0 , 600 , 600);
    context.fillStyle = '#000000';
    context.textAlign = 'center';

    displayWords = false;
    var words = "Words, Words, Words";
    var count = 0;
    var pause = 175;
    var chars;
    var finished = false;

    function type() {
        count ++;
        chars = words.substr(0, count);
        context.fillStyle = '#FFFFFF';
        context.fillRect(0 , 0 , 600 , 600);
        context.font = '40px Cambria';
        context.fillStyle = '#000000';
        context.fillText(chars, 300, 300);

        if (count < words.length) setTimeout(type, pause);
        else{
           setTimeout(name, 1000);
           function name(){
             finished = true;
             context.font = '20px Cambria';
             context.fillText("by Sarah Levy", 300, 400);
           }
         }
        }
    type();
    addEventListener('keydown', function(e){
      var x = e.keyCode;
      keysDown[x] = true;
      if(x == 32 && finished){
        location.reload();
      }
    }, false)

    }
  }

      }
