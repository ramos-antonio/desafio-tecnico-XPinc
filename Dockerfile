# usando uma imagem do node 
FROM node
# cria uma pasta onde ficará o código do projeto
WORKDIR /app
# copia só o que for necessário para o projeto
COPY ./src ./src
COPY package.json package-lock.json ./
# instala com segurança as libs que não são de devDependencies
RUN npm ci --production
# roda a aplicação
CMD [ "node", "src/index.js" ]