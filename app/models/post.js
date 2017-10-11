import DS from 'ember-data';

export default DS.Model.extend({

    name: DS.attr('String'),
    author: DS.attr('String'),
    timesRead: DS.attr('Number'),
    isEmberPost: DS.attr('Boolean'),
    
});
