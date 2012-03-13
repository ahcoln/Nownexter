class VisitorsController < ApplicationController
  def index
	# get visitor ip address
    @client_ip = request.remote_ip 
	@v=Visitor.new
  end
  
  def create
    @v = Visitor.new(params[:v])	
    respond_to do |format|
      if @v.save
        format.html { redirect_to @v, notice: 'Visitor was successfully created.' }
        format.json { render json: @v, status: :created, location: @v }
      else
        format.html { render action: "index" }
        format.json { render json: @v.errors, status: :unprocessable_entity }
      end
    end
  end
 end
