//app.controller('todoController', function($scope){
angular.module('todo').controller('todoController', function($scope){
    $scope.name ="홍길동";  // 프로퍼티 name 

    // 데이터 소스
     $scope.items = [
         {
         seq:1,
         title:'할일입니다.',
         completed: false,
         regdate: Date.now()
         } , 
         {
         seq:2,
         title:'테스트 입니다.',
         completed: true,
         regdate: Date.now()
         } , 
         {
         seq:3,
         title:'추가 수정입니다.',
         completed: false,
         regdate: Date.now()
         } , 
     ];

     // x 버튼으로 일정 삭제... 
     $scope.remove = function (item){
         alert(item.title);
         var index = $scope.items.findIndex( function (temp){
            return item.seq == temp.seq;
         });
         alert( index );

        $scope.items.splice(index, 1);
     }

     $scope.add = function (newTitle){

        alert( newTitle );

        var item =  {
         seq:nextVal($scope),
         title:newTitle, 
         completed: false,
         regdate: Date.now()
         };

         $scope.items.push(item);

         $scope.newTitle = "";   // 추가 후 클리어.. 
     }

     function nextVal(){
       return $scope.items[$scope.items.length-1].seq+1;
    }
});
