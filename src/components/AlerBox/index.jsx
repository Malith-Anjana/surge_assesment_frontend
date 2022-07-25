import Swal from 'sweetalert2'

export function success(message){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
      })
}

export function unsuccess(message){
  Swal.fire({
    icon: 'error',
    title: 'Error',
    timer: 1500,
    showCloseButton: true,
    text: message,
  })
}

export async function confirm (){
  let con = false;
  await Swal.fire({
    title: 'Confirm',
    text: "Do you want to remove this?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      con = true
    }
  })
  return con;
}