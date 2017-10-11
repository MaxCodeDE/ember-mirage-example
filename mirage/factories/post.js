import {
    Factory,
    faker
} from 'ember-cli-mirage';

export default Factory.extend({

    name(i) {
        return `Post ${i+1}`; // +1 because posts have to start with 1(not 0)
    },

    author: faker.name.findName(),
    
    timesRead() {
        return faker.random.number();
    },

    isEmberPost() {
        return faker.random.boolean();
    }
    
    // Note:
    // if uses property as function for each model the faker property will be chanced
    // if uses propery without function each model will be the same value for this property
    // Example: aurhor will be the same for all generated models

});
