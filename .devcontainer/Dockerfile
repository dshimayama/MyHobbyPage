ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-14

RUN npm install -g create-react-app
RUN npm install redux
RUN yarn add redux

RUN npm install react-redux
RUN yarn add react-redux

RUN yarn
COPY . .
CMD [ "yarn", "start" ]
