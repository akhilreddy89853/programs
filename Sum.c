#include<stdio.h>
int main() {
    int Number1 = 0, Number2 = 0;
    int Sum = 0; 
    printf("To add two numbers, enter the firt number: ");
    scanf("%d",  &Number1);
    printf("Enter the second number: ");
    scanf("%d",  &Number2);
    Sum = Number1 + Number2;
    printf("The sum of  %d and %d is %d.", Number1, Number2, Sum);
    printf("\n");
    return 0;
}