class CreateProjects < ActiveRecord::Migration
  def up
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.string :github_url
      t.string :live_url
    end
  end

  def down
    drop_table :projects
  end
end
