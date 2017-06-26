# json.extract! user, :id, :username, :full_name, :bio, :avatar
# json.set! user.id do
  json.id user.id
  json.username user.username
  json.full_name user.full_name
  json.bio user.bio
  json.avatar_url asset_path(user.avatar.url)
  json.followers user.followers.count
  json.following user.followings.count
  json.viewer_follows user.current_user_follows(current_user)
  json.viewer_follow_id user.current_user_follow_id(current_user)

  # json.likes do
  #   json.array! user.likes do |like|
  #     like.photo_id
  #   end
  # end
  # json.photos do
  #   user.photos.each do |photo|
  #     json.set! photo.id do
  #       json.partial! '/api/photos/photo', photo: photo
  #     end
  #   end
  # end
