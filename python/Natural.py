Number1 = int(input("How many natural numbers you want to print?")) 
Count = 0
Counter = 1
print("The first " + str(Number1) + " natural numbers are", end = '')
while(Count  < Number1):
  print(" "+str(Counter), end = '')
  Counter = Counter + 1
  Count = Count + 1
print(".")
  