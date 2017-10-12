import {
    Factory,
    faker
} from 'ember-cli-mirage';

export default Factory.extend({


    from: faker.internet.userName,
    
    date: faker.date.past,
    
    text: faker.lorem.text

});
