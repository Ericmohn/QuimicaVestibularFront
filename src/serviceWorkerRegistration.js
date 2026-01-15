/* eslint-disable no-undef */
// Este código opcional é usado para registrar um service worker.
// register() não é chamado por padrão.

// Esta função verifica se a aplicação está sendo executada em localhost.
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' || // [::1] é o endereço localhost em IPv6.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/ // Verifica se o hostname é 127.0.0.1.
    )
)

// Função principal para registrar o service worker.
export function register(config) {
  // Verifica se o ambiente é de produção e se o navegador suporta service workers.
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href)
    // Garante que o service worker funcione apenas se o PUBLIC_URL for da mesma origem.
    if (publicUrl.origin !== window.location.origin) {
      return
    }

    // Registra o service worker após o carregamento da janela.
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`

      if (isLocalhost) {
        // Se estiver rodando no localhost, verifica se um service worker já existe.
        checkValidServiceWorker(swUrl, config)

        // Adiciona um log extra para localhost, informando sobre o uso do service worker.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'Este app web está sendo servido via cache pelo service worker. Saiba mais em https://cra.link/PWA'
          )
        })
      } else {
        // Se não estiver em localhost, registra o service worker normalmente.
        registerValidSW(swUrl, config)
      }
    })
  }
}

// Função para registrar o service worker e forçar o reload da página quando houver uma atualização.
function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing
        if (installingWorker == null) {
          return
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // Se o controlador do service worker já existir, significa que há uma nova versão disponível.
              console.log('Novo conteúdo disponível, recarregando a página...')

              // Aqui forçamos o recarregamento da página assim que o novo service worker for ativado.
              window.location.reload()

              // Executa o callback de atualização, se fornecido na configuração.
              if (config && config.onUpdate) {
                config.onUpdate(registration)
              }
            } else {
              // Quando o conteúdo é armazenado em cache para uso offline pela primeira vez.
              console.log('O conteúdo está em cache para uso offline.')

              // Executa o callback de sucesso, se fornecido na configuração.
              if (config && config.onSuccess) {
                config.onSuccess(registration)
              }
            }
          }
        }
      }
    })
    .catch((error) => {
      console.error('Erro durante o registro do service worker:', error)
    })
}

// Função para verificar se o service worker já existe e se é válido.
function checkValidServiceWorker(swUrl, config) {
  // Faz um fetch para verificar se o service worker existe.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' }
  })
    .then((response) => {
      // Garante que o service worker existe e que estamos obtendo um arquivo JavaScript.
      const contentType = response.headers.get('content-type')
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // Se o service worker não for encontrado (404), faz o unregister e recarrega a página.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload()
          })
        })
      } else {
        // Se o service worker for encontrado, registra-o novamente.
        registerValidSW(swUrl, config)
      }
    })
    .catch(() => {
      console.log(
        'Nenhuma conexão com a internet encontrada. O app está funcionando em modo offline.'
      )
    })
}

// Função para desregistrar o service worker.
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister()
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
