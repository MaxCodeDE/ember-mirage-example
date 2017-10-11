export default function () {
    this.namespace = 'api';

    this.get('/posts');
    
    // shorthands ->v
//    this.get('/posts', (schema, request) => {
//        return schema.posts.all();
//    });

}
