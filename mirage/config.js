export default function() {
    this.namespace = 'api';

    this.get('/posts');
    this.get('/posts/:id');
    this.get('/posts/:id/comments', (schema, request) => {
        let posts = schema.posts.find(request.params.id);

        return posts.comments;
    });

    // shorthands ->v
    //    this.get('/posts', (schema, request) => {
    //        return schema.posts.all();
    //    });

}
