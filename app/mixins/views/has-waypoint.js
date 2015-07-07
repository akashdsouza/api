import Ember from "ember";

const { on, computed } = Ember;

export default Ember.Mixin.create({
  scrollTo: function(){
    throw new Error("Classes using the HasWaypoint mixin must implement scrollTo");
  },
  waypointBecameActive: function(){
    throw new Error("Classes using the HasWaypoint mixin must implement waypointBecameActive");
  },
  addWaypoint: on('didInsertElement', function(){
    var _this = this;

    var wayPoint = new window.Waypoint({
      element: this.element,
      continuous: false,
      enabled: false,
      handler: function() {
        _this.waypointBecameActive();
      }
    });

    this.set('waypoint', wayPoint);

    if (this.get('isVisible')) {
      this.scrollTo();
      this.enableWaypoint();
    }

  }),

  enableWaypoint: on('becameVisible', function(){
    var waypoint = this.get('waypoint');
    waypoint.enable();
  }),

  disableWaypoint: on('becameHidden', function(){
    var waypoint = this.get('waypoint');
    waypoint.disable();
  }),

  removeWaypoint: on('willDestroyElement', function(){
    var waypoint = this.get('waypoint');
    waypoint.destroy();
  }),

  /**
    Until the router becomes a service, this is the crazy way we need to get
    access to the router.
  */
  router: computed(function(){
    return this.container.lookup('router:main');
  }),
});
