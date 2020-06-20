class CreateStatuses < ActiveRecord::Migration[5.2]
  def change
    create_table :statuses do |t|
      t.integer :type, null: false, default: 0

      t.timestamps
    end
  end
end
