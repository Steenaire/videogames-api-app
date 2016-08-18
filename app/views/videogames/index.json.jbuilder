json.array! @videogames.each do |videogame|
  json.partial! 'videogame.json.jbuilder', videogame: videogame
end