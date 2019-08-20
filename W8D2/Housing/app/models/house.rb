# == Schema Information
#
# Table name: houses
#
#  id      :bigint           not null, primary key
#  address :string           not null
#

class House < ApplicationRecord
    validates :address, presence: true

    has_many(
        :residents,
        class_name: 'Person',
        foreign_key: :house_id,
        primary_key: :id
    )
end
