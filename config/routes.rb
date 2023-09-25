Rails.application.routes.draw do
  get 'manage_profiles/index'
  root 'netflix#index'

  get '/users', to: 'users#index'
  get '/browse', to: 'browse#index'
  get '/ManageProfiles', to: 'manage_profiles#index'
end
