var readln = typeof readline === 'function' ? readline : (function() {
   importPackage(java.io);
   importPackage(java.lang);
   var stdin = new BufferedReader(new InputStreamReader(System['in']));
   return function() {
     return String(stdin.readLine());   
   };                                    
 }());
importPackage(java.io);
importPackage(java.lang);
var readln = typeof readline === 'function' ? readline : (function() {
var stdin = new BufferedReader(new InputStreamReader(System['in']));
return function() {
    return String(stdin.readLine());   
  };                                    
}());

print("In how many numbers you want to find out the biggest number?: ");
Limit = parseInt(readln());
var Numbers = [Limit];
print("Enter the first number: ");
Numbers[0] = parseInt(readln());
var Count = 1
while (Count < Limit) {
  console.log("Enter the next number: ")
  Numbers[Count] = parseInt(readln())
  Count = Count + 1
}
Count = 0
var MaximumNumber = 0
while(Count < Limit) {
  if(MaximumNumber < Numbers [Count]) {
    MaximumNumber = Numbers[Count]
  }
  Count = Count + 1
}
Output = "The biggest number among "
Count = 0
while(Count < Limit) {
  Output = Output + " " + Numbers[Count]
  Count = Count + 1
}
Output = Output + " is " + MaximumNumber + "."
print(Output)
