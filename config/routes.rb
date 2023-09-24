Rails.application.routes.draw do
  root 'netflix#index'

  get '/users', to: 'users#index'
  get '/browse', to: 'browse#index'
end
