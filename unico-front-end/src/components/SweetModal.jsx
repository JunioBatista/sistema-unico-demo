import Swal from "sweetalert2";

export default function OpenWarningModal({ message }) {
  let type = "success";
  if (!message) {
    message = "Erro no servidor, tente mais tarde!";
    type = "error";
  }

  return Swal.fire({
    showCloseButton: false,
    position: "center",
    background: "#252728",
    toast: true,
    color: "#FFFFFF",
    text: message,
    showConfirmButton: false,
    icon: type,
    timer: 2500,
  });
}
