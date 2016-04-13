function SearchController() {
  this.query = '';
}

angular
	.module('app')
	.controller('SearchController', SearchController);