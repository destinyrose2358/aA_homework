require "byebug"
require "Set"

class GraphNode
    attr_reader :value
    attr_accessor :neighbors

    def initialize(value)
        @value = value
        @neighbors = []
    end

    def self.bfs(starting_node, target_value)
        queue = [starting_node]
        visited_nodes = Set.new
        until queue.empty?
            current_node = queue.shift
            return current_node if current_node.value == target_value
            unvisited_neighbors = current_node.neighbors.reject { |neighbor| visited_nodes.include?(neighbor) }
            queue.push(*unvisited_neighbors)
            visited_nodes.add(current_node)
        end
        nil
    end


end


if __FILE__ == $PROGRAM_NAME
    a = GraphNode.new('a')
    b = GraphNode.new('b')
    c = GraphNode.new('c')
    d = GraphNode.new('d')
    e = GraphNode.new('e')
    f = GraphNode.new('f')
    a.neighbors = [b, c, e]
    c.neighbors = [b, d]
    e.neighbors = [a]
    f.neighbors = [e]
    p GraphNode.bfs(a, "b")
    p GraphNode.bfs(a, "f")
end