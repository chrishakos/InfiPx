json.session do
  json.currentUser do
    json.id current_user.id
    json.username current_user.username
  end
end