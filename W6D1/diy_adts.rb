class Stack


    def initialize
        @stack = []
    end

    def push(*el)
        @stack.push(*el)
    end

    def pop
        @stack.pop
    end

    def peek
        @stack.last
    end


end

if __FILE__ == $PROGRAM_NAME
    stack = Stack.new
    stack.push(1, 2, 3, 4, 5)
    puts stack.peek
    puts stack.peek
    puts stack.pop
    puts stack.peek
end


class Queue


    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue << el
    end

    def dequeue
        @queue.shift
    end

    def peek
        @queue.first
    end


end

if __FILE__ == $PROGRAM_NAME
    queue = Queue.new
    queue.enqueue("Sam")
    p queue.peek
    p queue.peek
    queue.enqueue("Doug")
    p queue.peek
    p queue.dequeue
    p queue.peek
end


class Map


    def initialize
        @map = []
    end

    def set(key, value)
        index = find(key)
        index ? @map[index][1] = value : @map << [key, value]
    end

    def get(key)
        index = find(key)
        index ? @map[index][1] : nil
    end

    def delete(key)
        index = find(key)
        @map = @map[0...index] + @map[index + 1..-1]
    end

    def show
        output = "{ "

        @map.each do |pair|
            output += "#{pair[0]} => #{pair[1]}, "
        end
        return output[0...-2] + " }" unless output.length <= 2
        "{ }"
    end

    private

    def find(key)
        return @map.index { |pair| pair[0] == key }
    end


end

if __FILE__ == $PROGRAM_NAME
    map = Map.new
    map.set(1, 3)
    p map.show
    map.set(1, "apple")
    p map.show
    map.delete(1)
    p map.show
end