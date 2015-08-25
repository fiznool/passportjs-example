# Passport.js Social Login Tutorial

This repository contains an example of authenticating a user via their Google account. It is built using [Passport.js](http://passportjs.org) and [Express.js](http://expressjs.com).

Before starting the express server, ensure you have created an app in the Google developer console and added the client ID and secret to the project.

## Google API instructions

- Go to the [Google Developers Console](https://console.developers.google.com/project).
- Create a new project.
- Click on 'APIs & auth -> APIs' in the navigation pane.
- Enable the Google+ API.
- Click on 'APIs & auth -> Credentials' in the navigation pane.
- Add a new 'OAuth 2.0 client ID':
  - Choose the 'Web Application' type
  - In the _Authorized JavaScript origins_ section, add a field with the URL `http://localhost:3000`
  - In the _Authorized redirect URIs_ section, add a field with the URL `http://localhost:3000/auth/google/callback`
  - Save the form.
- Take the client ID and secret and add to a `.env` file in the root of the project. This should resemble the following:

```
GOOGLE_ID=<client_id_from_console>
GOOGLE_SECRET=<client_secret_from_console>
```

## Starting the server

Install foreman and all other dependencies:

```
npm install -g foreman
npm install
```

Now run the server:

```
foreman start
```

The login page can now be accessed at `http://localhost:3000`.

`foreman` will automatically make any variables defined in `.env` available as an environment variable, accessible via `process.env.<KEY>`. Therefore, it will pick up the client ID and secret that were added above, which will then be read by the passport configuration.

## OAuth 2.0 Flow Diagram

The following diagram describes the flow of data in this OAuth 2.0 handshake.

Notice that the client secret is never exposed to the browser. It is transferred server-server once an initial short-lived token has been acquired.

![oauth2_flow](https://cloud.githubusercontent.com/assets/820863/9470689/03ae05b8-4b45-11e5-9db7-910d3cfa5146.png)
