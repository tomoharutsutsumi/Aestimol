class Api::V1::TasksController < ApplicationController
  skip_before_action :verify_authenticity_token
  #serializer?
  def index
  end

  def create
    Task.create!(task_params)
    head :no_content
  end

  private

  def task_params
    params.require(:task).permit(:name, :description)
  end
end