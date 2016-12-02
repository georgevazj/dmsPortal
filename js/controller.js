angular.module("dms")
  .controller("ESController", function($scope,$rootScope, $http){
    $scope.logo_title = "LBD > DMS";
    $scope.logo_subtitle = "Sistema de gestión de Documentos";
    $scope.link_intro = "Texto de introducción a los enlaces...";
    $scope.docs_link = "https://ac1032301.sharepoint.com/LBD%20SPAIN/ARCHIVO%20ORIGINAL/Forms/AllItems.aspx?id=%2FLBD%20SPAIN%2FARCHIVO%20ORIGINAL%2FLBD%20EXTERNAL";
    $scope.docs_link_text = "Documentación Operativa";
    $scope.report_link = "https://ac1032301.sharepoint.com/LBD%20SPAIN/EVENTOS%20%20INFORMES/Forms/AllItems.aspx";
    $scope.report_link_text = "Informes de años anteriores";
  })
  .controller("ENController", function($scope, $rootScope, $http){
  	$scope.logo_title = "LBD > DMS";
    $scope.logo_subtitle = "Document Management System";
    $scope.link_intro = "Links introduction text...";
    $scope.docs_link = "https://ac1032301.sharepoint.com/LBD%20SPAIN/ARCHIVO%20ORIGINAL/Forms/AllItems.aspx?id=%2FLBD%20SPAIN%2FARCHIVO%20ORIGINAL%2FLBD%20EXTERNAL";
    $scope.docs_link_text = "Operational Documentation";
    $scope.report_link = "https://ac1032301.sharepoint.com/LBD%20SPAIN/EVENTOS%20%20INFORMES/Forms/AllItems.aspx";
    $scope.report_link_text = "Reports from previous years";
  })
  .controller("DEController", function($scope, $rootScope, $http){
    $scope.logo_title = "LBD > DMS";
    $scope.logo_subtitle = "Dokumentenverwaltungssystem";
    $scope.link_intro = "Links Einführung Text ...";
    $scope.docs_link = "https://ac1032301.sharepoint.com/LBD%20SPAIN/ARCHIVO%20ORIGINAL/Forms/AllItems.aspx?id=%2FLBD%20SPAIN%2FARCHIVO%20ORIGINAL%2FLBD%20EXTERNAL";
    $scope.docs_link_text = "Betriebsdokumentation";
    $scope.report_link = "https://ac1032301.sharepoint.com/LBD%20SPAIN/EVENTOS%20%20INFORMES/Forms/AllItems.aspx";
    $scope.report_link_text = "Berichte aus den Vorjahren";
  })