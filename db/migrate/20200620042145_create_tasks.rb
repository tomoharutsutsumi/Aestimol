class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.integer :estimate_time
      t.integer :result_time
      t.references :status, foreign_key: true

      t.timestamps
    end
  end
end
