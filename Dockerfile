# Utilizamos una imagen de Node.js como base
FROM node:18-alpine as deps

# Directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar archivo de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install 

# Copiar todo el código fuente
COPY . .


# Puerto en el que se ejecuta la aplicación
# EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]