<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Development

1. Clone the project

2. Install dependencies

```
yarn install
```

3. You should have the Nest CLI installed

```
npm i @nestjs/cli
```

4. Clone the `.env.template` and renamed it to `.env`

5. Since no sensitive data is display please copy de same values

6. You have to get the DB up and running

```
docker-compose up -d
```

5. Populate the DB

```
GET http://localhost:3000/api/v1/seed
```

## Stack

1. Nest

2. MongoDB --> https://www.mongodb.com/

3. TablePlus to manage DB locally --> https://tableplus.com/

4. Joi for validations --> https://www.npmjs.com/package/joi

5. Axios for http request --> https://www.npmjs.com/package/axios (@0.27.2)

> **axios version**: Please notice we are using axios `@0.27.2` since newer versions have a issue with Nest.
