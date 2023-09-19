class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to new_user_registration_path, notice: 'Compte créé avec succès ! Veuillez vous connecter.'
    else
      render :new
    end
  end

  def welcome_user
    respond_to do |format|
      format.json { render json: current_user }
    end
  end

  def get_latest_users
    users = User.last(4)

    respond_to do |format|
      format.json { render json: users }
    end
  end

  def delete_account
    user_id = params[:userId]
    user = User.find_by(id: user_id)
    user.destroy  
  end

  private
    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation, :image)
    end
end
