FROM node:18.4.0-alpine
ENV NODE_ENV=production
ENV PORT=80
WORKDIR /app
COPY ["server/package.json", "server/server.js", "./"]
COPY .env .
COPY dist ./dist
RUN npm install
CMD ["node", "server.js"]

