class UsersController < ApplicationController
  def index
    @users = User.last(5)

    respond_to do |format|
      format.json { render '/users/users' }
    end
  end
end
