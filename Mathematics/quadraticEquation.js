// Given a quadratic equation ax2 + bx + c = 0, find its roots. 
// If the roots are imaginary, return only one integer -1. 
// Always return the roots as the greatest integers less than or equal to the actual roots, with the maximum root first followed by the minimum root.
const quadraticRoots = (a, b, c) =>
{  
    let root1 = 0;
    let root2 = 0;
  
      let discriminant = (b*b) - (4 * a * c);
      if(discriminant < 0){
          return [-1];
      }
      
      if(discriminant >=0 ){
          root1 = Math.floor((-b + Math.sqrt(discriminant))/(2*a));
          root2 = Math.floor((-b - Math.sqrt(discriminant))/(2 * a));
      }
      
      return root1 > root2 ? [root1, root2]: [root2, root1]
  }


//   a = 1, b = -2, c = 1
// Output: 1 1
// Explanation:
// Roots of equation x2-2x+1 are 1 and 1.