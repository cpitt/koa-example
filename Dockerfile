FROM node:10-alpine AS intermediate
# Add node_modules to image
ADD package.json package-lock.json /tmp/
RUN cd /tmp && npm install

FROM node:10-alpine
COPY --from=intermediate /tmp/node_modules /tmp/node_modules
WORKDIR /usr/src/app

RUN ln -s /tmp/node_modules /usr/src/app/node_modules
ADD . /usr/src/app
EXPOSE 4000
CMD ["npm", "start"]
