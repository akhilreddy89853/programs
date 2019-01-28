#include <stdio.h>

int main(void) {
  int Number[100], Count = 0, MaximumNumber = 0, Limit = 0;
  printf("To find the maximum number n numbers, enter the limit:");
  scanf("%d", &Limit);
  printf("Enter the first number: ");
  while(Count < Limit) {
    scanf("%d", &Number[Count];
    Count = Count + 1;
    if(Count < Limit) {
      printf("Enter the next number: ");
    }
  }
  Count = 0;
  while(Count < Limit) {
    if(MaximumNumber < Number[Count]) {
      MaximumNumber = Number[Count];
    }
    Count = Count + 1; 
  }
  Count = 1;
  printf("The maximum number of %d",Number[0]);
  while(Count < Limit) {
    printf(", %d",Number[Count]);
    Count = Count + 1;
  }
  printf(" is %d.", MaximumNumber);
  printf("\n");
  return 0;
}