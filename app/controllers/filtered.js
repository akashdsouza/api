import Ember from "ember";

const { alias } = Ember.computed;

export default Ember.Mixin.create({
  needs: ['klass'],
  private: alias('controllers.klass.private'),
  deprecated: alias('controllers.klass.deprecated'),
  inherited: alias('controllers.klass.inherited'),
  protected: alias('controllers.klass.protected')
});
