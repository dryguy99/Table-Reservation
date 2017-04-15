//var exports= module.exports= {};

//console.log("we are coninected");



var Table = function(id,product_name,department,price,quantity){
	console.log("we are coninected");
 	this.name=name,
 	this.phone=phone,
 	this.email=email,
 	this.id=id,
 	this.time= moments;

	this.printInfo = function(){
 	console.log("id: "+this.name +"\n" + "product name: "+this.phone+"\n" +"department: " + this.email +"\n" + "price: "+ this.id);

	}

 	this.reservtion= function(){
 		if(reservtionArray.length<5){
 			//this.Table.push(reservtionArray)
 			Table.push(reservtionArray);
 			console.log("Went to reservationArray");
 		}
 		else{
 			//this.Table.push(reservtionArray)
 			Table.push(waitListArray);
 			console.log("Went to waitListArray");
 		}

 	};

 

 };


module.exports= Table;



