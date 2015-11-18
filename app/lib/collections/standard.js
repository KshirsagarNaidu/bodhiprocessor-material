Standard = new Meteor.Collection('standard');
Course = new Meteor.Collection('course');
Lesson = new Meteor.Collection('lesson');
Quiz = new Meteor.Collection('quiz');
Papers = new Meteor.Collection('papers');
Post = new Meteor.Collection('post');

StandardSchema = new SimpleSchema({
  "name": {
    type: String,
    label: "Standard Name"
  },
  "romanNumeral": {
    type: String,
    label: "Roman Numeral"
  }
});

CourseSchema = new SimpleSchema({
  "name": {
    type: String,
    label: "Course Name"
  },
  "standard": {
    type: String,
    label: "Course standard"
  }
})
