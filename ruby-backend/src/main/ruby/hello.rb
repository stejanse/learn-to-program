require 'sinatra'

$todo_items = [
  {:id => 1, :done => false, :message => 'Finish this exercise'}
]

configure do
  set :bind, '0.0.0.0'
end

get '/api/todo_items' do
  $todo_items.to_json
end

post '/api/todo_items' do
  todo_item = JSON.parse(request.body.read, :symbolize_names => true)
  $todo_items.push(todo_item)

  todo_item.to_json
end
