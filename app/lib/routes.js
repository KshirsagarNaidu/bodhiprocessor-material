FlowRouter.route('/', {
  name: "home",
  action: function(params, queryParams) {
    console.log('wow!');
    BlazeLayout.render('masterLayout', {
      footer: "footer",
      main: "home",
      nav: "nav",
    });
  }
});

FlowRouter.route('/learn', {
  name: "learn",
  action: function(params, queryParams) {
    BlazeLayout.render('masterLayout', {
      footer: "footer",
      main: "learn",
      nav: "nav",
    });
  }
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('masterLayout', {
      footer: "footer",
      main: "pageNotFound",
      nav: "nav",
    });
  }
};
