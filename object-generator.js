//var exports= module.exports= {};

//console.log("we are coninected");



var Table = function(name,phone,email,id){
	var reservationArray = [];
var waitListArray=[];
	console.log("we are coninected");
 	this.name=name,
 	this.phone=phone,
 	this.email=email,
 	this.id=id,
 

	this.printInfo = function(){
 	console.log("id: "+this.name +"\n" + "product name: "+this.phone+"\n" +"department: " + this.email +"\n" + "price: "+ this.id);

	}

 	this.reservation= function(){
 		if(reservationArray.length<5){
 			//this.Table.push(reservtionArray)
 			reservationArray.push(this);
 			console.log("Went to reservationArray");
 			//console.log(reservationArray);
 		}
 		else{
 			//this.Table.push(reservtionArray)
 			waitListArray.push(this);
 			console.log("Went to waitListArray");
 		}

 	};

 

 };


module.exports= Table;



