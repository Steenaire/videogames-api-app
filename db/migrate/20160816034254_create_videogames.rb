class CreateVideogames < ActiveRecord::Migration[5.0]
  def change
    create_table :videogames do |t|
      t.string :name
      t.date :release_date
      t.string :genre
      t.string :gameplay
      t.integer :steen_rating

      t.timestamps
    end
  end
end
