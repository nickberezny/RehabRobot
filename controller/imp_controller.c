#include "include/imp_structures.h"

void imp_PD(struct impStruct * imp)
{
	imp->cmd = imp->P*(imp->xk - imp->xdes) + imp->D(imp->vk - imp->vdes);
	return;
}

void imp_Adm(struct impStruct * imp)
{
	imp->xa = imp->xdes + imp->Ad[0]*imp->xk + imp->Ad[2]*imp->vk + imp->Bd[0] * (imp->fk - imp->fdes);
	imp->va = imp->vdes + imp->Ad[1]*imp->xk + imp->Ad[3]*imp->vk + imp->Bd[1] * (imp->fk - imp->fdes);
	return;
}

void imp_Haptics(struct impStruct * imp)
{
	//TODO
	return;
}