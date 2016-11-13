angular.module('myApp',[] )
.service('todoService' , function () {
	var self = this

	self.contacts = []

	self.list = function () {
		return self.contacts
	}

	self.add = function (contact) {
		self.contacts.push(contact)
	}
	self.remove = function (contacts){
		self.contacts.delete(contact)
	}
})