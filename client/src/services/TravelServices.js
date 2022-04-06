import Client from './'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/posts')
    return res.data
  } catch (error) {
    throw error
  }
}
// do we need multiple axios calls?
// export const GetLikes = async (postId) => {
//   try {
//     const res = await Client.get(`/posts/${postId}`)
//     return res.data.Likes
//   } catch (error) {
//     throw error
//   }
// }

// export const GetComments = async (postId) => {
//     try {
//       const res = await Client.get(`/posts/${postId}`)
//       return res.data.Comments
//     } catch (error) {
//       throw error
//     }
//   }