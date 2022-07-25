import Swal from 'sweetalert2'

export default function success(message){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
      })
}