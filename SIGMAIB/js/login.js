document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxKFJ_pbsdkLvP7Jpck9oKuFwKniwuKXiLK5FYAg6_aDufgL5kXx32Pyg7231bL31mFlQ/exec?usuario=" + usuario + "&password=" + password);
      const data = await response.json();
  
      if (data.status === "OK") {
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("rol", data.rol);
        localStorage.setItem("nombre_visible", data.nombre_visible);
  
        if (data.rol === "hospital") {
          window.location.href = "hospital/index.html";
        } else if (data.rol === "ambulancia") {
          window.location.href = "ambulancia/index.html";
        } else if (data.rol === "gerencia") {
          window.location.href = "gerente/index.html";
        }
      } else {
        document.getElementById("mensaje").innerText = "❌ Credenciales inválidas. Intenta de nuevo.";
      }
    } catch (error) {
      document.getElementById("mensaje").innerText = "⚠️ Error de conexión.";
    }
  });
  