## About

This project was created with [express-generator-typescript](https://github.com/seanpmaxwell/express-generator-typescript).

**IMPORTANT** for demo purposes I had to disable `helmet` in production. In any real world app you should change these 3 lines of code in `src/server.ts`:

```ts
// eslint-disable-next-line n/no-process-env
if (!process.env.DISABLE_HELMET) {
  app.use(helmet());
}
```

To just this:

```ts
app.use(helmet());
```

This project is the coding/technical challenge for Theary's interview process. This API was built using Node, TypeScript, and Express.

## Getting Started

Start by cloning this repo to your local machine. Once cloned, navigate to the folder that the repo was cloned and then into the project folder. Once in the project folder, make sure you're using the correct version of Node (v22.14.0).

If you have [NVM](https://github.com/nvm-sh/nvm) set up, you can use the following command to download and use the correct node version for this project:

### `nvm use`

If you don't have a node version manager downloaded, you will have to manually download Node v22.14.0.

Once you have downloaded and are using the correct version of Node, install all of the node modules for the project by using the following command:

### `npm i`

After installing all project node modules, you can run the project in development mode with the following comman:

### `npm run dev`

## Endpoints

Below is the base URL for the API:

```
http://localhost:3000
```

This API contains 2 endpoints:

```
GET /api/tree
```

Fetches the entire tree structure(s) along with each node's children nodes if they have any

<details>
<summary>Details</summary>

Request:

```
No parameters
```

| Code | Description |
| :--- | :---------- |
| 200  | 'OK'        |

Response:

```json
{
  "tree": [
    {
      "id": 1,
      "label": "root",
      "children": [
        {
          "id": 3,
          "label": "bear",
          "children": [
            {
              "id": 4,
              "label": "cat",
              "children": []
            }
          ]
        },
        {
          "id": 7,
          "label": "frog",
          "children": []
        }
      ]
    }
  ]
}
```

</details>

---

```
POST /api/tree
```

Creates a new node within the database. New nodes can be associated with a parent node.

<details>
<summary>Details</summary>

Request:

```json
{
  "label": "cat's child",
  "parentId": 4
}
```

| Code | Description |
| :--- | :---------- |
| 201  | 'CREATED'   |

Response:

```
No response
```

</details>

## Technical Notes

Regrettably, no actual database was implemented in this project in favor of getting a working MVP out. There is however a basic persistence layer implemented in the form of a JSON file (found in `src/repos/database.json`). This JSON file represents the response from the ORM as it queries the data from the database.

Under different circumstances, I would have probably used some sort of relational database such as PostgreSQL since it's what I'm familiar with. I would probably structure the schema for the node table as such:

| column    | type   |
| --------- | ------ |
| id        | UUID   |
| parent_id | UUID   |
| label     | STRING |
| created   | DATE   |

## Available Scripts

### `npm run clean-install`

Remove the existing `node_modules/` folder, `package-lock.json`, and reinstall all library modules.

### `npm run dev` or `npm run dev:hot` (hot reloading)

Run the server in development mode.<br/>

### `npm test` or `npm run test:hot` (hot reloading)

Run all unit-tests.

### `npm test -- "name of test file" (i.e. users).`

Run a single unit-test.

### `npm run lint`

Check for linting errors.

### `npm run build`

Build the project for production.

### `npm start`

Run the production build (Must be built first).

### `npm run type-check`

Check for typescript errors.

## Additional Notes

- If `npm run dev` gives you issues with bcrypt on MacOS you may need to run: `npm rebuild bcrypt --build-from-source`.
