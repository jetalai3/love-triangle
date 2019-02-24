/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let triangleCount = 0;
  for(let i=0; i<preferences.length; i++){
    let first=preferences[i]-1;
    let second = preferences[first]-1;
     let third=preferences[second]-1;
    if(third===i){
      triangleCount+=1;
    }
  }
  return (triangleCount-(triangleCount%3))/3;
};
