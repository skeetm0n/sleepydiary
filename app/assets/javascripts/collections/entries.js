Workspace.Collections.Entries = Backbone.Collection.extend({

  model: Workspace.Models.Entry,

  url: '/api/entries'

});
