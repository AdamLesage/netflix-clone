Rails.application.routes.draw do
  devise_for :users
  root 'netflix#index'
  
  get 'manage_profiles/index'
  get '/users', to: 'users#index'
  get '/browse', to: 'browse#index'
  get '/ManageProfiles', to: 'manage_profiles#index'

  get '/set_current_user', to: 'users#set_current_user', as: :set_current_user
  get '/get_current_user', to: 'users#get_current_user', as: :get_current_user
end
