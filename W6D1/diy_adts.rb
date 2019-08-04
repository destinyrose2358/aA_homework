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