// in src/App.js
import * as React from "react";
import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, ListGuesser } from "react-admin";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;
