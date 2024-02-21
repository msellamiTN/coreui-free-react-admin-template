# pull official base image
 FROM node:latest
#FROM myqrqc-project2023-myqrqc-web:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# copy files to the container
COPY . /app/

# check that files are copied correctly
##RUN ls -al /app/
# install app dependencies
#COPY  package.json ./package-lock.json /app/
#RUN npm install
RUN npm i lodash marked react-responsive-carousel   

# start app
CMD ["npm", "start"]

