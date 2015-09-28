(function(){
  'use strict';

  angular.module('todo')
    .controller('TodoController', TodoController);

  TodoController.$inject = ['$firebaseArray'];

  function TodoController($firebaseArray){
    var self = this;
    var host = 'https://wstodo.firebaseio.com/';
    var active = 'active/';
    var completed = 'completed/';

    var baseActive = new Firebase(host + active);
    var baseCompleted = new Firebase(host + completed);

    self.todos = $firebaseArray(baseActive);
    self.completed = $firebaseArray(baseCompleted);
    self.addTodo = addTodo;
    self.removeTodo = removeTodo;
    self.completeTodo = completeTodo;

    function addTodo(){
      self.todos.$add({
        text: self.new
      });
      self.new = "";
    }

    function removeTodo(index){
      self.todos.$remove(index);
    }

    function completeTodo(index){
      var key = self.todos.$keyAt(index);
      var record = self.todos.$getRecord(key);
      //remove the todo
      removeTodo(index);
      //move todo to completed
      self.completed.$add(record);
    }
  }
})();
