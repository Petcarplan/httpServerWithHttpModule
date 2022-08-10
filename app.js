const users = [
  {
    id: 1,
    name: 'mong',
    email: 'mong@gmail.com',
    password: '123123',
  },
  {
    id: 2,
    name: 'meow',
    email: 'mingg@gmail.com',
    password: '12qwe3123',
  },
]
const posts = [
  {
    id: 1,
    title: 'barkbark',
    content: 'request/response와 stateless!!',
    userId: 1,
  },
  {
    id: 2,
    title: 'barkbark2',
    content: 'reddd!',
    userId: 1,
  },
]

const createUser = (req, res) => {
  const user = req.body.data
  console.log(user)

  users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  })

  console.log(users.push)

  res.json({ message: 'USER_CREATED' })
}

const createpost = (req, res) => {
  const post = req.body.diary
  console.log(post)

  posts.push({
    id: post.id,
    title: post.title,
    content: post.content,
    userId: post.id,
  })
  console.log(posts.push)

  res.json({ message: 'POST_CREATED' })
}

module.exports = { createUser, createpost }
