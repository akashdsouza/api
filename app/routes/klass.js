import Ember from "ember";
import ajax from "ic-ajax";

const { Route } = Ember;

export default Route.extend({
  model(params){
    return ajax('docs/%@.json'.fmt(params.classId));
  },
  afterModel(){
    // megajank. View#willDestroyElement is scheduled after
    // route entering. Not sure where to properly schedule this.
    setTimeout(function(){
      window.scrollTo(0,0);
    }, 10);
  }
});

