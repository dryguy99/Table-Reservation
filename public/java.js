

var x = require("./object-generator.js");

$("#addResBtn").on("click", function() {


$("#nameInput").val() = this.table;
$("#numInput").val() = this.phone;
$("#mIlInput").val() = this.email;
$("#idInput").val() = this.id;


unit = new x.Table(this.table,this.phone,this.email,this.email);
    unit.reservation();



})