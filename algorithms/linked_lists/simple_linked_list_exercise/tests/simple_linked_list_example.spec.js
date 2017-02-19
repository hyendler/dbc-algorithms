describe('ARF_LinkedList', function() {
	//this links the spec to my implementation, edit ARF_LinkedList to the name of your linked list constructor/object
	var LinkedList = ARF_LinkedList;
		
	var list;
        beforeEach(function(){
		list = new ARF_LinkedList();
        });

        describe('.size', function () {
                it('should return 0 if there are no nodes', function() {
                        expect(list.size()).toEqual(0);
                });
                it('should return number of node if there are some nodes', function() {
			list = new ARF_LinkedList(['one']);
			expect(list.size()).toEqual(1);
			
			list = new ARF_LinkedList(['one', 'two']);
			expect(list.size()).toEqual(2);
			
			list = new ARF_LinkedList(['one', 'two', 'three']);
			expect(list.size()).toEqual(3);
        	});		
        });

	// Here you would continue to add more describe blocks for each of the functions listed in linked lists.
});
