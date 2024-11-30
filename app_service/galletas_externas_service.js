const { galleta_view_model } = require("../view_models/galleta_vm");

class galletas_externas_app_service {

    constructor() { };

    async getGalletasExternas() {

        const galleta_vm = new galleta_view_model();

        let galletas_total = [];
        try {

            try{
                let galletas_erick = await fetch('http://localhost:8082/api/inventario/getGalletas', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                

                galletas_erick = await galletas_erick.json();
                let galletas_erick_formated = await galleta_vm.formatear_data_galletas(galletas_erick.cookies);

                galletas_total = [...galletas_total, ...galletas_erick_formated]
            }catch(error){
                console.log(error);
            }
               

               

            try{
                let galletas_ruben = await fetch('http://192.168.137.254:3000/api/books/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'}
                });

                galletas_ruben = await libros_ruben.json();
                let galletas_ruben_formated = await galleta_vm.formatear_data_galletas(galletas_ruben);

                libros_total = [...galletas_total, ...galletas_ruben_formated]
            }catch(error){
                console.log(error);
            }

            try{
                let galletas_luis = await fetch('http://192.168.137.254:3000/api/books/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'}
                });

                galletas_luis = await galletas_luis.json();
                let galletas_luis_formated = await galleta_vm.formatear_data_galletas(galletas_luis);
                galletas_total = [...galletas_total, ...galletas_luis_formated]
            }catch(error){
                console.log(error);
            }

            return galletas_total;

        } catch (e) {
            console.log(e);
            return null;
        }
    }
};

module.exports = { galletas_externas_app_service };