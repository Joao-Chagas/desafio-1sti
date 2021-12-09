# Copia e instala a versão do node
FROM node:14-slim

# Cria pasta app e usa como raíz
WORKDIR /app

# Copia as dependencias e o cache para a pasta app
COPY package*.json .

# Instala as dependencias do projeto
RUN npm install

# Copia todo o projeto para a pasta app
COPY . .

# Constroi a versão do projeto em produção
RUN npm run build

# Expõe a porta 3000 para uso
EXPOSE 3000

# Roda comando para iniciar aplicação em produção
CMD ["npm", "run", "start:prod"]