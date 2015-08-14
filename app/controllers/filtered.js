import Ember from "ember";

const { Mixin } = Ember;
const { alias } = Ember.computed;

export default Mixin.create({
  needs: ['klass'],
  private: alias('controllers.klass.private'),
  deprecated: alias('controllers.klass.deprecated'),
  inherited: alias('controllers.klass.inherited'),
  protected: alias('controllers.klass.protected')
});
