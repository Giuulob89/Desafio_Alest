import { MessageTreatment } from '../../interface/exportInterface';

class MessageTreatmentBusiness {
    successMsg = (message: string, response?: any): MessageTreatment => {
        let _message: MessageTreatment = {message: `Sucesso: ${message}`, status: 200, response: response};
        console.log(_message);
        return _message;
    }
    infoMsg = (message: string, info?: any) => {
        let _message: MessageTreatment = {message: `Info: ${message}`, status: 250, response: info};
        console.log(_message);
        return _message;
    }
    erroMsg = (message: string, erro?: any) => {
        let _message: MessageTreatment = {message: `Erro: ${message}`, status: 400, response: erro};
        console.log(_message);
        return _message;
    }
}

export const messagetreatmentbusiness = new MessageTreatmentBusiness;