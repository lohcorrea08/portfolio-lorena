// Configure o link da sua pasta pública do Google Drive abaixo.
const LINK_CERTIFICADOS = '';
const botaoCertificados = document.getElementById('cert-link');
if (LINK_CERTIFICADOS) {
  botaoCertificados.href = LINK_CERTIFICADOS;
  botaoCertificados.target = '_blank';
  botaoCertificados.rel = 'noopener noreferrer';
  botaoCertificados.removeAttribute('aria-disabled');
  botaoCertificados.nextElementSibling.textContent = 'Abrir certificados em nova aba';
} else {
  botaoCertificados.addEventListener('click', (event) => event.preventDefault());
}
const linkProjeto = document.querySelector('[data-placeholder="github"]');
linkProjeto.addEventListener('click', (event) => {
  if (linkProjeto.href === 'https://github.com/') event.preventDefault();
});
