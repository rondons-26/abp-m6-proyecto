document.addEventListener("DOMContentLoaded", () => {
  const formEditUser = document.getElementById("form-edit-user");

  if (formEditUser) {
    formEditUser.addEventListener("submit", async (event) => {
      event.preventDefault();

      const payload = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value
      };

      try {
        const idUser = document.getElementById("idUser").value;
        const response = await fetch("/api/users/" + idUser, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Error al actualizar");

        Swal.fire({
          icon: "success",
          title: "¡Actualizado!",
          text: "Los cambios fueron guardados exitosamente.",
          timer: 1000,
          showConfirmButton: false
        }).then(() => {
          window.location.href = "/users";
        });

      } catch (error) {
        Swal.fire({ icon: "error", title: "Error", text: error.message });
      }
    });
  }
});