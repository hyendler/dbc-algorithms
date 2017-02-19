var ARF_LinkedList; // This will namespace my constructor
(function(){
	function LinkedList(arrayOfValues) {
		var list = this;
		var current; 
		(arrayOfValues || []).forEach(function(value){
			var next = new Node(value);
			if(!current) {
				list.first = next;	
			} else {
				current.next = next;
			}
			current = next;
		});
	}

	function Node(value){
		this.value = value;
	}

	LinkedList.prototype.size = function(){
		var list = this;
		return count(list.first);
		

		function count(node){
			if(!node) return 0;
			return 1 + count(node.next);
		}
	};

	ARF_LinkedList = LinkedList; //assign constructor to lists
})();
