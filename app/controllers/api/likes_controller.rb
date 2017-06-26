class Api::LikesController < ApplicationController
    # before_action :require_signed_in!
    # before_action :require_like_owner!, only: [:destroy]

    def create
      @photo = Photo.find(params[:like][:photo_id])
      @like = Like.new(like_params)
        # debugger

      if @like.save!
        render "api/photos/show"
      else
        render json: @like.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      # debugger
      @like = Like.find(params[:id])
      @photo = Photo.find(params[:like][:photo_id])
      # debugger
      @like.destroy
      render "api/photos/show"
    end

    private
    # end private
    def like_params
      params.require(:like).permit(:photo_id, :user_id)
    end

end






# def current_like
#   @current_like ||= Like.find(params[:id])
# end
#
# def require_like_owner!
#   unless current_like.user_id == current_user.id
#     render json: ["You must be the Like's owner to do that"], status: :unauthorized
#   end
# end