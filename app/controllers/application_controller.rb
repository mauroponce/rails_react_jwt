class ApplicationController < ActionController::API
  include ::ActionController::Cookies
  before_action :authenticate

  def authenticate
    jwt = cookies.signed[:jwt]
    user_id = JsonWebToken.decode(jwt)[:user_id]
    @current_user = User.find(user_id)

    rescue ActiveRecord::RecordNotFound, JWT::DecodeError => e
      render json: { errors: 'Unauthorized' }, status: :unauthorized
  end

  protected
    def current_user
      @current_user
    end
end
