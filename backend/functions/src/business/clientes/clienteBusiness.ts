import { clientedatasource } from '../../datasource/exportDataSource';
import { Cliente } from '../../interface/exportInterface';
//import { Cliente } from '../../interface/exportInterface';

class ClienteBusiness {
    getClienteById = (idCliente: string) => {
        return clientedatasource.getClienteById(idCliente);
    } 
    getCliente = () => {
        return clientedatasource.getCliente();
    } 
    createCliente = (cliente: Cliente) => {
        return clientedatasource.createCliente(cliente);
    } 
    putCliente = () => {
        return clientedatasource.putCliente();
    } 
    deleteCliente = () => {
        return clientedatasource.deleteCliente();
    } 
}

export const clientebusiness = new ClienteBusiness();