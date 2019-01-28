Number = int(input("Enter the number upto which number the series you want to print?"))
SeriesCounter = 1
print("The term in the series upto " + str(Number) + " are",end = "")
Product = 1
Counter = 1
while((Product * SeriesCounter) <= Number):
  Counter = 1
  Product = 1
  while(Counter <= SeriesCounter):
    Product = Product * SeriesCounter
    Counter = Counter + 1
  if(Product < Number):
      print(" " + str(Product), end="")
  SeriesCounter = SeriesCounter + 1
print(".")
  