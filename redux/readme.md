# Redux

## Normalized state
```
user : { fetchingState, user, error}
entities: {
  postPreviews: { byId: { [id: string]: PostPreview }}
  posts: { byId: { [id: string]: Post } },
  comments: { byId: { [id: string]: Comment } },
  authors: { byId: { [id: string]: Author } },
},
pages: {
  home: { previewIds: string[]; },
  posts: { previewIds: string[] },
}
```