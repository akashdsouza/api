import Ember from "ember";

const { Route, inject } = Ember;

export default Route.extend({
  ajax: inject.service(),

  model(params){
    return this.get('ajax').request('docs/modules/%@.json'.fmt(params.moduleId));
  },
  afterModel(){
    // megajank. View#willDestroyElement is scheduled after
    // route entering. Not sure where to properly schedule this.
    setTimeout(function(){
      window.scrollTo(0,0);
    }, 10);
  }
});
