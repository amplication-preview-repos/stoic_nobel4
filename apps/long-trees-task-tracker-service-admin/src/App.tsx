import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { NoteList } from "./note/NoteList";
import { NoteCreate } from "./note/NoteCreate";
import { NoteEdit } from "./note/NoteEdit";
import { NoteShow } from "./note/NoteShow";
import { TaskCategoryList } from "./taskCategory/TaskCategoryList";
import { TaskCategoryCreate } from "./taskCategory/TaskCategoryCreate";
import { TaskCategoryEdit } from "./taskCategory/TaskCategoryEdit";
import { TaskCategoryShow } from "./taskCategory/TaskCategoryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LongTreesTaskTrackerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Note"
          list={NoteList}
          edit={NoteEdit}
          create={NoteCreate}
          show={NoteShow}
        />
        <Resource
          name="TaskCategory"
          list={TaskCategoryList}
          edit={TaskCategoryEdit}
          create={TaskCategoryCreate}
          show={TaskCategoryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
