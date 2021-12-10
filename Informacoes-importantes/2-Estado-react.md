### Observações importantes sobre o estado do React

Quando executamos o React com webpack todo vez que recarregamos a página ou submimos a aplicação é feita a limpeza de todos as variáveis de estado. Para mantermos os valores podemos utilizar a biblioteca fast Refresh

Com o fast Refresh podemos alterar o código da aplicação, salvar o código e ter o código refletido no navegador, porém mantendo o estado do component

Para isso vamos as configurações:

### Instalando a dependência 

    yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh