#include "include/imp_structures.h"

void imp_simple_control(struct impStruct * imp, double k, double b)
{
	//simple impedance control ( x -> F)
	imp->F = k*(imp->x - imp->xdes) + b*(imp->dx - imp->dxdes);
	return NULL;
}

/*
void imp_adaptive_control(struct impStruct *imp)
{

	if(imp->x > imp->x_trans)
	{
		imp->k = imp->next->k;
		imp->b = imp->next->b;
		imp->x_trans = imp->next->x_trans;
		imp->next = imp->next->next;
	}

	//simple impedance control ( x -> F)
	imp->F = imp->k*(imp->x - imp->xdes) + imp->b*(imp->dx - imp->dxdes);

	return NULL;
}


void imp_coupling_control(struct impStruct * imp)
{

	imp->x_env = imp->x - imp->F / imp->k_coupling;
	return NULL;
}
*/