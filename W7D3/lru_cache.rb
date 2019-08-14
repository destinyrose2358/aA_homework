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