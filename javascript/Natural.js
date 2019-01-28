/*eslint-disable no-undef */
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

print ("How many natural numbers you want to print?")
var Count = parseInt(readln())
var Counter = 1
var OutputString = "The first " + Count + " natural numbers are"
while (Counter <= Count ){
 OutputString = OutputString + " " +Counter
 Counter = Counter + 1
}
print(OutputString + ".")
