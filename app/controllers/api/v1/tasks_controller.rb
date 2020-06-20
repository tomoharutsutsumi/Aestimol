class Api::V1::TasksController < ApplicationController
  skip_before_action :verify_authenticity_token
  #serializer?
  def index
  end

  def create
    head :no_content
  end
end