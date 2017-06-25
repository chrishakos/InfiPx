# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#

User.create({ username: "charles", password: "charles" })
User.create({ username: "raymond", password: "charles" })
User.create({ username: "donald", password: "charles" })
User.create({ username: "frances", password: "charles" })


Photo.create({user_id: 1, caption: 'dis be me', image: File.open('app/assets/images/mr_T.jpg')})
Photo.create({user_id: 2, caption: 'dis be me', image: File.open('app/assets/images/mr_T.jpg')})
Photo.create({user_id: 3, caption: 'dis be me', image: File.open('app/assets/images/mr_T.jpg')})
Photo.create({user_id: 4, caption: 'dis be me', image: File.open('app/assets/images/mr_T.jpg')})

Comment.create({user_id: 2, photo_id: 1, body: 'ayyy is u doe'})
Comment.create({user_id: 1, photo_id: 2, body: 'ayyy is u doe'})
Comment.create({user_id: 4, photo_id: 3, body: 'ayyy is u doe'})
Comment.create({user_id: 3, photo_id: 4, body: 'ayyy is u doe'})
Comment.create({user_id: 2, photo_id: 1, body: 'you took my heart'})

Like.create({user_id: 2, photo_id: 1})
Like.create({user_id: 4, photo_id: 3})
Like.create({user_id: 3, photo_id: 4})
Like.create({user_id: 1, photo_id: 2})
Like.create({user_id: 2, photo_id: 1})
Like.create({user_id: 4, photo_id: 1})
