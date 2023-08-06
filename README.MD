# Bloqueador de Sites

Esta é uma extensão simples que bloqueia sites específicos adicionados pelo usuário. A extensão usa um loop `for` para verificar a URL atual e redireciona o usuário para uma página em branco se a URL contém um dos sites adicionados pelo usuário. 

Essa solução pode ajudar a evitar distrações e manter o foco em tarefas importantes.

## Instalação

Para instalar a extensão, siga estas etapas:

1. Faça o download do repositório.
2. Abra o arquivo "content.js" e adicione os sites que deseja bloquear à lista `blockedSitesList`. 
3. Abra o navegador Google Chrome e digite "chrome://extensions/" na barra de endereço.
4. Ative o "Modo do desenvolvedor" no canto superior direito da página.
5. Clique em "Carregar sem compactação" e selecione a pasta do repositório que você baixou.
6. A extensão será adicionada ao navegador e estará pronta para uso.

## Uso

Para usar a extensão, basta navegar na web normalmente. Se você tentar acessar um site bloqueado, será redirecionado para uma página em branco.

Para adicionar mais sites à lista de bloqueio, abra o arquivo "content.js" e adicione o site à lista `blockedSitesList`. Certifique-se de incluir o nome do site completo (por exemplo, "exemplo.com") para garantir que ele seja bloqueado corretamente.

## Contribuição

Se você tiver alguma sugestão de melhoria ou encontrar algum problema com a extensão, sinta-se à vontade para abrir uma "issue" neste repositório ou enviar uma solicitação de pull. Sua contribuição é muito bem-vinda!

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.