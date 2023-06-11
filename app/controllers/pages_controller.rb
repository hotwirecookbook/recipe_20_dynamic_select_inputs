class PagesController < ApplicationController
  def home
    @jobs = Job.all
    @specializations = params[:job].present? ? Specialization.where(job_id: params[:job]) : []
  end
end
