class CreateNetflixes < ActiveRecord::Migration[7.0]
  def change
    create_table :netflixes do |t|

      t.timestamps
    end
  end
end
