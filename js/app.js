var app = angular.module('app',[]);

app.controller('MainController',['$scope',function($scope){

	$scope.title = "moj tytul";


	$scope.add = function(){

		if($scope.item){
			$('.list-group').append('<li class="list-group-item">'+$scope.item+'<p>x</p></li>');
		$scope.item = '';
		} else {
			return;
		}

		
	}


	$("body").bind("DOMNodeInserted", function() {
	   $(this).find('p').on('click',function(){
	   		
	   		$(this).parent().remove();
	   });
	});

}]);