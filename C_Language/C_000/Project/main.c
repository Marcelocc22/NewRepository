#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
	
	float m;
	
	printf("Insira a nota: \n");
		scanf("%f", &m);
	
	if(m >= 7.00){
		printf("Aprovado!\n");
	}
	
	return 0;
}