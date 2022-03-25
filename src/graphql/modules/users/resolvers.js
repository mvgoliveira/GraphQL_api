import { UserModel } from "../../../models/User"

const usersResolvers = {
  Query: {
    users: async () => await UserModel.find(),
    user: async (_, { id }) => await UserModel.findById(id),
  },

  Mutation: {
    createUser: async (_, {data}) => await UserModel.create(data),
    updateUser: (_, {id, data}) => UserModel.findOneAndUpdate(id, data, {new: true }),
    deleteUser: async (_, { id }) => !!(await UserModel.findOneAndDelete(id))
  }
}

export default usersResolvers;