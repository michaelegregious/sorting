

describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect(bubbleSort([])).toEqual( [] );
    });
    
    it('handles a small array', function(){
        expect( bubbleSort([1])).toEqual([1]);
      });

      it('handles a small array', function(){
        expect( bubbleSort([1, 2])).toEqual([1, 2]);
      });
    
      it('sorts an array of two unordered items', function(){
        expect( bubbleSort([2, 1])).toEqual([1, 2]);
      });

      it('sorts an array of two already ordered items', function(){
        expect( bubbleSort([1, 2])).toEqual([1, 2]);
      });

      it('sorts an array of five', function(){
        expect( bubbleSort([3, 2, 1, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      });

  });

