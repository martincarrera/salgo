# salgo

Slackbot to let your _officemates_ know that you are going out to buy something, list their orders and let them know when you are back.

## dependencies

node 6.3.x or later and mongodb

## developing

run mongod on a separated terminal instance:

```
mongod
```

run the app:

```bash
npm run dev
```

the app runs on `localhost:8080`

## production

_you'll likely be consuming mongodb as a service, so make sure you set the env var to connect to it._

```bash
npm start
```


--------------------------------------------------------------------------------
