App.ImportController = Ember.Controller.extend({

  isImporting: false,

  importDeliciousFile: function(fileContent) {
    self = this;
    self.set('isImporting', true);
    $('#import-delicious-html').append(self.cleanDeliciousHTML(fileContent));

    when($('#import-delicious-html').find('dt a').each( function(index, element) {

      self.importLink(element);

    })).then( function() {
      self.set('isImporting', false);
      $('#import-delicious-html').html('');
      self.transitionToRoute('bookmarks');
    });
  },

  importLink: function(linkEl) {
    a = $(linkEl);
    var description = '';
    var tags = null;

    if (a.parent().next().is('dd')) {
      description = $(a).parent().next().text();
    }
    if (a.attr('TAGS')) {
      tags = a.attr('TAGS').split(',');
    }

    record = App.Bookmark.createRecord({
      url: a.attr('href'),
      title: a.text(),
      description: description,
      // tags: tags,
      createdAt: moment.unix(a.attr('ADD_DATE')).format()
    });

    this.get('store').commit();
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
