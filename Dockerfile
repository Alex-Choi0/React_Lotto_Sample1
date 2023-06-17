FROM node:16.19.0

RUN apt-get update && \
    apt-get install -yq tzdata && \
    ln -fs /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata

ENV TZ="Asia/Seoul"

WORKDIR /react

COPY package.json /react
COPY yarn.lock /react

RUN yarn install

COPY . /react

RUN yarn build

EXPOSE 3000

CMD ["yarn","start" ]
