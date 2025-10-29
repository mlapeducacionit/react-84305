import Swal from "sweetalert2";


const handleNotificacion = (callback) => {
     Swal.fire({
          title: "¿Desea borrar el producto?",
          text: "Cuidado porque no vas a poder volver atrás",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, papá!",
          cancelButtonText: "Noooooooooooooooooooooo",
        }).then((result) => {
          if (result.isConfirmed) {
            callback()
            Swal.fire({
              title: "Deleted!",
              text: "El producto fue borrado",
              icon: "success"
            });
          }
    });
}

export default handleNotificacion