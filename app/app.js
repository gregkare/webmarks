import Resolver from 'resolver';
import registerComponents from 'appkit/utils/register_components';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver,
  archiveBookmarks: []
});

App.initializer({
  name: 'Register Components',
  initialize: function(container, application) {
    registerComponents(container);
  }
});

App.initializer({
  name: "remoteStorage",
  initialize: function(container, application) {
    $(function(){
      remoteStorage.access.claim('bookmarks', 'rw');
      remoteStorage.caching.enable('/bookmarks/archive/');
      remoteStorage.displayWidget('remotestorage-connect', { redirectUri: window.location.href });
    });
  }
});

export default App;
