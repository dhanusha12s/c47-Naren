class Level1 {
    constructor(){
        //this.player = createSprite(400,200,40,40);
       
        player.visible = true;
        background("background_img");
        //textSize(20);
        //text("Score: " + score, 920,50);
        retry_button.visible = false;
        //background("Lvl 1 terrain.png");
    }
    
    display(){
        
        //player.x = mouseX;
        if(keyDown(RIGHT_ARROW)){
            player.velocityX = 8;
        }
        if(keyWentUp(RIGHT_ARROW)){
            player.velocityX = 0;
        }

        if(keyDown(LEFT_ARROW)){
            player.velocityX = -8;
        }
        if(keyWentUp(LEFT_ARROW)){
            player.velocityX = 0;
        }
   
        this.spawnning();
        this.spawnning_bvirus();

        if(keyWentUp('space')){
            this.spawnn_sanitizer();
        }

        //player.bounceOff(edges);

    if(s_group.isTouching(v_group)){
        s_group.destroyEach();
        v_group.destroyEach();
        score = score + 3;
    }

    if(s_group.isTouching(bv_group)){
        s_group.destroyEach();
        bv_group.destroyEach();
        score = score + 5;
    }

    if(v_group.isTouching(player)){
        score = score - 1;
        v_group.destroyEach();
    }

    if(score === -1){
        gameState = 2;
        //retry_button = createSprite(500,300, 40,40)
        retry_button.addImage(retry_button_img);
        retry_button.scale=0.5
        retry_button.visible= true;
        score = 0;
    }


    player.bounceOff(edges[0]); 
    player.bounceOff(edges[1]); 
    player.bounceOff(edges[2]);
    player.bounceOff(edges[3]);

    
    text("Score: " + score, 950,50);

        drawSprites();
        
        
}

    spawnning=()=>{
        if(frameCount% 60 === 0){
            var virus = createSprite(400,600,50,50);
            virus.velocityY = -6;
            virus.x = random(20,980);
            virus.lifetime = 500;
            virus.addImage(virus_img);
            virus.scale = 0.5;
            v_group.add(virus);
            //if(virus.x > 500){
              //  score = score - 3;
              //}
        }
    }

    spawnning_bvirus=()=>{
        if(frameCount% 200 === 0){
            var b_virus = createSprite(400,600,80,80);
            b_virus.velocityY = -3;
            b_virus.x = random(20,980);
            b_virus.lifetime = 500;
            b_virus.addImage(b_virus_img);  
            b_virus.scale = 0.8;
            bv_group.add(b_virus);
            //if(b_virus.x > 350){
              //  score = score - 5;
              //}
        }

    }

    spawnn_sanitizer=()=>{
        var sanitizer = createSprite(400,200,5,20)
        sanitizer.velocityY = 7;
        sanitizer.lifetime = 500;
        sanitizer.x = player.x
        s_group.add(sanitizer);
    }


}
