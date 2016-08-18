class VideogamesController < ApplicationController

  def index
    @videogames = Videogame.all
  end

  def show
    @videogame = Videogame.find_by(id: params[:id])
    render json: @videogame
  end

  def create
    @videogame = Videogame.new(name: params[:name], release_date: params[:release_date], genre: params[:genre], gameplay: params[:gameplay], steen_rating: params[:steen_rating])
    @videogame.save
    render :show
  end

  def update
    @videogame = Videogame.find_by(id: params[:id])
    @videogame.assign_attributes(name: params[:name], release_date: params[:release_date], genre: params[:genre], gameplay: params[:gameplay], steen_rating: params[:steen_rating])
    @videogame.save
    render :show
  end

  def destroy
    @videogame = Videogame.find_by(id: params[:id]).destroy
    render :show
  end

end
