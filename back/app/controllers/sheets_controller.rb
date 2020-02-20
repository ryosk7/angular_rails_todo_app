class SheetsController < ApplicationController
  def index
    @sheets = Sheet.all
  end
  def show
    # @sheet = Sheet.find
  end
  def create
    @sheet = Sheet.new(sheet_params)

    respond_to do |format|
      if @sheet.save
        format.json { render :show, status: :created, location: @sheet }
      else
        format.json { render json: @sheet.errors, status: :unprocessable_entity }
      end
    end
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sheet
      @comment = Sheet.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sheet_params
      params.require(:sheet).permit(:title, :content)
    end
end
