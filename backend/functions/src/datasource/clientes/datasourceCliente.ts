import { Cliente, MessageTreatment } from "../../interface/exportInterface";
import { messagetreatmentbusiness } from '../../business/exportBusiness';

class ClienteDataSource {
    getCliente = () : MessageTreatment => {
        let cliente: Cliente = {id: `1`, name: `Giulia`, email: `giulialobo89@gmail.com`, success: true};
        return messagetreatmentbusiness.successMsg('Clientes encontrados', cliente);
    }
    getClienteById = (idCliente:string) => {
        return {name: `Giulia get - id ${idCliente}`};
    }
    postCliente = () => {
        return {name: `Giulia post`};
    } 
    putCliente = () => {
        return {name: `Giulia put`};
    } 
    deleteCliente = () => {
        return {name: `Giulia delete`};
    } 
}

export const clientedatasource = new ClienteDataSource();