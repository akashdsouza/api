import Ember from "ember";

const { Mixin, inject } = Ember;
const { alias } = Ember.computed;

export default Mixin.create({
  klass: inject.controller(),

  private: alias('klass.private'),
  deprecated: alias('klass.deprecated'),
  inherited: alias('klass.inherited'),
  protected: alias('klass.protected')
});
