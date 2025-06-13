# Etap 1: Budowanie aplikacji
FROM node:18-alpine AS builder

WORKDIR /app

# Skopiuj package.json i zainstaluj zależności
COPY package*.json ./
RUN npm install

# Skopiuj resztę kodu
COPY . .

# Etap 2: Obraz produkcyjny
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

# Domyślnie uruchamiaj aplikację
CMD ["node", "src/functions.js"]