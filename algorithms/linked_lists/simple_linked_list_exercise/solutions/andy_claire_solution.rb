class Element
	attr_accessor :datum, :next

	def initialize(datum)
		@datum = datum
		@next = nil
	end
end

class SimpleLinkedList
	attr_accessor :head

	def initialize(array=nil)
		@head = nil

		if array
			head_value = array.shift
			@head = Element.new(head_value)
			current = @head

			array.each do |value|
				current.next = Element.new(value)
				current = current.next
			end
		end

		# if array
		# 	array.each do |element|
		# 		self.push(Element.new(element))
		# 	end
		# end
	end

	def last
		element = self.head

		return nil unless element

		until element.next.nil?
			element = element.next
		end

		return element
	end

	def push(element)
		# if @head.nil?
		# 	@head = element 
		# 	return self
		# end
		
		# current = @head

		# until current.next.nil?
		# 	current = current.next
		# end

		# current.next = element

		# self

		tail = self.last

		if tail
			tail.next = element
		else
			self.head = element
		end
		self
	end

	def second_to_last
		element = self.head

		return nil unless element && element.next

		until element.next.next.nil?
			element = element.next
		end

		return element
	end

	def pop
		popped = self.last

		# return nil if @head.nil?

		# if !@head.next
		# 	element = @head
		# 	@head = nil
		# 	return element
		# end

		# current = @head
		# prev = nil

		# until current.next.nil?
		# 	prev = current
		# 	current = current.next
		# 	prev.next = nil
		# end

		# current

		second_to_last = self.second_to_last

		if second_to_last
			second_to_last.next = nil
		else
			self.head = nil
		end

		popped
	end

	def to_a
# 		array = []

# 		return array if @head.nil?

# 		current = @head

# 		while current
# 			array.unshift(current.datum)
# 			current = current.next
# 		end

# 		array

		element = self.head
		array = []
		until element.nil?
			array.unshift(element.datum)
			element = element.next
		end
		array
	end

	def reverse!
		# return self if @head.nil

		# previous = @head

		# until current.next.nil?
		# 	@head = current.next
		# end
		current = self.head
		prev = nil

		while current
			next_right = current.next
			current.next = prev
			prev = current
			current = next_right
		end
		
		self.head = prev
		self
	end
	
end