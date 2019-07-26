// Write a JavaScript program to check if a point lies strictly inside a given circle.
// Write a JavaScript program to check if a point lies strictly inside a given circle.

function point_inside_a_circle(a, b, x, y, r) {
    let velocityX = 0;
    let velocityY = 0; 
    if (r <= 0) return false;
    if (x > 0 && a > 0 || x < 0 && a < 0) velocityX = Math.abs(x - a);
    else velocityX = Math.abs(x + a);
    if (y > 0 && b > 0 || y < 0 && b < 0) velocityY = Math.abs(y - b);
    else velocityY = Math.abs(y + b);
  
    return (r > velocityX && r > velocityY);
  }
  
  console.log(point_inside_a_circle(-1, 4, 0, 0, 5));
  console.log(point_inside_a_circle(-5, -5, 1, 2, 9));
  console.log(point_inside_a_circle(4, -9, 2, 4, -10));
  
  //___________________________________________________________________________________
  
  function check_a_point(a, b, x, y, r) {
    const dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    if (r <= 0) return false;
    r *= r;
    if (dist_points < r) return true;
    return false;
  }
  
  console.log(check_a_point(0, 0, 2, 4, 6));
  console.log(check_a_point(0, 0, 6, 8, -6));
  