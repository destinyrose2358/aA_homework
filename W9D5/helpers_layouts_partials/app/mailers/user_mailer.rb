class UserMailer < ApplicationMailer
  default from: 'everybody@appacademy.io'


  def welcome_email(user)
    @user = user
    @url = "http://ninety_nine_cats.com"
    mail(to: "everybody@appacademy.io", subject: 'You want to rent a cat?!')
  end

end
