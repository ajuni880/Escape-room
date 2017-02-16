function Game(){
this.id;
this.name;
this.description;
this.price;
this.maxPlayers;
this.uploadDate;

this.construct = function(id,name,description,price,maxPlayers,uploadDate){
this.id=id;
this.name=name;
this.description=description;
this.price=price;
this.maxPlayers=maxPlayers;
this.uploadDate=uploadDate;
}
//getters
this.getId = function(){
return this.id;
}

this.getName=function(){
return this.name;
}

this.getDescription=function(){
return this.description;
}

this.getPrice=function(){
return this.price;
}

this.getMaxPlayers=function () {
return this.maxPlayers;
}

this.getUploadDate=function(){
return this.uploadDate;
}
//setters
this.setId=function(id){
this.id=id;
}

this.setName=function(name){
this.name=name;
}

this.setDescription=function(description){
this.description=description;
}

this.setPrice=function(price){
this.price=price;
}

this.setMaxPlayers=function(maxPlayers){
this.maxPlayers=maxPlayers;
}

this.setUploadDate=function(uploadDate){
this.uploadDate=uploadDate;
}

}
