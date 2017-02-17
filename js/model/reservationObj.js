function Reservation ()
{
	//Attributes declaration
	this.id;
	this.numOfPlayers;
	this.roomPreference;
	this.checkInDate;
	this.checkOutDate;
	this.checkInTime;
 	this.postCode;
	this.totalPrice;



	//Methods declaration
	 this.construct = function (id, numOfPlayers, roomPreference, checkInDate, checkOutDate, checkInTime, postCode,totalPrice)
	{
		this.setId(id);
		this.setNumOfPlayers(numOfPlayers);
		this.setRoomPreference(roomPreference);
		this.setCheckInDate(checkInDate);
		this.setCheckOutDate(checkOutDate);
		this.setCheckInTime(checkInTime);
		this.setCheckOutTime(postCode);
		this.setTotalPrice(totalPrice);

	}

	this.setId = function (id){this.id=id;}
	this.setNumOfPlayers = function (numOfPlayers){this.numOfPlayers=numOfPlayers;}
	this.setRoomPreference = function (roomPreference){this.roomPreference=roomPreference;}
	this.setCheckInDate = function (checkInDate){this.checkInDate=checkInDate;}
	this.setCheckOutDate = function (checkOutDate){this.checkOutDate=checkOutDate;}
	this.setCheckInTime = function (checkInTime){this.checkInTime=checkInTime;}
	this.setCheckOutTime = function (postCode){this.postCode=postCode;}
	this.setTotalPrice = function (totalPrice){this.totalPrice=totalPrice;}



	this.getId = function () {return this.id;}
	this.getNumOfPlayers = function () {return this.numOfPlayers;}
	this.getRoomPreference = function () {return this.roomPreference;}
	this.getCheckInDate = function () {return this.checkInDate;}
	this.getCheckOutDate = function () {return this.checkOutDate;}
	this.getCheckInTime = function () {return this.checkInTime;}
	this.getCheckOutTime = function () {return this.postCode;}
	this.getTotalPrice = function () {return this.totalPrice;}


}
