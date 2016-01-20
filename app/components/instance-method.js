import Ember from 'ember';
import InstanceItemComponent from "./instance-item";

const { computed } = Ember;

export default InstanceItemComponent.extend({
  itemType: 'method',
  routeName: 'klass.methods.method',

  parameterSentence: computed('item.params.[]', function(){
    return this.get('item.params').mapProperty('name').join(', ');
  })
});
