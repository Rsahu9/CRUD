import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

if(Meteor.isServer){
	Meteor.publish('tasks',function taskpublish(){
		return Tasks.find();
	});
}

Meteor.methods({
	'tasks.insert'(text){
		check(text,String);

		Tasks.insert({
			text,
      createdAt: new Date(),
		});
	},

	'tasks.update'(id,data){
		check(id,String);
		check(data,String);

		Tasks.update(id,{
			$set: { text: data }
		});
	},

	'tasks.delete'(id){
		check(id,String);

		Tasks.remove(id);
	}
});