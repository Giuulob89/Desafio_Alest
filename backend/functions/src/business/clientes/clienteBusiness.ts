import { clientedatasource } from '../../datasource/exportDataSource';
//import { Cliente } from '../../interface/exportInterface';

class ClienteBusiness {
    getClienteById = (idCliente: string) => {
        return clientedatasource.getClienteById(idCliente);
    } 
    getCliente = () => {
        return clientedatasource.getCliente();
    } 
    postCliente = () => {
        return clientedatasource.postCliente();
    } 
    putCliente = () => {
        return clientedatasource.putCliente();
    } 
    deleteCliente = () => {
        return clientedatasource.deleteCliente();
    } 
}

export const clientebusiness = new ClienteBusiness();