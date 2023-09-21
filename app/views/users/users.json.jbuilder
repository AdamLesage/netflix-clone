json.array! @users do |user|
    json.username user.username
    json.image do
        json.image_link user.image.image_link
    end
end