App.ImportController = Ember.Controller.extend({

  isImporting: false,
  linksToImport: 0,

  importDeliciousFile: function(fileContent) {
    self = this;
    self.set('isImporting', true);
    $('#import-delicious-html').append(self.cleanDeliciousHTML(fileContent));

    var deliciousLinks = $('#import-delicious-html').find('dt a');
    self.set('linksToImport', deliciousLinks.length);

    when(deliciousLinks.each( function(index, element) {

      when(self.importLink(element)).then( function() {
        self.decrementProperty('linksToImport', 1);
      });

    })).then( function() {
      self.set('isImporting', false);
      $('#import-delicious-html').html('');
      self.transitionToRoute('bookmarks');
    });
  },

  importLink: function(linkEl) {
    a = $(linkEl);
    var description = null;
    var tags = null;

    if (a.parent().next().is('dd')) {
      description = $(a).parent().next().text();
    }
    if (a.attr('TAGS')) {
      tags = a.attr('TAGS').split(',');
    }

    App.Bookmark.createRecord({
      url: a.attr('href'),
      title: a.text(),
      description: description
      // tags: tags,
      // createdAt: moment.unix(a.attr('ADD_DATE')).format()
    });
  },

  // Helpers

  cleanDeliciousHTML: function(htmlString) {
    return htmlString
      .replace(/<button>/g, '&lt;button&gt;');
  },

  htmlEscape: function(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  },

  htmlUnescape: function(value) {
    return String(value)
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  }
});
