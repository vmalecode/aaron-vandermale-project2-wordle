FROM node:12 
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . . 
RUN npm run build
ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]