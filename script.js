// Repositório público do portfólio de Lorena Corrêa
const LINK_GITHUB = 'https://github.com/lohcorrea08/portfolio-lorena';

// Quando receber certificados, você poderá atualizar certificados.html.
const PAGINA_CERTIFICADOS = 'certificados.html';

function configurarLinkExterno(seletor, url) {
  document.querySelectorAll(seletor).forEach(link => {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
}

configurarLinkExterno('[data-projeto], [data-github]', LINK_GITHUB);

// Botão de certificados das páginas Início, Sobre mim e Projetos.
document.querySelectorAll('[data-certificados]').forEach(link => {
  link.href = PAGINA_CERTIFICADOS;
  link.removeAttribute('target');
  link.removeAttribute('aria-label');
});
