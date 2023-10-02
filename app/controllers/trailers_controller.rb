class TrailersController < ApplicationController
  def index
    @trailers = Trailer.order("RANDOM()").first

    respond_to do |format|
      format.html
      format.json { render json: @trailers }
    end
  end
end
