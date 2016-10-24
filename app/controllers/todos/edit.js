import Ember from 'ember';

export default Ember.Controller.extend({

    actions:{
      editTodo(id){

          var self = this;
          var title = this.get('model.title');
          var body = this.get('model.body');
          var date = this.get('model.date');

          this.store.findRecord('todo',id).then(function(todo){

              todo.set('title',title);
              todo.set('body',body);
              todo.set('date',new Date(date));

              //Save to firebase
              todo.save();
              self.transitionToRoute('todos');
          });
      },

      deleteTodo(id){

     let confirmation = confirm('Are you sure you want delete this record?');
     var self = this;

      if(confirmation)
      {    
         this.store.findRecord('todo',id).then(function(todo){

              todo.deleteRecord();
              //Save to firebase
              todo.save();
              self.transitionToRoute('todos');
          });
      }

      else
      {
        console.log("You Selected not to delete this record");
        self.transitionToRoute('todos');
      }

         
      } 

    }
});
