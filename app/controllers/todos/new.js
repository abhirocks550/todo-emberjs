import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    addTodo: function(){
      var date = this.get('date');
      var title = this.get('title');
      var body = this.get('body');

      //Create new Todo
      var newTodo = this.store.createRecord('todo',{
        title: title,
        body: body,
        date: new Date(date)
      });

      // Save to Firebase
      newTodo.save();

      //clear form
      this.setProperties({
        title: '',
        body: '',
        date: ''
      });
    }
  }

});
