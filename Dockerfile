FROM node:16-buster-slim
RUN apt update && apt upgrade -q -y && apt install openssl git neofetch curl speedtest-cli -q -y
COPY . /bot
WORKDIR /bot
RUN yarn install
RUN yarn build
CMD ["yarn", "start"]
