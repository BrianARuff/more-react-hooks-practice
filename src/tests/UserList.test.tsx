import * as React from "react";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import UsersList from "../components/UsersList";

describe("The UserList component", () => {
  it("renders the UserList list-items appropriately", async () => {
    render(<UsersList usersList={[{id: 0, title: "asdf"}, {id: 1, title: "zxcv"}]}/>);
    const ul = await screen.getByRole("list");
    expect(ul.childElementCount > 0).toBe(true);
  })
})