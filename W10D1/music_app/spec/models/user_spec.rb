require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  describe "#is_password?" do
    subject(:user) { User.new(password: "hunter2")}
    it "should return true is the password matches" do
      expect(user.is_password?("hunter2")).to eq(true)
    end

    it "should return false if the password doesn't match" do
      expect(user.is_password?("hunter1")).to eq(false)
    end
  end

  describe "#reset_session_token!" do
    it "should change the session token to a new value" do
      user = User.create(email: "bob@terf", password: "hunter2")
      session_token = user.session_token
      expect(user.reset_session_token!).to_not eq(session_token)
    end
  end

  describe "::find_by_credentials" do
    user = User.create(email: "fler@ger", password: "hunter2")
    context "when given an existent email" do
      it "should return nil if the password is wrong" do
        expect(User.find_by_credentials("fler@ger", "hunter1")).to eq(nil)
      end
      it "should return a user if the password matches" do
        expect(User.find_by_credentials("fler@ger", "hunter2").email).to eq(user.email)
      end
    end

    it "should return nil otherwise" do
      expect(User.find_by_credentials("fler@gerf", "hunter2")).to eq(nil)
    end
  end
end
