# [Salgo](https://salgo.xyz)

Slackbot to let your _officemates_ know that you are going out to buy something, list their orders and let them know when you are back.

## Dependencies

Node 6.3.x or later and mongodb

## Developing

Run mongod on a separated terminal instance:

```
mongod
```

Run the app:

```bash
npm run dev
```

The app runs on `localhost:8080`

## Production

_You'll likely be consuming mongodb as a service, so make sure you set the env var to connect to it._

```bash
npm start
```


--------------------------------------------------------------------------------
