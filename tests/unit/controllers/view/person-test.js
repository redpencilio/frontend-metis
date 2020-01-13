import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | view/person', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:view/person');
    assert.ok(controller);
  });
});
