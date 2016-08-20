import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      posts: this.store.findAll('post')
    };
    //return {
      //posts: [
        //{title: 'Hola', body: 'abc'},
        //{title: 'Adios', body: 'xyz'}
      //]
    //};
  },

  setupController(controller, model) {
    controller.setProperties(model);
  }
});
