Meteor.publish('foo', function(){
  return Tasks.find({userId: this.userId});
});

Meteor.methods({
  addTask: function(name) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('No Access!');
    }

    Tasks.insert({
      name: name,
      createdAt: new Date(),
      userId: Meteor.userId()
    });
  },
  deleteTask: function(taskId) {
    Tasks.remove(taskId); // db.tasks.remove({_id: taskId})
    console.log(taskId);
  }
});