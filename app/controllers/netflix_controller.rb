class NetflixController < ApplicationController
    def index
        @netflix = Netflix.all
    end
end
