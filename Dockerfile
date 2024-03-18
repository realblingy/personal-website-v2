FROM node:15-alpine as builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

CMD ["npm", "start"]
