import Ember from 'ember';

export default Ember.Controller.extend({
      filter: '',
      filteredTodos: function(){
        var filter = this.get('filter');
        var rx = new RegExp(filter,'gi');
        var todos = this.model;

        console.log("Model data");
        console.log(this.model);

        return todos.filter(function(todo){
            return todo.get('title').match(rx) ||
             todo.get('body').match(rx);
        });
      }.property('arrangedContent','filter'),
      sortedProperties: ['date:asc'],
      sortedTodos: Ember.computed.sort('model','sortedProperties'),
});
