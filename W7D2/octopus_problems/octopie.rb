def sluggish_octopus(fish)
    prey = fish.dup
    sorted = false

    until sorted
        sorted = true
        (0...prey.length - 1).each do |idx|
            if prey[idx].length < prey[idx + 1].length
                sorted = false
                prey[idx], prey[idx + 1] = prey[idx + 1], prey[idx]
            end
        end
    end
    prey.first
end

def dominant_octopus(fish)
    merge_sort(fish) { |a, b| a.length <=> b.length }.last
end

def merge_sort (array, &prc)
    return array if array.length <= 1

    mid_idx = array.length / 2
    merge(
      merge_sort(array.take(mid_idx), &prc),
      merge_sort(array.drop(mid_idx), &prc),
      &prc
    )
end

def merge(left, right, &prc)
    merged_array = []
    prc ||= Proc.new { |num1, num2| num1 <=> num2 }
    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged_array << left.shift
      when 0
        merged_array << left.shift
      when 1
        merged_array << right.shift
      end
    end

    merged_array + left + right
end

def clever_octopus(fish)
    largest_found = ""

    fish.each do |possible_dinner|
        largest_found = possible_dinner if largest_found.length < possible_dinner.length
    end
    largest_found
  end

def slow_dance(direction, tiles_array)
    tiles_array.each_with_index do |tile, tentacle|
        return tentacle if tile == direction
    end
    nil
end

def fast_dance(direction, tile_hash)
    tile_hash[direction]
end