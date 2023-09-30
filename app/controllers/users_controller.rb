class UsersController < ApplicationController
  def index
    @users = User.last(5)

    respond_to do |format|
      format.json { render '/users/users' }
    end
  end

  def set_current_user
    @user = User.find_by(id: params[:userId])
  
    if @user
      sign_in @user
      redirect_to browse_path
    else
      flash[:error] = "Utilisateur non trouvé"
      redirect_to root_path
    end
  end

  def get_current_user
    @user = current_user

    respond_to do |format|
      format.json { render '/users/user' }
    end
  end
end
