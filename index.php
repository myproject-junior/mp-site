<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <title>My Project</title>
    <link href="https://fonts.googleapis.com/css?family=Quicksand:400,700&amp;subset=latin-ext" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <meta name="viewport" content="width=device-width">
  </head>
  <body>
    <header class="menu-compacto">
        <button class="botao-abrir-menu">Menu</button>
        <p class="titulo-compacto">Titulo</p>
    </header>
    <header class="menu">
        <button class="botao-fechar-menu">Fechar</button>
        <nav class="elementos-menu">
          <a href="#services" id="servicos-menu" class="botao-menu">Serviços</a>
          <div class="div-menu">|</div>
          <a href="#about" id="sobre-menu" class="botao-menu">Sobre</a>
          <div class="div-menu">|</div>
          <a href="#calendar" id="calendario-menu" class="botao-menu">Calendário</a>
          <div class="div-menu">|</div>
          <a href="#contact" id="contato-menu" class="botao-menu">Contato</a>
        </nav>
    </header>
    <button class="botao-flutuante" id="botao-flutuante">v</button>
    <section class="hero-section">
        <img src="images/logo_mp_2017.png" alt="Logo da empresa" class="logo-img">
        <img src="images/logo_mp_2017_m.png" alt="Marca da empresa" class="nome-img">
    </section>

    <section class="servicos-section">
      <h1 id="servicos-titulo" class="titulo">Serviços</h1>
      <ul class="lista-servicos">
        <li class="item-lista">Sites empresariais</li>
        <li class="item-lista">Serviço 2</li>
        <li class="item-lista">Serviço 3</li>
        <li class="item-lista">Serviço 4</li>
        <li class="item-lista">Serviço 5</li>
      </ul>
      <!--O link do video deve ser dessa forma: https://www.youtube.com/embed/ID_DO_VIDEO?autoplay=1-->
      <iframe class="video-servico" src="https://www.youtube.com/embed/Q8TXgCzxEnw?modestbranding=1&autohide=1&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </section>

    <section class="sobre-section">
      <h1 id="sobre-titulo" class="titulo">Sobre</h1>
      <!--Section ainda a ser definida-->
    </section>

    <section class="calendario-section">
      <h1 id="calendario-titulo" class="titulo">Calendário</h1>
      <!--Section ainda a ser definida-->
    </section>

    <section class="contato-section">
      <h1 id="contato-titulo" class="titulo">Contato</h1>
      <!--Section ainda a ser definida-->
    </section>
    <script src="js/index.js"></script>
  </body>
</html>
