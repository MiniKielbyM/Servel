FROM node:14
WORKDIR /app
COPY . /app
ENV PORT 8080
EXPOSE 8080
RUN npm install
CMD ["node", "server.js"]
