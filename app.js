angular.module('Todos',[] )
.service('todoService' , function () {
	var self = this

	self.todos = [
		{ title : "Eark" , done : false},
		{ title : "Beer" , done : true}
	]

	self.list = function () {
		return self.todos
	}

	self.add = function (todo) {
		self.todos.push(todo)
	}
	self.remove = function (todo){
		var idx = self.todos.slice(0);

		self.todos.splice(self.todos.indexOf(todo), 1)
	}
})
.controller('listTodo' , function ($scope , todoService){
	$scope.todos = todoService.list()

	// replacement remove function here becourse data table on this controller
	$scope.remove = function (param){
		// remove data in data service

		todoService.remove(param);
	}

})
.controller('CH' , function ($scope , todoService){

	$scope.checkboxModel = {
      		 done : ''
        }
})
.controller('addTodo' , function ($scope , todoService){
	$scope.save = function () {
	if ( $scope.newtodo != undefined && $scope.newtodo != ""){
			var todo = {
				title : $scope.newtodo,
				done : false
			}
			console.log($scope.newtodo)
			todoService.add(todo)
			reset()
		}
	}


	function reset() {
		$scope.newtodo = undefined
	}
})
