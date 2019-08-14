class LRUCache
    def initialize(size)
        @cache = []
        @size = size
    end

    def count
      # returns number of elements currently in cache
      cache.count
    end

    def add(el)
      # adds element to cache according to LRU principle
      cache.delete(el)
      cache << el
      cache.shift if cache.length > size
    end

    def show
      # shows the items in the cache, with the LRU item first
      p cache
    end

    private
    # helper methods go here!
    attr_accessor :cache, :size

end

# to count takes O(n) time and O(1) space
# to add an element takes O(n) time and O(1) space
# to show the items take O(n) time and I'm not sure about space
# this implementation of lru cache would be bad timewise
# if you have a lot of elements compared to a typical implementation of
# lru cache
#to improve performance we would need to hash our elements, then store those elements
# as a linked list so that each element is connected in the order of usage, but the hash just points
# to the linked list object and the key is a name or some identifier for the object stored in the linked list node