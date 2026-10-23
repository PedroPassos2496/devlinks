# devlinks
DevLinks 🔗

Página de links pessoal para desenvolvedores, no estilo "link na bio". Projeto final do curso Discover, da Rocketseat.

Sobre o projeto

O DevLinks reúne em um só lugar os principais links de um(a) desenvolvedor(a): GitHub, LinkedIn, portfólio, e-mail e outros. A página é responsiva, acessível e funciona direto no navegador, sem instalar nada.

Funcionalidades
Layout responsivo, pensado primeiro para celular
Tema claro e escuro, com a escolha salva no navegador (localStorage)
O tema inicial segue a preferência do sistema do usuário
Botão para copiar o link da página, com aviso na tela
Animações de entrada nos links e fundo com brilho animado
Respeita a configuração de movimento reduzido (prefers-reduced-motion)
Links com foco visível, para navegação pelo teclado
Melhorias em relação ao layout original
Efeito de vidro (glassmorphism) no cartão principal
Lista de tecnologias em formato de tags
Alternador de tema claro e escuro
Botão de compartilhar
Animações e transições suaves
Tecnologias
HTML5
CSS3 (variáveis CSS, Flexbox, animações)
JavaScript (DOM, localStorage, Clipboard API)
Estrutura de arquivos
devlinks/
├── index.html   # estrutura da página
├── style.css    # estilos, temas e animações
├── script.js    # tema e botão de compartilhar
└── README.md
Como executar
Baixe ou clone este repositório.
Abra o arquivo index.html no navegador.
Como personalizar

Edite o index.html e troque:

Nome, bio e foto de perfil
Tecnologias, na lista <ul class="stack">
Links, dentro de <nav class="links">

As cores principais ficam no início do style.css, nas variáveis --accent e --accent-2.

Deploy

O projeto pode ser publicado gratuitamente no GitHub Pages ou na Vercel.

Autor

Pedro Passos Ferreira
