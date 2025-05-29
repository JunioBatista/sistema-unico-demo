## 🚀 Tecnologias

Esse projeto está utilizando as seguintes tecnologias:

- [React](https://react.dev/)
- [Tailwind](https://tailwindcss.com/)
- [Express.js](https://expressjs.com/pt-br/)
- [Axios](https://axios-http.com/docs/instance)
- [SQLite](https://www.sqlite.org/)

## 📜 Descrição

O desafio do projeto é consumir uma API externa e gerenciar essas listas localmente a partir dos valores que foram pegos externamente.

## ⚙️ Como funciona?

- O usuário informa a URL e a Key da api externa;
- A api interna busca os dados da api externa usando os valores informados ;
- O usuário pode conectar uma lista;
- O usuário pode deletar uma lista;

 ## Requisitos que foram implementados
- ✅Exibe e mantém localmente o estado das filas desconectadas.
- ✅Permitir atualização e remoção
- ✅Possibilita armazenar localmente informações relevantes como instância, status, data da verificação, e data de conexão quando aplicável.
- ✅Para filas desconectadas exibe: Nome da fila, Instância, Status
- ✅Para filas que estavam desconectadas e agora estão conectadas exibe data de conexão
- ✅A tela sempre exibe os dados vindos do banco local
- ✅ Endpoints: GET /filas/ , POST /filas/desconectadas , PUT /filas/desconectadas/:id DELETE /filas/desconectadas/:id

## 🎲 Instalação do projeto

### Clone do repositório

```bash
git clone https://github.com/JunioBatista/sistema-unico-demo.git
```

### Navegue até o diretório do projeto e instale as dependências do frontend

```bash
cd unico-front-end
```
```bash
npm i
```

### Navegue até o diretório do projeto e instale as dependências do backend
```bash
cd ../unico-back-end
```
```bash
npm i
```


### Inicie a aplicação de ambas as pastas
//na pasta unico-back-end
```bash
npm run dev 
```

//na pasta unico-front-end
```bash
npm run dev 
```
### Servidores Locais
- O frontEnd estará rodando em: http://localhost:5173
- O Backend estará rodando em: http://localhost:8000


## 🖼️ Layout

### Formulario 

![formulario](https://github.com/user-attachments/assets/37ac5f11-ebd5-4c0f-a42c-f6b387a16fe0)


### Página de Listas (mobile/desktop)
![mob-filas](https://github.com/user-attachments/assets/9612c6a3-475a-4267-890f-0c18df5cfedf)
![lg-filas](https://github.com/user-attachments/assets/ab01be72-b73a-4d82-9e8a-47f1b99ec8a9)

---




<p>Criado por <a href='https://github.com/JunioBatista/' target='_blank'>Junio Batista</a></p>
