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
      <div>
        <img width="360px" height="360px" alt="HangMan" src="data:image/jpeg;base64,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" />
      </div>
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
