import DS from 'ember-data';

export default DS.Model.extend({

    from: DS.attr('String'),
    date: DS.attr('Date'),
    text: DS.attr('String')
    
});
