class UsersController < ApplicationController
  def index
    @users = User.last(5)

    puts "**********"
    @users.each do |user|
      puts user.username
    end
    puts "**********"

    # render json: @users
    respond_to do |format|
      format.json { render '/users/users' }
    end
  end
end
