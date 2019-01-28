#include <stdio.h>
void main() {
  int Count, Counter=1;
  printf("How many natural numbers you want to print?");
  scanf("%d", &Count);
  printf("The natural numbers upto %d are",Count);
  while(Counter <= Count) {
    printf(" %d", Counter);
    Counter = Counter + 1;
  }
  printf(".");
  printf("\n");
}