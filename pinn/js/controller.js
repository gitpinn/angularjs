//컨트롤러 생성
angular.module('todo').controller('todoController', function($scope) {

    //$scope : 컨트롤러 -> 뷰
    $scope.name = "홍길동";

    //데이터 소스
    $scope.items = [
        {
            seq: 1,
            title: '할일입니다.',
            completed: true,
            regdate: Date.now()
        },
        {
            seq: 2,
            title: '테스트입니다..',
            completed: false,
            regdate: Date.now()
        },
        {
            seq: 3,
            title: '추가로 입력합니다..',
            completed: false,
            regdate: Date.now()
        }
    ];

    $scope.remove = function(item) {
        
        //alert(item.title);
        var index = $scope.items.findIndex(function (temp) {
            return item.seq == temp.seq;
        });

        //alert(index);

        $scope.items.splice(index, 1);

    };

    $scope.add = function(newTitle) {
        //alert(newTitle);
        var item = {
            seq: nextval(),
            title: newTitle,
            completed: false,
            regdate: Date.now()
        };

        $scope.items.push(item);

        $scope.newTitle = '';
    };

    function nextval() {
        return $scope.items[$scope.items.length-1].seq + 1;
    }
});