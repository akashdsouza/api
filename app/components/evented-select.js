import Ember from 'ember';

const { Select, TargetActionSupport, on } = Ember;
const { alias } = Ember.computed;

export default Select.extend(TargetActionSupport, {
  target: alias('controller'),

  onChange: on('change', function(){
    this.triggerAction({
      action: this.get('action'),
      actionContext: [this.selection, this._oldValue]
    });
    this._oldValue = this.selection;
  })

});
