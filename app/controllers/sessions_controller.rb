class SessionsController < ApplicationController
  skip_before_action :authenticate

  def create
    user = User.find_by(email: login_params[:email])
    if user.authenticate(login_params[:password])
      jwt = JsonWebToken.encode({user_id: user.id})
      cookies.signed[:jwt] = {
        value:  jwt,
        httponly: true
      }
      render json: { user: user }
    else
      render json: { error: 'Username or password incorrect'},
        status: :unauthorized
    end
  end

  def destroy
    cookies.delete(:jwt)
  end

  private
    def login_params
      params.permit(:email, :password)
    end
end