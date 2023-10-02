Rails.application.routes.draw do
  # Devise routes for user authentication
  devise_for :users

  # Root route
  root 'netflix#index'

  # Resources for trailers (RESTful routes)
  resources :trailers

  # Manage Profiles route
  get 'manage_profiles/index'

  # Custom routes for users and browse
  get '/users', to: 'users#index'
  get '/browse', to: 'browse#index'

  # User-related routes
  get '/set_current_user', to: 'users#set_current_user', as: :set_current_user
  get '/get_current_user', to: 'users#get_current_user', as: :get_current_user
  get '/get_user_except_current_user', to: 'users#get_user_except_current_user', as: :get_user_except_current_user
end
