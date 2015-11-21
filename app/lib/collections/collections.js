Meteor.secrets = new Meteor.Collection('secrets');

Standard = new Meteor.Collection('standard', {
  schema: {
    "standard": {
      type: String,
      label: "Standard Name",
      optional: false
    },
    "romanNumeral": {
      type: String,
      label: "Roman numeral representation of standard",
      optional: false
    }
  }
});


Section = new Meteor.Collection('section', {
  schema: {
    name: {
      type: String,
      label: "Section name"
    },
    tags: {
      type: [String],
      optional: true
    },
    publish: {
      type: Boolean
    }
  }
});


Lesson = new Meteor.Collection('lesson', {
  schema: {
    name: {
      type: String,
      label: "Lesson name"
    },
    sections: {
      type: [Section]
    },
    tags: {
      type: [String],
      optional: true
    },
    publish: {
      type: Boolean
    }
  }
});


Course = new Meteor.Collection('course', {
  schema: {
    name: {
      type: String,
      label: "Course title",
      optional: false
    },
    shortName: {
      type: String,
      label: "Short title",
      optional: false
    },
    lesson: {
      type: [Lesson]
    },
    publish: {
      type: Boolean,
      optional: false
    },
    tags: {
      type: [String],
      optional: true
    }
  }
});

Department = new Meteor.Collection('department', {
  schema: {
    name: {
      type: String,
      label: "Department name"
    },
    courses: {
      type: [Course]
    }
  }
});
