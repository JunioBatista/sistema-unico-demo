import Swal from 'sweetalert2';


export default function OpenWarningModal({message}) {

    return Swal.fire({
      showCloseButton: false,
      position: "center",
      background: "#252728",
      toast: true,
      color: "#FFFFFF", 
      text: message,
      showConfirmButton: false,
      icon: 'success',
      timer: 2500
    });
    
}
