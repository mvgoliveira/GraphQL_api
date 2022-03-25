import { PostModel } from "../../../models/Post"

const postsResolvers = {
  Query: {
    posts: () => PostModel.find(),
    post: (_, { id }) => PostModel.findById(id)
  },

  Mutation: {
    createPost: (_, {data}) => PostModel.create(data),
    updatePost: (_, {id, data}) => PostModel.findOneAndUpdate(id, data, {new: true }),
    deletePost: async (_, { id }) => !!(await PostModel.findOneAndDelete(id))
  }
}

export default postsResolvers;