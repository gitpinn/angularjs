// 캐멀 표기법 todoHeader
angular.module('todo').directive('todoHeader', function(){
    // 객체가 반환값이 되어야 한다. 
    return {
        template: "<header><img src=\"images/angular_logo_s.png\"></header>"
    }
});

angular.module('todo').directive('todoItem', function(){
    // 객체가 반환값이 되어야 한다. 
    return {
        templateUrl: "directive/todoItem.htm"
    }
});

angular.module('todo').directive('todoBtn', function(){
    // 객체가 반환값이 되어야 한다. 
    return {
        templateUrl: "directive/todoBtn.htm"
    }
});

angular.module('todo').directive('todoForm', function(){
    // 객체가 반환값이 되어야 한다. 
    return {
        templateUrl: "directive/todoForm.htm"
    }
});