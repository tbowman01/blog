export default {
  post(id) {
    return {
      path: `/object/${id}`,
      resolve: (response, mappers) => {
        let { title, content, Created_at, metadata } = response.object
        let meta = {
          description: metadata.description,
          published: Created_at,
          author: metadata.author.title
        }
        return mappers.merge({ title, content, ...meta })
      }
    }
  }
}
