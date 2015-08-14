import Ember from "ember";
import HasWaypoint from "../mixins/views/has-waypoint";

const { Component } = Ember;

export default Component.extend(HasWaypoint, {
  model: null,
  'show-private': false,
  'show-protected': false,
  'show-deprecated': false,
  'show-inherited': false,
  classNames: ['class-items'],
  routeName: null,
  activeChild: false,
  scrollTo(){
    if (!this.get('activeChild')) {
      window.scrollTo(0, this.$().offset().top);
    }
  },
  waypointBecameActive(){
    var router = this.get('router');
    var routeName = this.get('routeName');
    router.replaceWith(routeName);
  },
  actions: {
    childBecameActiveWaypoint(){
      this.set('activeChild', true);
    }
  },
});
