'use strict';

module.exports = function(app) {
  var Foo = app.models.Foo;
  var Bar = app.models.Bar;
  var FooBar = app.models.FooBar;
  var Widget = app.models.Widget;

  Foo.create({
    id: 1,
    name: "foo1"
  }, (err, foo) => {
    if (err)
      console.error(err);
  });

  Bar.create({
    id: 2,
    name: "foo1"
  }, (err, foo) => {
    if (err)
      console.error(err);
  });

  // Associate Foo with Bar
  FooBar.create({
    fooId: 1,
    barId: 2
  }, (err, foo) => {
    if (err)
      console.error(err);
  });

  // Create a couple of widgets (owned by Foo)
  Widget.create({
    id: 3,
    fooId: 1,
    name: "widget3"
  }, (err, foo) => {
    if (err)
      console.error(err);
  });

  Widget.create({
    id: 4,
    fooId: 1,
    name: "widget4"
  }, (err, foo) => {
    if (err)
      console.error(err);
  });
};
