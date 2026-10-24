// Depois de criar o repositório público no GitHub, substitua as aspas vazias
// pelo link. Exemplo: 'https://github.com/seu-usuario/portfolio-trilhas'
const LINK_GITHUB = 'https://github.com/lohcorrea08/portfolio-lorena';
const LINK_CERTIFICADOS = ''; // Link público da pasta de certificados no Google Drive

function configurarLink(seletor, url, mensagem) {
  document.querySelectorAll(seletor).forEach(link => {
    if (url && /^https:\/\//.test(url)) {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.href = '#';
      link.setAttribute('aria-label', `${link.textContent.trim()}: link ainda não configurado`);
      link.addEventListener('click', evento => {
        evento.preventDefault();
        alert(mensagem);
      });
    }
  });
}
configurarLink('[data-projeto], [data-github]', LINK_GITHUB, 'O endereço do GitHub será adicionado após a publicação do projeto.');
configurarLink('[data-certificados]', LINK_CERTIFICADOS, 'A pasta de certificados será adicionada quando estiver disponível.');
