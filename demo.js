var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload(){
    game.load.spritesheet('button', 'assets/Images/buttons.png', 173, 64);
}


var button ; 

function create() {
    startDDNA();
    
    game.stage.backgroundColor = '#182d3b';   
    var style = { font: "20px Arial", fill: "#000000", align: "center" };
    
    simpleEventButton = game.add.button(40, 40, 'button', simpleEventOnUp, this, 1, 3, 2);
    var text = game.add.text(58, 58, "Simple Event", style);
    
    simpleEngageButton = game.add.button(40, 120, 'button', simpleEngageOnUp, this, 1, 3, 2);
    var text = game.add.text(58, 138, "Simple Engage", style);
    
    imageEngageButton = game.add.button(40, 200, 'button', imageEngageOnUp, this, 1, 3, 2);
    var text = game.add.text(58, 218, "Image Engage", style);
    
    etcConfigButton = game.add.button(40, 280, 'button', etcConfigOnUp, this, 1, 3, 2);
    var text = game.add.text(58, 298, "ETC Config", style);

}

function update() {

}

function render() {

    game.debug.text(game.input.x + ' x ' + game.input.y, 32, 32);

}


function simpleEventOnUp(simpleEventButton, pointer, isOver) {

    //  In this example if the Pointer is no longer over the Button, then we'll treat it
    //  as if the user cancelled the operation and didn't want to press the Button after all

    if (isOver)
    {
        
        console.log('Simple Button clicked');
        var event = {
            eventName: 'missionStarted',
            eventParams: {
                isTutorial: false,
                livesBalance: 3,
                maximumMoves: 24,
                missionName: 'Crossing the Bridge',
                targetScore: 100                           
            }
        };
        recordEvent(event);
        sendEventList();
    }
}

function simpleEngageOnUp(simpleEngageButton, pointer, isOver) {

    //  In this example if the Pointer is no longer over the Button, then we'll treat it
    //  as if the user cancelled the operation and didn't want to press the Button after all

    if (isOver)
    {
        
        console.log('Simple Engage Button clicked');
        
        var decisionPoint ='decisionPointClicked'        
        var parameters = 
        {
            livesBalance: 1
        };
        
        
        makeEngageRequest(decisionPoint, parameters, handleEngageResponse);

    }
}



function imageEngageOnUp(imageEngageButton, pointer, isOver) {

    //  In this example if the Pointer is no longer over the Button, then we'll treat it
    //  as if the user cancelled the operation and didn't want to press the Button after all

    if (isOver)
    {
        
        console.log('Image Engage Button clicked');        
        var decisionPoint ='decisionPointClicked'        
        makeEngageRequest(decisionPoint, null, handleEngageResponse);

    }
}

function etcConfigOnUp(etcConfigButton, pointer, isOver) {

    //  In this example if the Pointer is no longer over the Button, then we'll treat it
    //  as if the user cancelled the operation and didn't want to press the Button after all

    if (isOver)
    {    
        console.log('ETC Config clicked');
        var decisionPoint ='config'                    
        makeEngageRequest(decisionPoint, null, handleEngageResponse);
    }
}


// callback to handle responses from engage. These can potentially be "gameParameter", "imageMessage" of "config" responses
// "config" responses will contain images to cache and the content and logic for any event triggered campaigns. 
function handleEngageResponse(response)
{
    console.log(response);
    if(response.image){       
        console.log(response.image );
        handleImageMessage(response);
    }
    else if(response.parameters) {
       hanldleGameParameters(response.parameters)
    }        
}

// Generic handler for image message response
function handleImageMessage(imageMessage){
    console.log("imageMessage found");
        
    var myImageMessage = new ImageMessage(imageMessage);
    console.log(myImageMessage);
    console.log(myImageMessage.image);
    console.log(myImageMessage.image.spritemap) ; 
        
}

// Generic handler for game parameter response
function hanldleGameParameters(gameParameters){
     console.log("game parameters found");
}