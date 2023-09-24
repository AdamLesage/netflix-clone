Rails.application.routes.draw do
  root 'netflix#index'

  get '/users', to: 'users#index'
end
