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