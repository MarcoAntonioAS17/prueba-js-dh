/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/

exports.leerTareas = function () {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
    const mod_file = require('fs');
    try {
        const archivo = mod_file.readFileSync('tareas.json','utf-8');    
        const tareas = JSON.parse(archivo);
        return tareas;
    } catch (error) {
        return null;
    }
}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
    const mod_file = require('fs');
    //try {
        const archivo = mod_file.readFileSync('tareas.json','utf-8'); 
        
        let stringfy;
        const tareas = JSON.parse(archivo);

        if (tareas.length > 0) {
            
            stringfy= JSON.stringify(tareas);
            stringfy = stringfy.slice(0,stringfy.length-1);
            stringfy = stringfy + "," + JSON.stringify(tarea) + "]";
        } else {
            stringfy = "["+JSON.stringify(tarea)+"]";    
        }
        
        mod_file.writeFileSync('tareas.json', stringfy, function (err) {
            if (err) return false;
        });
        return true;

    //} catch (error) {
      //  return false;
    //}
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
        const mod_file = require('fs');
        try {
            const archivo = mod_file.readFileSync('tareas.json','utf-8');    
            const tareasFiltradas = JSON.parse(archivo).filter(tarea => tarea.status === estado);
            return tareasFiltradas;
        } catch (error) {
            return null;
        }
   

}