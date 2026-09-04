document.addEventListener("DOMContentLoaded", () => {
  const formAddUser = document.getElementById("form-add-user");

  if (formAddUser) {
    formAddUser.addEventListener("submit", async (e) => {
      e.preventDefault();

      const payload = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value
      };

      try {
        const res = await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Error al crear usuario");

        Swal.fire({
          icon: "success",
          title: "¡Usuario Creado!",
          text: "El usuario fue registrado correctamente.",
          timer: 1000,
          showConfirmButton: false
        }).then(() => {
          window.location.href = "/users";
        });

      } catch (err) {
        Swal.fire({ icon: "error", title: "Error", text: err.message });
      }
    });
  }
});