#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <time.h> 
#include <regex.h>

int main(int argc, char* argv[]) {


	char *test_string = "SET_P99.9_D3_XDES2.5_";
	char *match_string = "_P([0-9]*.[0-9]*)_";
	char buffer[1000];
	double P = 0;
	
	regex_t compiled;
	regmatch_t matches[4];
	regcomp(&compiled, match_string, REG_EXTENDED);
	//printf("%s\n", str);

	if(regexec(&compiled, test_string, 4, matches, 0)==0){

		
	    sprintf(buffer, "%.*s\n", matches[1].rm_eo-matches[1].rm_so,  test_string+matches[1].rm_so );
	    sscanf(buffer, "%lf", &P);
	    printf("%s\n", buffer);
	    printf("%f\n", P);
	}
	
	return 0;
}
