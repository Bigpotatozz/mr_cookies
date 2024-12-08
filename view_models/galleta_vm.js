class galleta_view_model {
    constructor(){}

    async formatear_data_galletas(data){
        try{
            const datos = [];

            data.forEach((galleta) => {
                const dato = {
                id_galleta: galleta.id_galleta,
                nombre: galleta.nombre,
                cantidad: galleta.cantidad,
                caducidad: galleta.caducidad,
                descripcion: galleta.descripcion,
                costo_produccion: galleta.costo_produccion,
                precio_venta: galleta.precio_venta,
                estatus: galleta.estatus
                }

                datos.push(dato);
            });
           
            return datos;
       

        }catch(error){
            console.log(error);
            return error;
        }
    }
}

module.exports = { galleta_view_model };