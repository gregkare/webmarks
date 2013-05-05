App.ImportFileView = Ember.TextField.extend({
  type: 'file',
  attributeBindings: ['name'],

  change: function(evt) {
    var self = this;
    var input = evt.target;

    if (input.files && input.files[0]) {
      var reader = new FileReader();
      var that = this;

      reader.onload = function(e) {
        self.get('controller').importDeliciousFile( e.target.result );

        // $('#delicious .status').html($('<p>Importing <strong>'+deliciousLinks.length+'</strong> bookmarks...</p>'));

        // setTimeout(Unmarked.get('router.importController').importDeliciousLinks, 0);
      };

      reader.readAsText(input.files[0]);
    }
  }
});
