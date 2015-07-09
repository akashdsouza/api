import Ember from "ember";
import ajax from "ic-ajax";

const { Route } = Ember;

export default Route.extend({
  model(){
    var name = this.modelFor('klass').name;
    return ajax('docs/%@/properties.json'.fmt(name));
  }
});
