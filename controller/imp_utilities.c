#include <stdlib.h>
#include <stdio.h>
#include <math.h>
#include <string.h>
#include <time.h>
#include <regex.h>

#include "include/imp_structures.h"
#include "include/imp_variables.h"

void imp_regex_match(regex_t * compiled, char recvBuff[1024], regmatch_t matches[2], 
	char matchBuffer[100],  struct regexMatch * regex, double * param_loc )
{
	regcomp(compiled, regex->P, REG_EXTENDED);
	if(regexec(compiled, recvBuff, 2, matches, 0)==0){
		sprintf(matchBuffer, "%.*s\n", matches[1].rm_eo-matches[1].rm_so,  recvBuff+matches[1].rm_so );
		sscanf(matchBuffer, "%lf", param_loc);
	}


}




