document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("table-body");
  const modalElement = document.getElementById("userDetailModal");
  const userDetailModal = modalElement ? new bootstrap.Modal(modalElement) : null;

  if (tableBody) {
    tableBody.addEventListener("click", async (event) => {
      const btnVer = event.target.closest(".btn-ver-detalle");
      const btnEliminar = event.target.closest(".btn-eliminar");

      // VER DETALLES EN MODAL
      if (btnVer && userDetailModal) {
        document.getElementById("modal-user-id").textContent = btnVer.dataset.id;
        document.getElementById("modal-user-firstname").textContent = btnVer.dataset.firstname;
        document.getElementById("modal-user-lastname").textContent = btnVer.dataset.lastname;
        document.getElementById("modal-user-email").textContent = btnVer.dataset.email;
        userDetailModal.show();
      }

      // ELIMINAR
      if (btnEliminar) {
        const id = btnEliminar.dataset.idUser;

        const result = await Swal.fire({
          title: "¿Confirmar eliminación?",
          text: "Esta acción borrará al usuario de forma permanente.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#dc3545",
          cancelButtonColor: "#6c757d",
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar"
        });

        if (result.isConfirmed) {
          try {
            const response = await fetch("/api/users/" + id, { method: "DELETE" });
            const data = await response.json();

            if (!response.ok) throw new Error(data.message || "Error al eliminar");

            await Swal.fire({
              icon: "success",
              title: "Eliminado",
              text: "El usuario ha sido removido.",
              timer: 1000,
              showConfirmButton: false
            });

            location.reload();
          } catch (err) {
            Swal.fire({ icon: "error", title: "Error", text: err.message });
          }
        }
      }
    });
  }
});