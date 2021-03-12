import { clientebusiness } from '../../business/exportBusiness';
//import { Cliente } from '../../interface/exportInterface'

class ClienteController {
    getClienteById = (idCliente: string) => {
        return clientebusiness.getClienteById(idCliente);
    } 
    getCliente = () => {
        return clientebusiness.getCliente();
    } 
    postCliente = () => {
        return clientebusiness.postCliente();
    } 
    putCliente = () => {
        return clientebusiness.putCliente();
    } 
    deleteCliente = () => {
        return clientebusiness.deleteCliente();
    } 
}

export const clientecontroller = new ClienteController();