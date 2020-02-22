class SheetsController < ApplicationController
  protect_from_forgery
  before_action :set_sheet, only: [:show, :update, :destroy]
  def index
    @sheets = Sheet.all
  end
  def show
    # @sheet = Sheet.find
  end
  def create
    @sheet = Sheet.create!(sheet_params)
  end

  def update
    respond_to do |format|
      if @sheet.update(sheet_params)
        # format.json { render :show, status: :ok, location: @sheet }
      else
        format.json { render json: @sheet.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @sheet.destroy
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sheet
      @sheet = Sheet.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sheet_params
      params.require(:sheet).permit(:title, :content)
    end
end
