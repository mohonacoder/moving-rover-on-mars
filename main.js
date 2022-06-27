canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

background_image="mars.jpg";
rover_image="rover.png";

rover_x=10;
rover_y=10;

function add(){
background_imgtag=new Image();
background_imgtag.onload=uploadBackground;
background_imgtag.src=background_image;

rover_imgtag=new Image();
rover_imgtag.onload=uploadrover;
rover_imgtag.src=rover_image;

}

function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
     keyPressed=e.keyCode;
     console.log(keyPressed);

     if(keyPressed=='37'){
        left();
        console.log("left arrow has been pressed");

     }

     if(keyPressed=='38'){
        up();
        console.log("up arrow has been pressed");
     }

     if(keyPressed=='39'){
        right();
        console.log("right arrow has been pressed");
     }

     if(keyPressed=='40'){
        down();
        console.log("down arrrow has been pressed");
     }


}

function up(){

    if(rover_y>=0){

        rover_y=rover_y- 10;
        console.log(rover_y);
         
        uploadBackground();
        uploadrover();

    }
}

function down(){

    if(rover_y<=500){

        rover_y=rover_y+ 10;
        console.log(rover_y);

        uploadBackground();
        uploadrover();
    }
}

function left(){

    if(rover_x>=0){

        rover_x=rover_x- 10;
        console.log(rover_x);

        uploadBackground();
        uploadrover();
    }
}

function right(){

    if(rover_x<=500){

        rover_x=rover_x+ 10;
        console.log(rover_x);

        uploadBackground();
        uploadrover();
        
    }
}