class Project < ActiveRecord::Base
  attr_accessible :title, :description, :github_url, :live_url
end
