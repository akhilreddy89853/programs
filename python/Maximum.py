NumberOfList = []
Limit = int(input("To find the largest number between n number, enter how many numbers you want enter: "))
NumberOfList.append(int(input("Enter the firt number: ")))
Count = 1
while(Count < Limit):
  NumberOfList.append(int(input("Enter the next number: ")))
  Count = Count + 1
Count = 1
MaximumNumber = NumberOfList[0]
while(Count < Limit):
  if(MaximumNumber < NumberOfList[Count]):
    MaximumNumber = NumberOfList[Count]
  Count = Count + 1
print("The biggest number among ten numbes is " + str(MaximumNumber) + ".")