FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build \
    && npm prune --omit=dev

##############################################

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

RUN npm ci --omit=dev \
    && npm cache clean --force

EXPOSE 3000
CMD ["npm", "run", "start"]