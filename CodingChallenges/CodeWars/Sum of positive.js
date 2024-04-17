/*function positiveSum(arr) {
    let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
          sum += arr[i];
    }
        }
      return sum;
      }*/
      // refactoring
      function positiveSum(arr) {
        return arr.reduce((sum, current) => current > 0 ? sum + current : sum, 0);
    }