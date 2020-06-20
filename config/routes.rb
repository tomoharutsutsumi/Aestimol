Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'tasks#index'

  namespace :api do
    namespace :v1 do
      resources :tasks
    end
  end
end
