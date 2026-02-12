function App() {

  // 👉 Pega aquí tus enlaces reales de Drive
  const DRIVE_GUIAS = "https://drive.google.com/drive/folders/1eQWN0rXpEre3oYu2pU20-Mym4zmx24MQ?usp=drive_link"
  const DRIVE_VIDEOS = "https://drive.google.com/drive/folders/1zydCTXo3WQZnK6yx07xeAyAptJ9FCS6b?usp=drive_link";
  const DRIVE_MATERIALES = "https://drive.google.com/drive/folders/1UU2g5sozRrsFmHHzb289wZ0lWJPuF1D7?usp=drive_link";
  const BANNER = "https://drive.google.com/thumbnail?id=1rp8bI99PMtS-EGvX2E7Tf4a1kXKO_tA-&sz=w1200%22;";

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
<img
  src={BANNER}
  alt="Banner"
  className="w-full rounded-xl mb-4"
/>
      <h1>Círculo de estudio y asesoría – Materiales</h1>

      <p style={{ color: "#555" }}>
        Equipo académico: Mtra. Ianitzy · Mtro. Saúl · Mtra. Yaritzi · Mtra. Jukari
      </p>

      <hr />

      <h2>📘 Guías de estudio</h2>
      <p>
        Material de apoyo para el examen USICAMM. Acceso exclusivo para alumnos inscritos.
      </p>
      <p style={{ fontSize: "13px", color: "#666" }}>
        Última actualización: Febrero 2026
      </p>
      <a href={DRIVE_GUIAS} target="_blank">
        👉 Ver carpeta de guías
      </a>

      <hr />

      <h2>🎥 Sesiones grabadas</h2>
      <p>
        Grabaciones de asesorías y clases del círculo de estudio.
      </p>
      <p style={{ fontSize: "13px", color: "#666" }}>
        Disponible solo para participantes activos.
      </p>
      <a href={DRIVE_VIDEOS} target="_blank">
        👉 Ver sesiones grabadas
      </a>

      <hr />

      <h2>📂 Otros materiales</h2>
      <p>
        Lecturas complementarias, formatos, presentaciones y recursos de apoyo.
      </p>
      <p style={{ fontSize: "13px", color: "#666" }}>
        Material sugerido para reforzar el estudio.
      </p>
      <a href={DRIVE_MATERIALES} target="_blank">
        👉 Ver otros materiales
      </a>

    </div>
  );
}

export default App;
