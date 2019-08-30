//캐멀 표기법
angular.module('todo').directive('todoHeader', function() {
    return {
        template: "<header><img src=\"images/angular_logo_s.png\"></header>"
    };
});


angular.module('todo').directive('todoItem', function() {
    return {
        templateUrl: "directive/todoitem.htm"
    };
});

angular.module('todo').directive('todoBtn', function() {
    return {
        templateUrl: "directive/todobtn.htm"
    };
});

angular.module('todo').directive('todoForm', function() {
    return {
        templateUrl: "directive/todoform.htm"
    };
});