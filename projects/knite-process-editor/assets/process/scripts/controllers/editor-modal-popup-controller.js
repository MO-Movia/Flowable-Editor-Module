angular.module('flowableModeler').controller('ModalController', function ($scope) {
    $scope.openModal = function () {
        $("#myModal").dialog({
            modal: true,
            buttons: {
                Ok: function () {
                    $(this).dialog("close");
                }
            }
        });
    };
});