class Api::V1::TasksController < ApplicationController
  skip_before_action :verify_authenticity_token
  #serializer?
  def index
  end

  def create
    begin
      Task.create!(task_params)
    rescue => e
      render json: { error: e.message }, status: 422
    end
  end

  private

  def task_params
    params.require(:task).permit(:name, :description)
  end
end