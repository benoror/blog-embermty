import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Blog Post #${i}`;
  },
  body: faker.name.firstName,
  avatar() {
    return faker.internet.avatar();
  }
});
