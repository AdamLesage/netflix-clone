class CreateTrailers < ActiveRecord::Migration[7.0]
  def change
    create_table :trailers do |t|
      t.string :title
      t.string :description
      t.string :picture_url
      t.string :register
      t.string :logo_url

      t.timestamps
    end
  end
end
