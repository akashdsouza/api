import Ember from "ember";

const { Route } = Ember;

export default Route.extend({
  redirect(){
    var appData = this.modelFor('application');
    this.transitionTo('klass', appData.defaultIndex);
  }
});
