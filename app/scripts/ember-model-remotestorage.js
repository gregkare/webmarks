var get = Ember.get;

Ember.RemoteStorageAdapter = Ember.Adapter.extend({
  find: function(record, id) {
    var url = this.buildURL(record.constructor, id),
        self = this;

    return this.ajax(url).then(function(data) {
      self.didFind(record, id, data);
    });
  },

  didFind: function(record, id, data) {
    record.load(id, data);
  },

  findAll: function(klass, records) {
    var self = this;
    remoteStorage.bookmarks.archive.getAll().then(function(bookmarks){
      self.didFindAll(klass, records, bookmarks);
    });
  },

  didFindAll: function(klass, records, data) {
    records.load(klass, data);
  },

  createRecord: function(record) {
    var self = this;
    var serialized = record.toJSON();

    return remoteStorage.bookmarks.archive.store(serialized).then(function(data){
      self.didCreateRecord(record, data);
    });
  },

  didCreateRecord: function(record, data) {
    record.load(data[id], data);
    record.didCreateRecord();
  },

  saveRecord: function(record) {
    var self = this;
    var serialized = record.toJSON();

    return remoteStorage.bookmarks.archive.store(serialized).then(function(data){
      self.didSaveRecord(record, data);
    });
  },

  didSaveRecord: function(record, data) {
    record.didSaveRecord();
  },

  deleteRecord: function(record) {
    var primaryKey = get(record.constructor, 'primaryKey'),
        url = this.buildURL(record.constructor, get(record, primaryKey)),
        self = this;

    return this.ajax(url, record.toJSON(), "DELETE").then(function(data) {  // TODO: Some APIs may or may not return data
      self.didDeleteRecord(record, data);
    });
  },

  didDeleteRecord: function(record, data) {
    record.didDeleteRecord();
  },

  _ajax: function(url, params, method) {
    var settings = {
      url: url,
      type: method,
      dataType: "json"
    };

    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (params) {
        if (method === "GET") {
          settings.data = params;
        } else {
          settings.contentType = "application/json; charset=utf-8";
          settings.data = JSON.stringify(params);
        }
      }

      settings.success = function(json) {
        Ember.run(null, resolve, json);
      };

      settings.error = function(jqXHR, textStatus, errorThrown) {
        Ember.run(null, reject, jqXHR);
      };


      Ember.$.ajax(settings);
    });
  }
});
