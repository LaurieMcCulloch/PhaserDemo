// Simple implementation of DDNA Image Message
function ImageMessage(imageMessage){
    
        this.image = new ImageMessageImage(imageMessage.image);
        this.parameters = imageMessage.parameters ; 
        this.eventParams = imageMessage.eventParams;
        this.transactionID = imageMessage.transactionID;        
}

function ImageMessageImage(i){
    this.width = i.width ; 
    this.height = i.height ; 
    this.format = i.format ; 
    this.spritemap = i.spritemap ;
    this.layout= i.layout ; 
    
}