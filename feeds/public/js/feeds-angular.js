var Reader = angular.module('reader', []);

function mainController ($scope, $http) {
	$scope.formData = {};

	$http.get('/api/feeds')
		.success(function(data) {
			//$scope.feeds = data;

			$scope.feeds = [
			{"id" : 123123,
			 "title" : "whatsapp is sold",
			 "content" : "hdgsfhgdsfgsdhfkjdfkjsdkjfsdakjfdsf"
			},
			{"id" : 1233453123,
			 "title" : "whatsapp is sold",
			 "content" : "hdgsfhgdsfgsdhfkjdfkjsdkjfsdakjfdsf"
			}
			];
		})
		.error(function(data) {
			console.log("Error: "+ data);
		});

	$scope.createChannel = function() {
		$http.post('api/channel', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.feeds = data;
			})
			.error(function(data) {
			console.log("Error: "+ data);
		});
	}

	$scope.markRead = function(id) {
		$http.delete('api/feed'+id)
			.success(function(data) {
				$scope.feeds = data;
			})
			.error(function(data) {
			console.log("Error: "+ data);
		});
	}
}