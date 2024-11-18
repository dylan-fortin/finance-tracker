# Utilisez une image de base légère avec Node.js
FROM node:18-alpine AS build

# Créez le répertoire de travail dans l'image
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez tous les fichiers de l'application dans le répertoire de travail de l'image
COPY . .

# Construisez l'application Angular
RUN npm run build --prod

# Utilisez une image Nginx légère pour servir l'application construite
FROM nginx:alpine

# Copiez les fichiers construits depuis le répertoire de travail de la première image
COPY --from=0 /app/dist/finance-tracker/browser /usr/share/nginx/html

# Exposez le port 80 pour accéder à l'application depuis l'extérieur du conteneur
EXPOSE 80

# Commande pour démarrer Nginx lorsqu'un conteneur basé sur cette image est lancé
CMD ["nginx", "-g", "daemon off;"]
