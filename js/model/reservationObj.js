function Reservation ()
{
	//Attributes declaration
	this.id;
	this.name;
	this.surname;
	this.city;
	this.numOfAdults;
	this.phone;
	this.email;
	this.roomPreference;
	this.checkInDate;
	this.checkOutDate;
	this.checkInTime;
	this.checkOutTime;

	this.totalPrice;



	//Methods declaration
	this.construct = function (id,name,surname, city, numOfAdults, phone, email, roomPreference, checkInDate, checkOutDate, checkInTime, checkOutTime, totalPrice)
	{
		this.setId(id);
		this.setName(name);
		this.setSurname(surname);
		this.setCity(city);
		this.setNumOfAdults(numOfAdults);
		this.setPhone(phone);
		this.setEmail(email);
		this.setRoomPreference(roomPreference);
		this.setCheckInDate(checkInDate);
		this.setCheckOutDate(checkOutDate);
		this.setCheckInTime(checkInTime);
		this.setCheckOutTime(checkOutTime);
		this.setTotalPrice(totalPrice);

	}

	this.setId = function (id){this.id=id;}
	this.setName = function (name){this.name=name;}
	this.setSurname = function (surname){this.surname=surname;}
	this.setCity = function (city){this.city=city;}

	this.setNumOfAdults = function (numOfAdults){this.numOfAdults=numOfAdults;}
	this.setPhone = function (phone){this.phone=phone;}
	this.setEmail = function (email){this.email=email;}
	this.setRoomPreference = function (roomPreference){this.roomPreference=roomPreference;}
	this.setCheckInDate = function (checkInDate){this.checkInDate=checkInDate;}
	this.setCheckOutDate = function (checkOutDate){this.checkOutDate=checkOutDate;}
	this.setCheckInTime = function (checkInTime){this.checkInTime=checkInTime;}
	this.setCheckOutTime = function (checkOutTime){this.checkOutTime=checkOutTime;}
	this.setTotalPrice = function (totalPrice){this.totalPrice=totalPrice;}



	this.getId = function () {return this.id;}
	this.getName = function () {return this.name;}
	this.getSurname = function () {return this.surname;}
	this.getCity = function () {return this.city;}
	this.getNumOfAdults = function () {return this.numOfAdults;}
	this.getPhone = function () {return this.phone;}
	this.getEmail = function () {return this.email;}
	this.getRoomPreference = function () {return this.roomPreference;}
	this.getCheckInDate = function () {return this.checkInDate;}
	this.getCheckOutDate = function () {return this.checkOutDate;}
	this.getCheckInTime = function () {return this.checkInTime;}
	this.getCheckOutTime = function () {return this.checkOutTime;}
	this.getTotalPrice = function () {return this.totalPrice;}


}
