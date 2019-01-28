#include <stdio.h>

int main(void) {
  int Number, SeriesCounter = 1, Counter = 1, Product = 1;
  printf("Enter the number, upto which number the series want to print?");
  scanf("%d", &Number);
  printf("The term in the series upto %d are", Number);
  while(SeriesCounter <= Number ) {
    Counter = 1;
    Product = 1;
    while(Counter <= SeriesCounter) {
      Product = Product * SeriesCounter;
      Counter = Counter + 1;
    }
    if(Product <= Number) {
      printf(" %d", Product);
    }
    SeriesCounter += 1;
    if(Product > Number) {
      break;
    }
  }
  printf(".");
  printf("\n");
  return 0;
}