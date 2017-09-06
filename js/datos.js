var myApp = angular.module('myApp',[]);

myApp.controller('DatosCtrl', ['$scope', function($scope) {

	$scope.datos =[
		{nombre:'felipe', edad:'33', apellido:'Loyola', dinero:'2.000.000.000'},
		{nombre:'miguel', edad:'43', apellido:'Perez', dinero:'2.000.000.000'},
		{nombre:'pedro', edad:'25', apellido:'Marin', dinero:'2.000.000.000'},
		{nombre:'juan', edad:'21', apellido:'Castro', dinero:'2.000'},
		{nombre:'pablo', edad:'60', apellido:'Hidalgo', dinero:'2.000.000.000'},
		{nombre:'pablo2', edad:'60', apellido:'Hidalgo', dinero:'2.000.000.000'},
		{nombre:'carlos', edad:'23', apellido:'Sifuentes', dinero:'2.000.000.000'},
		{nombre:'maria', edad:'42', apellido:'Torres', dinero:'2.000.000.000'},
		{nombre:'juaquin', edad:'23', apellido:'Muñoz', dinero:'2.000.000.000'},
		{nombre:'alberto', edad:'18', apellido:'Fernandez', dinero:'2.000.000.000'},
		{nombre:'francisco', edad:'43', apellido:'Ramirez', dinero:'2.000.000.000'},
		{nombre:'eduardo', edad:'19', apellido:'Vargas', dinero:'200.000'},
		{nombre:'victor', edad:'28', apellido:'Vidal', dinero:'2.000.000.000'},
		{nombre:'marcos', edad:'67', apellido:'Bravo', dinero:'2.000.000.000'},
		{nombre:'gonzalo', edad:'21', apellido:'Rodriguez', dinero:'2000'},
		{nombre:'alejandro', edad:'55', apellido:'Alegria', dinero:'2.000.000.000'},
		{nombre:'marcelo', edad:'23', apellido:'Bustamante', dinero:'2.000.000.000'},
		{nombre:'guillermo', edad:'90', apellido:'Peñailillo', dinero:'2.000.000.000'},
		{nombre:'esteban', edad:'70', apellido:'Nuñes', dinero:'2.000.000.000'},
		{nombre:'julio', edad:'80', apellido:'Duran', dinero:'2.000.000.000'},
		{nombre:'luis', edad:'55', apellido:'Rojas', dinero:'2.000.000.000'},
	];

  	$scope.totalDatos = function(){
  		return $scope.datos.length;
  	};
  	
	$scope.deleteDato = function($dato){
		for (var i = $scope.datos.length - 1; i >= 0; i--) {
			if ($scope.datos[i].nombre == $dato)
				$scope.datos.splice(i, 1);
		}
	}
}]);