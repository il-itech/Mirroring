FROM node:current-slim

# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

ADD package.json yarn.lock /app/

# --pure-lockfile: Don’t generate a yarn.lock lockfile
RUN yarn --pure-lockfile

# copy all file from current dir to /app in container
COPY . /app/

RUN yarn build

# cmd to start service
CMD ["yarn", "start"]
