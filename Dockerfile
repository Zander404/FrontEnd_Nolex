ARG PLATFORM=linux/arm64
ARG IMAGE=arm64v8/node:18


FROM --platform=$PLATFORM $IMAGE AS deps
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm i

COPY . .

FROM --platform=$PLATFORM $IMAGE AS builder
WORKDIR /app
COPY --from=deps /app .
RUN npm run build


FROM --platform=$PLATFORM $IMAGE AS runner
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app .


EXPOSE 3000
CMD ["npm","run","start"]