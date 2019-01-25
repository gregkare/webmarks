"use strict"
define("webmarks/app",["exports","webmarks/resolver","ember-load-initializers","webmarks/config/environment"],function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:t.default});(0,n.default)(a,o.default.modulePrefix)
var r=a
e.default=r}),define("webmarks/components/bookmark-form/component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({autofocusTitleField:function(){Ember.isEmpty(this.get("bookmark.title"))&&this.$("input#title").focus()},autocompleteTags:function(){var e=this.availableTags,t=function(e){return e.split(/,\s*/)}
this.$("input#tags").bind("keydown",function(e){e.keyCode===Ember.$.ui.keyCode.TAB&&Ember.$(this).data("uiAutocomplete").menu.active&&e.preventDefault()}).autocomplete({autoFocus:!0,minLength:0,position:{my:"left top",at:"left+110 bottom",collision:"none"},source:function(n,o){return o(Ember.$.ui.autocomplete.filter(e,(a=n.term,t(a).pop())))
var a},focus:function(){return!1},select:function(e,n){var o
return(o=t(this.value)).pop(),o.push(n.item.value),o.push(""),this.value=o.join(", "),!1}})},didInsertElement:function(){this._super.apply(this,arguments),this.autofocusTitleField(),this.autocompleteTags()},actions:{commit:function(){this.commit()},cancel:function(){this.cancel()}}})
e.default=t}),define("webmarks/components/bookmark-form/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"OniScb+p",block:'{"symbols":[],"statements":[[7,"form"],[9],[0,"\\n  "],[7,"fieldset"],[9],[0,"\\n    "],[7,"div"],[11,"class","control-group"],[9],[0,"\\n      "],[7,"label"],[11,"for","title"],[9],[1,[27,"t",["bookmark.edit.form.title"],null],false],[10],[0,"\\n      "],[1,[27,"input",null,[["value","id","required"],[[23,["bookmark","title"]],"title","required"]]],false],[0,"\\n    "],[10],[0,"\\n    "],[7,"div"],[11,"class","control-group"],[9],[0,"\\n      "],[7,"label"],[11,"for","url"],[9],[1,[27,"t",["bookmark.edit.form.url"],null],false],[10],[0,"\\n      "],[1,[27,"input",null,[["value","id","required"],[[23,["bookmark","url"]],"url","required"]]],false],[0,"\\n    "],[10],[0,"\\n    "],[7,"div"],[11,"class","control-group"],[9],[0,"\\n      "],[7,"label"],[11,"for","description"],[9],[1,[27,"t",["bookmark.edit.form.description"],null],false],[10],[0,"\\n      "],[1,[27,"input",null,[["value","id"],[[23,["bookmark","description"]],"description"]]],false],[0,"\\n    "],[10],[0,"\\n    "],[7,"div"],[11,"class","control-group"],[9],[0,"\\n      "],[7,"label"],[11,"for","tags"],[9],[1,[27,"t",["bookmark.edit.form.tags"],null],false],[10],[0,"\\n      "],[1,[27,"input",null,[["value","id"],[[23,["bookmark","tags"]],"tags"]]],false],[0,"\\n    "],[10],[0,"\\n  "],[10],[0,"\\n  "],[7,"div"],[11,"class","controls"],[9],[0,"\\n    "],[7,"button"],[11,"class","button button-primary"],[11,"type","submit"],[9],[1,[27,"t",["bookmark.edit.form.save"],null],false],[10],[0,"\\n    "],[7,"button"],[11,"class","button button-secondary"],[9],[1,[27,"t",["bookmark.edit.form.cancel"],null],false],[3,"action",[[22,0,[]],"cancel"]],[10],[0,"\\n  "],[10],[0,"\\n"],[3,"action",[[22,0,[]],"commit"],[["on"],["submit"]]],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"webmarks/components/bookmark-form/template.hbs"}})
e.default=t}),define("webmarks/components/bookmark-search/component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:"div",classNames:["search-input"],hideClearButton:Ember.computed.empty("filterText"),focusSearchField:function(){var e=this
document.invisible||Ember.run.scheduleOnce("afterRender",function(){e.$("#search-input")[0].focus()})},didInsertElement:function(){this._super.apply(this,arguments),this.focusSearchField(),this.set("visibilityHandler",this.focusSearchField.bind(this)),document.addEventListener("visibilitychange",this.visibilityHandler,!1)},willDestroyElement:function(){this._super.apply(this,arguments),document.removeEventListener("visibilitychange",this.visibilityHandler)},actions:{clearSearchInput:function(){this.set("filterText",""),this.$("#search-input")[0].focus()}}})
e.default=t}),define("webmarks/components/bookmark-search/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"LJcNLOct",block:'{"symbols":[],"statements":[[1,[27,"input",null,[["id","value","placeholder"],["search-input",[23,["filterText"]],[27,"t",["inputs.text_fields.search.placeholder"],null]]]],false],[0,"\\n"],[7,"button"],[11,"id","clear-search"],[12,"class",[27,"if",[[23,["hideClearButton"]],"hidden"],null]],[9],[1,[21,"icon-clear"],false],[3,"action",[[22,0,[]],"clearSearchInput"]],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"webmarks/components/bookmark-search/template.hbs"}})
e.default=t}),define("webmarks/components/icon-add/component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:""})
e.default=t}),define("webmarks/components/icon-add/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"rz4/H3Us",block:'{"symbols":[],"statements":[[7,"svg"],[11,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[11,"width","24"],[11,"height","24"],[11,"viewBox","0 0 24 24"],[9],[0,"\\n  "],[7,"path"],[11,"d","M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],[9],[10],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"webmarks/components/icon-add/template.hbs"}})
e.default=t}),define("webmarks/components/icon-clear/component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:""})
e.default=t}),define("webmarks/components/icon-clear/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"3fxt77dN",block:'{"symbols":[],"statements":[[7,"svg"],[11,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[11,"width","24"],[11,"height","24"],[11,"viewBox","0 0 24 24"],[9],[0,"\\n  "],[7,"path"],[11,"d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"],[9],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"webmarks/components/icon-clear/template.hbs"}})
e.default=t}),define("webmarks/components/icon-edit/component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:""})
e.default=t}),define("webmarks/components/icon-edit/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"k77It7ML",block:'{"symbols":[],"statements":[[7,"svg"],[11,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[11,"width","24"],[11,"height","24"],[11,"viewBox","0 0 24 24"],[9],[0,"\\n  "],[7,"path"],[11,"d","M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"],[9],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"webmarks/components/icon-edit/template.hbs"}})
e.default=t}),define("webmarks/components/icon-trash/component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({tagName:""})
e.default=t}),define("webmarks/components/icon-trash/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"ck1sR96F",block:'{"symbols":[],"statements":[[7,"svg"],[11,"xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],[11,"width","24"],[11,"height","24"],[11,"viewBox","0 0 24 24"],[11,"class","icon-trash"],[9],[0,"\\n  "],[7,"path"],[11,"d","M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"],[9],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"webmarks/components/icon-trash/template.hbs"}})
e.default=t}),define("webmarks/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({storage:Ember.inject.service(),init:function(){this._super.apply(this,arguments),this.storage.on("disconnected",this.handleStorageDisconnect.bind(this))},handleStorageDisconnect:function(){this.storage.deleteTagListCache(),console.debug("RS disconnected, transition to welcome"),this.transitionToRoute("welcome")}})
e.default=t}),define("webmarks/controllers/bookmarks/edit",["exports","webmarks/controllers/bookmarks/new"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default.extend()
e.default=n}),define("webmarks/controllers/bookmarks/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({storage:Ember.inject.service(),filterText:"",sortProperties:Object.freeze(["createdAt:desc"]),sortedBookmarks:Ember.computed.sort("model","sortProperties"),filteredContent:Ember.computed("filterText","sortedBookmarks",function(){var e=this.filterText.toLowerCase()
return Ember.isEmpty(e)||e.length<3?this.sortedBookmarks:this.sortedBookmarks.filter(function(t){return!Ember.isEmpty(t.description)&&-1!==t.description.toLowerCase().indexOf(e)||-1!==t.title.toLowerCase().indexOf(e)||-1!==t.url.toLowerCase().indexOf(e)||!Ember.isEmpty(t.tags)&&-1!==t.tags.indexOf(e)})}),actions:{remove:function(e){this.storage.removeBookmark(e.id).catch(function(e){alert("Something went wrong."),console.log("ERROR:"),console.log(e)})}}})
e.default=t}),define("webmarks/controllers/bookmarks/new",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({storage:Ember.inject.service(),queryParams:["title","url"],title:null,url:null,bookmarkletUsed:!1,bookmarkletLink:Ember.computed(function(){return Ember.String.htmlSafe('javascript:void(location.href="'.concat(window.location.origin,'/bookmarks/new/?url="+encodeURIComponent(location.href)+"&title="+encodeURIComponent(document.title))'))}),actions:{commit:function(){var e=this
this.storage.storeBookmark(this.get("model.serialize")).then(function(){e.transitionToRoute("index")}).catch(function(e){alert("Something went wrong."),console.log("ERROR:"),console.log(e)})},cancel:function(){this.transitionToRoute("index")}}})
e.default=t}),define("webmarks/controllers/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({})
e.default=t}),define("webmarks/controllers/welcome",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({application:Ember.inject.controller(),storage:Ember.inject.service(),attemptedTransition:Ember.computed.alias("application.attemptedTransition"),init:function(){this._super.apply(this,arguments),this.storage.on("connected",this.handleStorageConnect.bind(this))},handleStorageConnect:function(){console.log("rs connected, transition to index"),Ember.isPresent(this.attemptedTransition)?(this.attemptedTransition.retry(),this.set("attemptedTransition",null)):this.transitionToRoute("bookmarks.index")}})
e.default=t}),define("webmarks/helpers/app-version",["exports","webmarks/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function o(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.default.APP.version,r=o.versionOnly||o.hideSha,i=o.shaOnly||o.hideVersion,s=null
return r&&(o.showExtended&&(s=a.match(n.versionExtendedRegExp)),s||(s=a.match(n.versionRegExp))),i&&(s=a.match(n.shaRegExp)),s?s[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o,e.default=void 0
var a=Ember.Helper.helper(o)
e.default=a}),define("webmarks/helpers/t",["exports","ember-i18n/helper"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("webmarks/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","webmarks/config/environment"],function(e,t,n){var o,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(o=n.default.APP.name,a=n.default.APP.version)
var r={name:"App Version",initialize:(0,t.default)(o,a)}
e.default=r}),define("webmarks/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n}),define("webmarks/initializers/ember-i18n",["exports","ember-i18n/initializers/ember-i18n"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("webmarks/initializers/export-application-global",["exports","webmarks/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var o,a=t.default.exportApplicationGlobal
o="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),n[o]||(n[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var o={name:"export-application-global",initialize:n}
e.default=o}),define("webmarks/instance-initializers/ember-i18n",["exports","ember-i18n/instance-initializers/ember-i18n"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("webmarks/instance-initializers/i18n",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"i18n",initialize:function(e){var t,n=e.lookup("service:i18n"),o=(t=n.get("locales"),(navigator.languages||[]).concat([navigator.language,navigator.userLanguage,"en"]).compact().find(function(e){return t.includes(e)||t.includes(e.split("-")[0])}))
n.set("locale",o),moment.locale(o),n.on("missing",function(e,t){console.warn("Missing translation: "+t)})}}
e.default=t}),define("webmarks/locales/de/config",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={}}),define("webmarks/locales/de/translations",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={welcome_page:{welcome_to_webmarks:"Willkommen bei Webmarks!",please_connect_your_remote_storage_first:"<p>Mit Webmarks kannst du Bookmarks in deinem eigenen Datenspeicher ablegen und synchronisieren.</p><p>Bitte verbinde nun deinen Datenspeicher (rechts oben).",upcoming_relase_note:"(Dies ist für die kommende Release-Version von Webmarks nicht erforderlich.)"},bookmark:{new:{header:"Bookmark hinzufügen",bookmarklet:{use_text:"Verwende das Lesezeichen",drag_text:"Ziehe den folgenden Link in deine Lesezeichen-Symbolleiste:",create_webmark:"Webmark erstellen"}},index:{updated:"aktualisiert",you_have_not_stored_any_bookmarks_yet:"Du hast noch keine Lesezeichen gespeichert.",add_the_first_one:"Füge das erste hinzu"},edit:{header:"Bookmark aktualisieren",form:{title:"Titel",url:"URL",description:"Beschreibung",tags:"Tags",save:"Speichern",cancel:"Abbrechen"}}},links:{add_new:"Neu hinzufügen",edit:"Editieren",delete:"Löschen"},inputs:{text_fields:{"search.placeholder":"Suche"}}}}),define("webmarks/locales/en/config",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={}})
define("webmarks/locales/en/translations",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={welcome_page:{welcome_to_webmarks:"Welcome to Webmarks!",please_connect_your_remote_storage_first:"<p>With Webmarks, you can save and synchronize bookmarks in a storage of your choice.</p><p>Please connect your remote storage first.</p>",upcoming_relase_note:"(This will not be necessary for the upcoming release version of Webmarks.)"},bookmark:{new:{header:"Add a new bookmark",bookmarklet:{use_text:"Use the bookmarklet",drag_text:"Drag this to your bookmarks toolbar:",create_webmark:"Create Webmark"}},index:{updated:"updated",you_have_not_stored_any_bookmarks_yet:"You haven&#39;t stored any bookmarks yet.",add_the_first_one:"Add the first one"},edit:{header:"Update bookmark",form:{title:"Title",url:"URL",description:"Description",tags:"Tags",save:"Save",cancel:"Cancel"}}},links:{add_new:"Add new",edit:"Edit",delete:"Delete"},inputs:{text_fields:{"search.placeholder":"Search"}}}}),define("webmarks/mixins/require-rs-connection",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Mixin.create({storage:Ember.inject.service(),beforeModel:function(e){this._super.apply(this,arguments),this.storage.connected||(this.controllerFor("application").set("attemptedTransition",e),this.transitionTo("welcome"))}})
e.default=t}),define("webmarks/models/bookmark",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Object.extend({id:"",url:"",title:"",description:"",tags:null,createdAt:null,updatedAt:null,init:function(){this._super.apply(this,arguments)},createdAtTimeAgo:Ember.computed("createdAt",function(){return moment(this.createdAt).fromNow()}),updatedAtTimeAgo:Ember.computed("updatedAt",function(){return moment(this.updatedAt).fromNow()}),domain:Ember.computed("url",function(){var e=document.createElement("a")
return e.href=this.url,e.hostname}),serialize:Ember.computed("url","title","description","tags","createdAt",function(){var e=this.getProperties("url","title","description"),t=this.tags||[],n=this.createdAt
return null!==n&&(e.createdAt=n),t&&t.length>0&&("string"==typeof t&&(t=t.split(",")),e.tags=t.map(Ember.$.trim).reject(function(e){return Ember.isEmpty(e)})),e})})
e.default=t}),define("webmarks/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("webmarks/router",["exports","webmarks/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("welcome",{path:"/welcome"}),this.route("bookmarks",function(){this.route("new",{queryParams:["title","url"]}),this.route("edit",{path:"edit/:bookmark_id"})})})
var o=n
e.default=o}),define("webmarks/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({i18n:Ember.inject.service()})
e.default=t}),define("webmarks/routes/bookmarks/edit",["exports","webmarks/models/bookmark","webmarks/mixins/require-rs-connection"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Route.extend(n.default,{storage:Ember.inject.service(),i18n:Ember.inject.service(),model:function(e){return this.storage.getBookmark(e.bookmark_id)},setupController:function(e,n){var o=this.storage.getTagListCache()
e.set("availableTags",o),this._super(e,t.default.create(n))}})
e.default=o}),define("webmarks/routes/bookmarks/index",["exports","webmarks/mixins/require-rs-connection"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Route.extend(t.default,{storage:Ember.inject.service(),i18n:Ember.inject.service(),model:function(){return this.storage.getBookmarks()}})
e.default=n}),define("webmarks/routes/bookmarks/new",["exports","webmarks/models/bookmark","webmarks/mixins/require-rs-connection"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Route.extend(n.default,{storage:Ember.inject.service(),i18n:Ember.inject.service(),model:function(e){var n={}
return e.title&&e.url&&(n.title=e.title,n.url=e.url),t.default.create(n)},setupController:function(e,t){t.title.length>0&&e.set("bookmarkletUsed",!0)
var n=this.storage.getTagListCache()
e.set("availableTags",n),this._super(e,t)},resetController:function(e){e.queryParams.forEach(function(t){e.set(t,null)})}})
e.default=o}),define("webmarks/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({storage:Ember.inject.service(),redirect:function(){this.storage.connected?this.transitionTo("bookmarks.index"):this.transitionTo("welcome")}})
e.default=t}),define("webmarks/routes/welcome",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({i18n:Ember.inject.service(),storage:Ember.inject.service(),beforeModel:function(){this.storage.connected&&(console.log("ohai"),this.transitionTo("index"))}})
e.default=t}),define("webmarks/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("webmarks/services/i18n",["exports","ember-i18n/services/i18n"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("webmarks/services/storage",["exports","webmarks/config/environment","webmarks/models/bookmark","npm:remotestoragejs","npm:remotestorage-widget","npm:remotestorage-module-bookmarks"],function(e,t,n,o,a,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Service.extend(Ember.Evented,{remoteStorage:null,widget:null,connecting:!0,connected:!1,archiveBookmarks:null,bookmarksLoaded:!1,tags:null,init:function(){this._super.apply(this,arguments),this.set("archiveBookmarks",[]),"test"!==t.default.environment&&(this.setupRemoteStorage(),this.setupConnectWidget(),this.setupEventHandlers())},getBookmarks:function(){var e=this
return new Ember.RSVP.Promise(function(t,n){e.bookmarksLoaded?t(e.archiveBookmarks):e.loadBookmarks().then(function(e){t(e)}).catch(n)})},getBookmark:function(e){var t=this
return new Ember.RSVP.Promise(function(n,o){t.bookmarksLoaded?n(t.archiveBookmarks.findBy("id",e)):t.loadBookmarks().then(function(t){n(t.findBy("id",e))}).catch(o)})},fetchBookmarks:function(){var e=this.remoteStorage.bookmarks.archive
return new Ember.RSVP.Promise(function(t){e.getAll(!1).then(t)})},loadBookmarks:function(){var e=this
return this.fetchBookmarks().then(function(t){var o=e.archiveBookmarks
return t.forEach(function(e){if(Ember.isEmpty(e.title)||Ember.isEmpty(e.url))console.warn("Encountered an invalid bookmark object",e)
else{var t=n.default.create({id:e.id,url:e.url,title:e.title,description:e.description,tags:e.tags,createdAt:e.createdAt}),a=o.findBy("id",t.id)
a&&o.removeObject(a),o.pushObject(t)}}),e.set("bookmarksLoaded",!0),e.createTagListCache(),e.setupChangeHandler(),o})},removeBookmark:function(e){var t=this,n=this.archiveBookmarks.findBy("id",e)
return this.remoteStorage.bookmarks.archive.remove(e).then(function(){t.archiveBookmarks.removeObject(n)})},storeBookmark:function(e){var t=this
return this.remoteStorage.bookmarks.archive.store(e).then(function(e){var o=t.archiveBookmarks.findBy("id",e.id)
o&&t.archiveBookmarks.removeObject(o)
var a=n.default.create(e)
t.archiveBookmarks.pushObject(a)})},setupRemoteStorage:function(){var e=new o.default({modules:[r.default.default]})
this.set("remoteStorage",e),e.access.claim("bookmarks","rw"),e.caching.enable("/bookmarks/archive/"),e.setApiKeys({dropbox:t.default.dropboxAppKey,googledrive:t.default.gdriveClientId})},setupConnectWidget:function(){var e=new a.default(this.remoteStorage,{domID:"remotestorage-connect",redirectUri:window.location.href})
e.attach(),this.set("widget",e)},setupChangeHandler:function(){var e=this
this.remoteStorage.bookmarks.client.scope("archive/").on("change",function(t){Ember.run(function(){var o=e.archiveBookmarks
if(t.origin.match(/remote/)){var a
if(!t.oldValue&&t.newValue){a=n.default.create(t.newValue)
var r=o.findBy("id",a.id)
r&&(console.warn("Received change event for a new item that was already cached",r,t),o.removeObject(r)),o.pushObject(a)}if(t.oldValue&&!t.newValue&&(a=o.findBy("id",t.oldValue.id),o.removeObject(a)),t.oldValue&&t.newValue){a=n.default.create(t.newValue)
var i=o.findBy("id",a.id)
i&&o.removeObject(i),o.pushObject(a)}}})})},setupEventHandlers:function(){var e=this,t=this.remoteStorage
t.on("ready",function(){console.debug("rs.on ready")}),t.on("connected",function(){console.debug("rs.on connected"),e.set("connecting",!1),e.set("connected",!0),e.trigger("connected")}),t.on("not-connected",function(){console.debug("rs.on not-connected"),e.set("connecting",!1),e.set("connected",!1)}),t.on("disconnected",function(){console.debug("rs.on disconnected"),e.set("connecting",!1),e.set("connected",!1),e.trigger("disconnected"),e.set("archiveBookmarks",[])}),t.on("connecting",function(){console.debug("rs.on connecting"),e.set("connecting",!0),e.set("connected",!1)}),t.on("authing",function(){console.debug("rs.on authing"),e.set("connecting",!0),e.set("connected",!1)})},createTagListCache:function(){var e=this.archiveBookmarks.mapBy("tags").compact().reduce(function(e,t){return e.concat(t)},[""]).reject(function(e){return Ember.isEmpty(e)}).uniq().sort()
console.debug("[storage] Writing tag list to localStorage",JSON.stringify(e))
try{localStorage.setItem("webmarks:tags",e)}catch(e){console.warn("[storage] Error writing tag list to localStorage",e)}},getTagListCache:function(){var e=localStorage.getItem("webmarks:tags")
return Ember.isPresent(e)?e.split(","):(console.warn("[storage] Tag list from cache was empty"),[])},deleteTagListCache:function(){try{return localStorage.removeItem("webmarks:tags")}catch(e){return console.warn("[storage] Error deleting tag list from localStorage",e),!1}}})
e.default=i}),define("webmarks/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"UO1/bBQQ",block:'{"symbols":[],"statements":[[7,"div"],[11,"class","container"],[9],[0,"\\n  "],[7,"aside"],[9],[0,"\\n    "],[7,"header"],[9],[0,"\\n      "],[7,"h1"],[9],[4,"link-to",["index"],[["class"],["pure-menu-heading"]],{"statements":[[7,"img"],[11,"src","/img/icon-128-b620f7a5c6bf8098fe01f2363fc800e2.png"],[11,"alt","Webmarks"],[9],[10]],"parameters":[]},null],[10],[0,"\\n    "],[10],[0,"\\n    "],[7,"nav"],[11,"class","main"],[9],[0,"\\n      "],[7,"ul"],[9],[0,"\\n        "],[7,"li"],[9],[4,"link-to",["bookmarks.new"],[["title"],[[27,"t",["links.add_new"],null]]],{"statements":[[1,[21,"icon-add"],false]],"parameters":[]},null],[10],[0,"\\n      "],[10],[0,"\\n    "],[10],[0,"\\n  "],[10],[0,"\\n  "],[7,"main"],[9],[0,"\\n    "],[1,[21,"outlet"],false],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"webmarks/templates/application.hbs"}})
e.default=t}),define("webmarks/templates/bookmarks",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"qH8Por1y",block:'{"symbols":[],"statements":[[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"webmarks/templates/bookmarks.hbs"}})
e.default=t}),define("webmarks/templates/bookmarks/edit",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"9naBa5oe",block:'{"symbols":[],"statements":[[7,"section"],[11,"id","bookmark-edit"],[9],[0,"\\n  "],[7,"header"],[9],[0,"\\n    "],[7,"h2"],[9],[1,[27,"t",["bookmark.edit.header"],null],false],[10],[0,"\\n  "],[10],[0,"\\n\\n  "],[1,[27,"bookmark-form",null,[["bookmark","availableTags","commit","cancel"],[[23,["model"]],[23,["availableTags"]],[27,"action",[[22,0,[]],"commit"],null],[27,"action",[[22,0,[]],"cancel"],null]]]],false],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"webmarks/templates/bookmarks/edit.hbs"}})
e.default=t}),define("webmarks/templates/bookmarks/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"/7imzFbK",block:'{"symbols":["item","tag"],"statements":[[7,"section"],[11,"id","search"],[9],[0,"\\n  "],[1,[27,"bookmark-search",null,[["filterText"],[[23,["filterText"]]]]],false],[0,"\\n"],[10],[0,"\\n\\n"],[4,"if",[[23,["model"]]],null,{"statements":[[0,"  "],[7,"ul"],[11,"class","bookmark-list"],[9],[0,"\\n"],[4,"each",[[23,["filteredContent"]]],null,{"statements":[[0,"      "],[7,"li"],[11,"class","bookmark"],[9],[0,"\\n        "],[7,"h4"],[11,"class","heading"],[9],[0,"\\n          "],[7,"a"],[12,"href",[22,1,["url"]]],[11,"target","_blank"],[11,"rel","noopener"],[9],[1,[22,1,["title"]],false],[10],[0,"\\n        "],[10],[0,"\\n        "],[7,"p"],[11,"class","meta"],[9],[0,"\\n          "],[7,"span"],[11,"class","domain"],[9],[1,[22,1,["domain"]],false],[10],[0,"\\n          ·\\n          "],[7,"span"],[11,"class","date"],[9],[1,[22,1,["createdAtTimeAgo"]],false],[10],[0,"\\n"],[4,"if",[[22,1,["updatedAt"]]],null,{"statements":[[0,"            ("],[1,[27,"t",["bookmark.index.updated"],null],false],[0," "],[7,"span"],[11,"class","date"],[9],[1,[22,1,["updatedAtTimeAgo"]],false],[0,")"],[10],[0,"\\n"]],"parameters":[]},null],[4,"if",[[22,1,["tags"]]],null,{"statements":[[0,"            ·\\n"],[4,"each",[[22,1,["tags"]]],null,{"statements":[[0,"              "],[7,"span"],[11,"class","tag"],[9],[1,[22,2,[]],false],[10],[0,"\\n"]],"parameters":[2]},null]],"parameters":[]},null],[0,"        "],[10],[0,"\\n        "],[7,"div"],[11,"class","actions"],[9],[0,"\\n          "],[4,"link-to",["bookmarks.edit",[22,1,[]]],[["title"],[[27,"t",["links.edit"],null]]],{"statements":[[1,[21,"icon-edit"],false]],"parameters":[]},null],[0,"\\n          "],[7,"a"],[12,"title",[27,"t",["links.delete"],null]],[11,"role","button"],[9],[1,[21,"icon-trash"],false],[3,"action",[[22,0,[]],"remove",[22,1,[]]]],[10],[0,"\\n        "],[10],[0,"\\n        "],[4,"if",[[22,1,["description"]]],null,{"statements":[[7,"p"],[11,"class","description"],[9],[1,[22,1,["description"]],false],[10]],"parameters":[]},null],[0,"\\n      "],[10],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[10],[0,"\\n"]],"parameters":[]},{"statements":[[0,"  "],[7,"div"],[11,"class","no-bookmarks"],[9],[0,"\\n    "],[7,"p"],[9],[1,[27,"t",["bookmark.index.you_have_not_stored_any_bookmarks_yet"],null],false],[10],[0,"\\n    "],[7,"p"],[9],[4,"link-to",["bookmarks.new"],null,{"statements":[[1,[27,"t",["bookmark.index.add_the_first_one"],null],false]],"parameters":[]},null],[10],[0,"\\n  "],[10],[0,"\\n"]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"webmarks/templates/bookmarks/index.hbs"}})
e.default=t}),define("webmarks/templates/bookmarks/new",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"F+xa+2fd",block:'{"symbols":[],"statements":[[7,"section"],[11,"id","bookmark-new"],[9],[0,"\\n  "],[7,"header"],[9],[0,"\\n    "],[7,"h2"],[9],[1,[27,"t",["bookmark.new.header"],null],false],[10],[0,"\\n  "],[10],[0,"\\n\\n  "],[1,[27,"bookmark-form",null,[["bookmark","availableTags","commit","cancel"],[[23,["model"]],[23,["availableTags"]],[27,"action",[[22,0,[]],"commit"],null],[27,"action",[[22,0,[]],"cancel"],null]]]],false],[0,"\\n"],[10],[0,"\\n\\n"],[4,"unless",[[23,["bookmarkletUsed"]]],null,{"statements":[[0,"  "],[7,"section"],[11,"id","bookmarklet"],[9],[0,"\\n    "],[7,"h3"],[9],[1,[27,"t",["bookmark.new.bookmarklet.use_text"],null],false],[10],[0,"\\n    "],[7,"p"],[11,"class","hint"],[9],[1,[27,"t",["bookmark.new.bookmarklet.drag_text"],null],false],[10],[0,"\\n    "],[7,"p"],[9],[7,"a"],[12,"href",[21,"bookmarkletLink"]],[11,"class","button"],[9],[1,[27,"t",["bookmark.new.bookmarklet.create_webmark"],null],false],[10],[10],[0,"\\n  "],[10],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"webmarks/templates/bookmarks/new.hbs"}})
e.default=t}),define("webmarks/templates/loading",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"T5sUasVs",block:'{"symbols":[],"statements":[[7,"section"],[11,"id","loading"],[9],[0,"\\n  "],[7,"div"],[11,"class","loading-spinner"],[9],[0,"\\n    "],[7,"div"],[11,"class","bounce1"],[9],[10],[0,"\\n    "],[7,"div"],[11,"class","bounce2"],[9],[10],[0,"\\n    "],[7,"div"],[11,"class","bounce3"],[9],[10],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"webmarks/templates/loading.hbs"}})
e.default=t}),define("webmarks/templates/welcome",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"f+LByejo",block:'{"symbols":[],"statements":[[7,"section"],[11,"id","welcome"],[9],[0,"\\n  "],[7,"h2"],[9],[1,[27,"t",["welcome_page.welcome_to_webmarks"],null],false],[10],[0,"\\n  "],[1,[27,"t",["welcome_page.please_connect_your_remote_storage_first"],null],false],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"webmarks/templates/welcome.hbs"}})
e.default=t}),define("webmarks/utils/i18n/compile-template",["exports","ember-i18n/utils/i18n/compile-template"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("webmarks/utils/i18n/missing-message",["exports","ember-i18n/utils/i18n/missing-message"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("webmarks/config/environment",[],function(){try{var e="webmarks/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("webmarks/app").default.create({name:"webmarks",version:"1.0.0-beta+770c9984"})
