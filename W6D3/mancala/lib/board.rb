require "byebug"

class Board
  attr_reader :names
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14) { Array.new }
    place_stones
    @names = [name1, name2]
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    (0..5).each do |lower_cups|
      4.times { self.cups[lower_cups] << :stone }
    end
    (7..12).each do |upper_cups|
      4.times { self.cups[upper_cups] << :stone}
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless start_pos.between?(0, 5) || start_pos.between?(7, 12)
    raise "Starting cup is empty" if cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    begin
      valid_move?(start_pos)
      stones_to_move = cups[start_pos].length
      self.cups[start_pos] = []
      opponent_store_idx = names.index(current_player_name) == 0 ? 13 : 6
      current_position = start_pos + 1
      until stones_to_move == 0
        unless opponent_store_idx == current_position
          self.cups[current_position] << :stone 
          stones_to_move -= 1
        end
        current_position = (current_position + 1) % 14 unless stones_to_move == 0
      end
      render
      return next_turn(current_position)
    rescue
      return :prompt
    end
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    return :prompt if ending_cup_idx == 6 || ending_cup_idx == 13
    return :switch if cups[ending_cup_idx].length == 1
    ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    [cups[0..6], cups[7..12]].any? do |side|
      side.all? { |cup| cup.empty? }
    end
  end

  def winner
    
  end
end
