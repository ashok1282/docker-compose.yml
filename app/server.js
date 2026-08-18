services:

  api:
    build:
      context: ./app
    ports:
      - "3000:3000"

  web:
    build:
      context: ./web
    ports:
      - "8080:80"
