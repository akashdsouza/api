import Ember from "ember";
import config from '../config/environment';

const { get, computed } = Ember;

export default Ember.Component.extend({
  file: null,
  line: null,
  tagName: 'a',
  attributeBindings: ['href'],
  href: computed('file', 'line', function(){
    return "%@/tree/%@/%@#L%@".fmt(config.githubUrl, config.sha, get(this, 'file'), get(this, 'line'));
  })
});
