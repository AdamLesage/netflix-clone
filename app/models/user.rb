class User < ApplicationRecord
  belongs_to :image, optional: true
end