<script lang="ts">
    const base = "/Project-Technology";
    export const fallback = true;
    export const prerender = true
</script>

<header>
    <a href="{base}/">
    <button class="item">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
          </svg>
    </button>
    </a>
    <a href="{base}/practica1">
    <button class="item">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z"/>
          </svg>
    </button>
    </a>
    <a href="{base}/practica2">
    <button class="item">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-2-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"/>
          </svg>
    </button>
    </a>
</header>
<slot></slot>
<footer>
    <div>
        <h3>Está página fue creada por: </h3>
        <ul class="lista">
            <li><em>Eduardo Adler Cruz Velázquez</em></li>
            <li><em>Diego Axel Rivas Luvian</em></li>
            <li><em>Raúl Santiago Segundo Sanchez</em></li>
            <li><em>Mauro Emiliano Patlan Hernández</em></li>
        </ul>
</footer>

<style>
    header {
        background-color: rgb(30 64 175);
    }
    .item {
        margin-left: 3px;
        margin-right: 3px;
        padding-left: 14px;
        padding-right: 14px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .item:hover {

    }
    header, footer {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-align: center;
    }
    .lista {
        display: inline-block;
        font-weight: bold;
    }
    footer {
        background-color: rgb(37 99 235);
        margin-top: 50px;
    }
    div {
        background-color: rgb(59 130 246);
        margin-right: 450px;
        margin-left: 450px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>