Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/videogames', to: 'videogames#index'
      get '/videogames/:id', to: 'videogames#show'
      post '/videogames', to: 'videogames#create'
      patch '/videogames/:id', to: 'videogames#update'
      delete '/videogames/:id', to: 'videogames#destroy'
    end
    namespace :v2 do
      get '/videogames', to: 'videogames#index'
      get '/videogames/:id', to: 'videogames#show'
      post '/videogames', to: 'videogames#create'
      patch '/videogames/:id', to: 'videogames#update'
      delete '/videogames/:id', to: 'videogames#destroy'
    end
  end
end
