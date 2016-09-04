class Api::V1::VideogamesController < ApplicationController
  def index
    @videogames = Videogame.all
    render json: @videogames
  end

  def show
    @videogame = Videogame.find_by(id: params[:id])
    render json: @videogame
  end

  def create
    @videogame = Videogame.new(name: params[:name], release_date: params[:release_date], genre: params[:genre], gameplay: params[:gameplay], steen_rating: params[:steen_rating])
    if @videogame.save
      render :show
    else
      render json: {errors: @videogame.errors.full_messages}, status: 422 #Need this to handle errors from angular
    end
  end

  def update
    @videogame = Videogame.find_by(id: params[:id])
    @videogame.assign_attributes(name: params[:name], release_date: params[:release_date], genre: params[:genre], gameplay: params[:gameplay], steen_rating: params[:steen_rating])
    @videogame.save
    render :show
  end

  def destroy
    @videogame = Videogame.find_by(id: params[:id]).destroy
    render json: {message:"Videogame Destroyed"}
  end
end
