const db = require('../db')
const { Posts } = require('../models')

const main = async () => {
  const posts = [
    {
      location: 'Amsterdam',
      country: 'Netherlands',
      continent: 'Europe',
      title: 'The Origins of the Dutch Windmill',
      author: 'Sheeva Shabahang',
      story:
        'Some people love Amsterdam for the debauchery, but I love Amsterdam for its ingenious engineering solutions. One example is the quintessential Dutch windmill. The windmills were initially used to grind grain into flour, but eventually all kinds of industrial applications were added. For example, structural beauties pressed oil, made paint, and could even saw tree trunks!',
      image:
        'https://res.cloudinary.com/dyyjvyqtn/image/upload/v1634517886/Amsterdam_m0ea93.jpg'
    },
    {
      location: 'Cusco',
      country: 'Peru',
      continent: 'South America',
      title: 'Taking a Hike',
      author: 'Jason McCoy',
      story:
        'Cusco, often spelled Cuzco, is a city in southeastern Peru near the Urubamba Valley of the Andes mountain range. It is the capital of the Cusco Region and of the Cusco Province. The city is the seventh most populous in Peru and, in 2017, had a population of 428,450.',
      image:
        'https://res.cloudinary.com/dyyjvyqtn/image/upload/v1634527858/CuscoPeru_d7d9dr.jpg'
    }
  ]

  await Posts.insertMany(posts)
  console.log('Travel incoming!')
}

const run = async () => {
  await main()
  db.close()
}
run()