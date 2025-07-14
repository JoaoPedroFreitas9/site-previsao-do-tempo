# Site de Previsão do Tempo 🌤️

Uma aplicação web simples e com design limpo para consultar a previsão do tempo atual de qualquer cidade do mundo. O projeto utiliza a API da [OpenWeatherMap](https://openweathermap.org/) para buscar dados em tempo real e os apresenta de forma clara e intuitiva para o usuário.


## ✨ Funcionalidades

- **Busca por Cidade:** Permite que o usuário digite o nome de qualquer cidade para ver as condições climáticas.
- **Dados Detalhados:** Exibe a temperatura atual, descrição do tempo, temperaturas máxima e mínima, umidade e velocidade do vento.
- **Interface Limpa:** Design focado na experiência do usuário, com informações fáceis de ler.
- **Validação de Erros:** Informa ao usuário quando uma cidade não é encontrada ou quando o campo de busca está vazio.
- **Design Responsivo (Básico):** Adapta-se a diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **HTML5:** Para a estrutura da página.
- **CSS3:** Para a estilização e o design.
- **JavaScript:** Para a lógica da aplicação, manipulação do DOM e chamadas à API.
- **API:** [OpenWeatherMap API](https://openweathermap.org/api) para obter os dados climáticos.
- **Font Awesome:** Para os ícones da interface.

## 🚀 Como Executar o Projeto

Para rodar este projeto na sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/JoaoPedroFreitas9/site-previsao-do-tempo.git](https://github.com/JoaoPedroFreitas9/site-previsao-do-tempo.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd site-previsao-do-tempo
    ```

3.  **Obtenha uma chave de API (API Key):**
    - Você vai precisar de uma chave de API gratuita do site da [OpenWeatherMap](https://openweathermap.org/appid).
    - Crie uma conta, acesse a área "API keys" e copie sua chave.

4.  **Adicione a chave ao projeto:**
    - Abra o arquivo `src/javascript/script.js`.
    - Encontre a linha: `const apiKey = 'SUA_CHAVE_DA_API_AQUI';`
    - Substitua `'SUA_CHAVE_DA_API_AQUI'` pela sua chave que você copiou.

5.  **Abra no navegador:**
    - Abra o arquivo `index.html` no seu navegador de preferência.

Pronto! Agora você pode usar a aplicação localmente.

## 📄 Licença

Este projeto está sob a licença MIT.