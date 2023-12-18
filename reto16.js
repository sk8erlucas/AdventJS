function transformTree(tree) {
    function helper(index) {
      if (index >= tree.length || tree[index] === null) {
        return null;
      }
  
      return {
        value: tree[index],
        left: helper(2 * index + 1),
        right: helper(2 * index + 2),
      };
    }
  
    return helper(0);
  }
  
  const tree = [3, 1, 0, 8, 12, null, 1];
  console.log(transformTree(tree));