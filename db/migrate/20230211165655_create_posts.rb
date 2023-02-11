class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.belongs_to :category, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.string :branch
      t.timestamps
    end
  end
end