import Ember from "ember";
import config from '../config/environment';

const { computed } = Ember;

export default Ember.Controller.extend({
  rev: config.rev,
  sha: config.sha,
  githubHREF: computed(function(){
    return "%@/commits/%@".fmt(config.githubUrl, config.sha);
  })
});
