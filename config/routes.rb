Rails.application.routes.draw do
  resources :users
  post 'users/login', to: 'sessions#create'
  delete 'users/logout', to: 'sessions#destroy'
end
