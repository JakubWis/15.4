function Phone(name,brand, price, color, rate) {
	this.name = name
	this.brand = brand
	this.price = price
	this.color = color
	this.rate = rate
}

Phone.prototype.printInfo = function () {
	console.log(this.name + " brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". People rate it: " + this.rate + "/10" )
}

Phone.prototype.serchBlack = function () {
	if(this.color == "black")
		console.log("Yes! We found black phone. It is: " + this.name + "for " + this.price + "zł")
}

let phones = [
  new Phone("iPhone6S","Apple", 2250, "silver", "7"),
  new Phone("GalaxyS6","Samsung", 1700, "blue", "7.5"),
  new Phone("OnePlusOne","One", 1200, "black", "5.4")
]
phones.forEach(phone => phone.printInfo())
phones.forEach(phone => phone.serchBlack())