<!-- Ahorcado.svelte -->
<script>
  // @ts-nocheck

  let palabrasSecretas = [
    "pantallas",
    "monitores",
    "rgb",
    "teletipo",
    "hd",
    "fullhd",
    "uhd",
  ];
  let palabraSecreta =
    palabrasSecretas[Math.floor(Math.random() * palabrasSecretas.length)];
  /**
   * @type {any[]}
   */
  let letrasAdivinadas = [];
  let intentosRestantes = 6;
  let juegoTerminado = false;
  let mensaje = "";

  function adivinar(letra) {
    if (juegoTerminado) return;

    if (palabraSecreta.includes(letra)) {
      for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
          letrasAdivinadas[i] = letra;
        }
      }
    } else {
      intentosRestantes -= 1;
    }

    if (intentosRestantes === 0) {
      juegoTerminado = true;
      mensaje = "¡Perdiste! La palabra secreta era: " + palabraSecreta;
    } else if (letrasAdivinadas.join("") === palabraSecreta) {
      juegoTerminado = true;
      mensaje = "¡Ganaste!";
      alert("Has ganado usuario!");
    }
  }

  function reiniciarJuego() {
    palabraSecreta =
      palabrasSecretas[Math.floor(Math.random() * palabrasSecretas.length)];
    letrasAdivinadas = Array(palabraSecreta.length).fill("_");
    intentosRestantes = 6;
    juegoTerminado = false;
    mensaje = "";
  }

  function mostrarPalabraSecreta() {
    return letrasAdivinadas.join(" ");
  }
</script>

<main>
  <div class="container">
    <div class="box">
      <h1>Ahorcado</h1>
      <p>Palabra: {mostrarPalabraSecreta()}</p>
      <p>Letras adivinadas: {letrasAdivinadas.join(", ")}</p>
      <p>Intentos restantes: {intentosRestantes}</p>
      {#if juegoTerminado}
        <p>{mensaje}</p>
      {:else}
        <input
          type="text"
          on:input={(e) => adivinar(e.target.value)}
          placeholder="Adivina una letra"
        />
        <button on:click={reiniciarJuego}>Reiniciar juego</button>
      {/if}
    </div>
  </div>
</main>

<style>
  main {
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue",
      sans-serif;
    text-align: center;
    font-weight: bold;
  }

  @keyframes anim {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: rotateX(0);
        }
    }

    .box {
        background-color: rgb(59 130 246);
        margin-right: 200px;
        margin-left: 200px;
        margin-top: 100px;
        margin-bottom: 100px;
        border-end-end-radius: 6px;
        border-end-start-radius: 6px;
        border-start-end-radius: 6px;
        border-start-start-radius: 6px;
        padding-bottom: 6.5px;
        margin-top: 17.5px;
        animation: anim 0.5s ease-in-out forwards;
    }

    .container {
        background-color: rgb(48, 107, 202);
        margin-top: 50px;
        margin-right: 100px;
        margin-left: 100px;
        padding-top: 50px;
        border-end-end-radius: 6px;
        border-end-start-radius: 6px;
        border-start-end-radius: 6px;
        border-start-start-radius: 6px;
        padding-bottom: 6.5px;
        margin-top: 17.5px;
        animation: anim 0.5s ease-in-out forwards;
    }
</style>
