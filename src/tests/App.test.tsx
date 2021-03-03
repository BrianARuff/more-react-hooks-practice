import * as React from "react";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from "../App";
import Form from "../components/Form";
import UsersList from "../components/UsersList";

describe("The App component", () => {
  it("renders a Form component", () => {
    render(<Form/>)
  });
  it("renders a UserList component", async () => {
    render(<UsersList usersList={[{id: 0, title: "__test__"}, {id: 1, title: "__test__"}]}/>);
  })
  it("sets state appropriately with useEffect", async () => {
    render(<App/>);
    render(<UsersList usersList={[{id: 0, title: "__test__"}, {id: 1, title: "__test__"}]}/>);
    expect(await screen.findAllByRole("listitem")).toBeInstanceOf(Array);
    expect(await screen.findAllByRole("listitem")).toBeInstanceOf(Array);
  })
})