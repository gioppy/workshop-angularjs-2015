(function(){
  'use strict';

  angular.module('todo')
    .controller('TodoController', TodoController);

  function TodoController(){
    var self = this;

    self.todos = [];
    self.completed = [];
    self.addTodo = addTodo;
    self.removeTodo = removeTodo;
    self.completeTodo = completeTodo;

    function addTodo(){
      self.todos.push(self.new);
      self.new = "";
    }

    function removeTodo(index){
      self.todos.splice(index, 1);
    }

    function completeTodo(index){
      self.completed.push(self.todos[index]);
      //remove the item
      removeTodo(index);
    }
  }
})();
