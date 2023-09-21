class UsersController < ApplicationController
  def index
    @users = User.last(5)

    render json: @users
    # respond_to do |format|
    #   format.json { render '/users/users.json.jbuilder' }
    # end
  end
end
