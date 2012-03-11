class Visitor < ActiveRecord::Base
  validates :ip, presence: true
  validates :latitude, presence: true
  validates :longitude, presence: true  
end
