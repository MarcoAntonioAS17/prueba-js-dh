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
        if (archivo.length > 0) {
            const tareas = JSON.parse(archivo);
            stringfy = JSON.stringify(tareas);
            //stringfy = stringfy.slice(0,stringfy.length-1);
            console.log(stringfy);
            stringfy = stringfy + "," + JSON.stringify(tarea);    
        } else {
            stringfy = JSON.stringify(tarea);    
        }
        
        mod_file.writeFile('tareas.json', stringfy, function (err) {
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
   const tareas = this.leerTareas();
   const tareasFiltradas = tareas.filter(tarea => tarea.status === estado);
   return tareasFiltradas;

}