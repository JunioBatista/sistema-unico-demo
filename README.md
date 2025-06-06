## 🚀 Tecnologias

Esse projeto está utilizando as seguintes tecnologias:

- [React](https://react.dev/)
- [Tailwind](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
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
- O usuário pode exportar dados da lista em formato excel (xlsx);

 ## Requisitos que foram implementados
- ✅Exibe e mantém localmente o estado das filas desconectadas.
- ✅Permitir atualização e remoção
- ✅Design responsivo para exibição em diferentes tamanhos de telas (mobile, desktop)
- ✅Possibilita armazenar localmente informações relevantes como instância, status, data da verificação, e data de conexão quando aplicável.
- ✅Para filas desconectadas exibe: Nome da fila, Instância, Status
- ✅Para filas que estavam desconectadas e agora estão conectadas exibe data de conexão
- ✅A tela sempre exibe os dados vindos do banco local
- ✅Endpoints: GET /filas/ , POST /filas/desconectadas , PUT /filas/desconectadas/:id DELETE /filas/desconectadas/:id
- ✅exportar dados da lista em formato excel (xlsx);

## 🎲 Instalação do projeto

### Clone do repositório

```bash
git clone https://github.com/JunioBatista/sistema-unico-demo.git
```
### Navegue até o diretório recém clonado
```bash
cd sistema-unico-demo
```

###  instale as dependências do frontend

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


### Formulario  (mobile/desktop)
![formulario desktop](https://github.com/user-attachments/assets/b69f006f-961f-4221-be7c-14f75eade65f)
![formulario mobile](https://github.com/user-attachments/assets/3aa91b2c-0527-4ecb-b538-c1244e6de67e)

### Página de Listas (mobile/desktop)
![filas-desktop](https://github.com/user-attachments/assets/f5de97df-1cf5-4635-814a-3956fe8ca729)
<div>
 <img src="https://github.com/user-attachments/assets/33930056-c910-4b8a-ad6d-f43db5d354d3" />
</div>
 <img src="https://github.com/user-attachments/assets/86868237-8c71-46ff-872f-3c72aa6f1182" />



---




<p>Criado por <a href='https://github.com/JunioBatista/' target='_blank'>Junio Batista</a></p>
