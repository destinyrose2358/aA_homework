class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    system "clear"
    print "Get Ready"
    4.times do
      sleep(0.5)
      print "."
    end
    print "\n"
    take_turn until game_over
    game_over_message
    reset_game    
  end

  def take_turn
    show_sequence
    system "clear"
    begin
      require_sequence
    rescue
      self.game_over = true
    end
    system "clear"
    unless game_over
      round_success_message
      self.sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    seq.each_with_index do |color,idx|
      text_offset = idx % 2 == 0 ? 6 - color.length : 6
      puts  " " * text_offset + "#{color}"
      sleep(1)
    end
  end

  def require_sequence
    seq.each do |color|
      puts "What's next?"
      raise "Lost" unless color == gets.chomp
    end
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "Good work, next round!"
    sleep(1)
  end

  def game_over_message
    puts "Wow, you made it #{sequence_length - 1} turns! Try again"
    sleep(2)
    system "clear"
  end

  def reset_game
    self.sequence_length = 1
    self.game_over = false
    self.seq = []
  end
end

if __FILE__ == $PROGRAM_NAME
  simon = Simon.new
  simon.play
end