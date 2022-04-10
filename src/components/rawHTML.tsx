export const emptyStateAdditionTest = `describe("reducer", () => {
  it("returns initial state", () => {
    expect(reducer(initialState, { type: "default" })).toStrictEqual(initialState);
  });
  it("adds an item to state", () => {
    expect(reducer(initialState, { type: "add" , data: "test description 1"})).toStrictEqual(stateWithOneItem);
  });
});
`;

export const findNextIdFunction = `const findNextId = (todos: Item[]): number => {
  if (todos.length === 0) {
    return 1;
  } else {
    const allIds = todos.map((t) => t.id);
    return Math.max(...allIds) + 1;
  }
};`;

export const findNextIdTests = `
import { findNextId, initialState, reducer } from './reducer';
import {
    stateWithOneItem,
    stateWithTwoItems,
    stateWithThreeItems,
  } from "./mock";


describe("findNextId", () => {
  it("returns 1 on empty state", () => {
    expect(findNextId(initialState.todos)).toBe(1);
  });
  it("returns 2 with state of one item", () => {
    expect(findNextId(stateWithOneItem.todos)).toBe(2);
  });
  it("returns 3 on empty state", () => {
    expect(findNextId(stateWithTwoItems.todos)).toBe(3);
  });
  it("returns 4 on empty state", () => {
    expect(findNextId(stateWithThreeItems.todos)).toBe(4);
  });
});

`;

export const reducerAddCase = `export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "add": {
        if (action.data.length === 0) {
          return state;
        }
        return {
          ...state,
          todos: [
            ...state.todos,
            { id: findNextId(state.todos), description: action.data },
          ],
        };
      }
      default:
        return state;
    }
  };`;
export const reducerAddItemToMatureTest = `
it("adds item to mature state", () => {
  expect(reducer(stateWithOneItem, {type: "add" ,data: "test description 2"}))
    .toStrictEqual(stateWithTwoItems);
});
`;

export const editTest = `describe("reducer", () => {
    it("edits an item in state", () => {
      expect(
        reducer(stateWithOneItem , {
          type: "edit",
          data: {
            id: 1,
            description: "updated",
          },
        }),
      ).toStrictEqual({ todos: [{ id: 1, description: "updated" }] });
    });`;
export const reducerEditCase = `export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "edit": {
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id === action.data.id) {
              return {
                ...todo,
                description: action.data.description,
              };
            }
            return todo;
          }),
        };
      }
      default:
        return state;
    }
  };`;

export const deleteTest = `
    it("deletes an item in state", () => {
      expect(reducer(stateWithTwoItems, {type:"delete" , data: 2 }))
        .toStrictEqual(stateWithOneItem);
    });
`;

export const deleteReducerCase = `
      case "delete": {
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.data),
        };
`;
export const createReactApp = `npx create-react-app my-app --template typescript`;

export const useReducerExample = `const initalState = { count: 0 }

function reducer( state, action){
   switch (action.type){
      case 'increment':
        return {count: state.count +1}
      default: return state
    }
}

function Counter() {
   const [ state, dispatch ] = useReducer(reducer , initialState) 
   return (
      Count: {state.count}
      <button onClick={()=> dispatch({type: increment})> + </button>
  );
}`;

export const userInterface = `import React, { useReducer, useState } from "react";
import "./App.css";
import { initialState, reducer } from "./reducer";
import { Item } from "./types";

function App() {
  const [{ todos }, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "add", data: input });
    setInput("");
  };

  const starOverHandler = () => dispatch({ type: "default" })
  const deleteHandler = (id:number)=> dispatch({ type: "delete", data: id })

  return (
    <div className="App">
    <div style={{ margin: "40px" }}>
      <div style={{margin:"100px auto",}}>
        <h2>
          A Simple Todo app created via Test Driven Development
        </h2>
      </div>
      <form data-testid="submitForm" onSubmit={addTodo} method="post">
        <label>
          Enter your Todos
          <input
            type="text"
            data-testid="EntryField"
            placeholder="Enter Your Todo Here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ marginLeft: "16px", marginRight: "16px" }}
          />
        </label>
        <input type="submit"  value="Add item" data-testid="AddItem" />
      </form>
    </div>
    <Todos todos={todos} deleteHandler={deleteHandler} />
    <button onClick={starOverHandler}>Start over</button>

  </div>
);
}

export default App;`;

export const cleanUpFunction = `
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});


`;

export const headingsTesting = `
test("UI testing, checking if headings appear in our app", () => {
  render(<App />);
  expect(screen.getByText("Enter your Todos")).toBeInTheDocument();
  expect(screen.getByText("A Simple Todo app created via Test Driven Development")).toBeInTheDocument();
});
`;

export const StartOverPresence = `
test("UI testing ie checking if the reset or start over button exists in our app", () => {
  render(<App />);
  const StartOver = screen.getByText("Start over");
  expect(StartOver).toBeInTheDocument();
});

`;

export const startOverHandler = `
test("testing to see if clicking the start over button triggers the startOverhandler function", () => {
  // Render new instance in every test to prevent leaking state
  const starOverHandler = jest.fn();
  render(<button onClick={starOverHandler}>Start over</button>);
  fireEvent.click(screen.getByText(/Start over/i));
  expect(starOverHandler).toHaveBeenCalled();
});

`;
export const AddItem = `
test("UI testing ie checking if the Add todos submit input exists in our app", () => {
  render(<App />);
  const AddItem = screen.getByText("Add item");
  expect(AddItem).toBeInTheDocument();
});

`;
export const AddItemAttribute = `
test("testing UI of the App, submit input field", () => {
  render(<App />);
  const AddItem = screen.getByTestId("AddItem");
  expect(AddItem).toHaveAttribute("value", "Add item");
  expect(AddItem).toHaveAttribute("type", "submit");
});

`;
export const entryField = `
test("UI testing ie checking if an input field with type text and a certain placeholder exists in our app", () => {
  render(<App />);
  const EntryField = screen.getByTestId("EntryField");
  expect(EntryField).toBeInTheDocument();
  expect(EntryField).toHaveAttribute("type", "text");
  expect(EntryField).toHaveAttribute("placeholder", "Enter Your Todo Here");
});

`;
export const entryFieldValue = `
test("checks whether the entry field is change its value as entered by user", () => {
  const { getByTestId } = render(<App />);
  const input: any = getByTestId("EntryField");
  fireEvent.change(input, { target: { value: "testValue" } });
  expect(input.value).toBe("testValue");
});

`;

export const submitForm = `
test("UI testing ie checking if a submission form for our todo exists with the method of post in our app", () => {
  render(<App />);
  const submitForm = screen.getByTestId("submitForm");
  expect(submitForm).toBeInTheDocument();
  expect(submitForm).toHaveAttribute("method", "post");
});

`;

export const componentTesting = `
test("renders a name", () => {
  const todos = [
    {
      id: 1,
      description: "test",
    },
  ];
  render(<Todos todos={todos} />);
  const itemsList = screen.getAllByRole("article");
  expect(itemsList[0]).toHaveTextContent(todos[0].description);
  expect(itemsList[0]).toHaveStyle({
    color: "red",
  });
});

`;
export const deleteButton = `
test("UI testing ie checking if the delete button exists in our app", () => {
  const todos = [
    {
      id: 1,
      description: "test",
    },
  ];
  render(<Todos todos={todos} />);
  const deleteButton = screen.getByTestId("deleteButton");
  expect(deleteButton).toBeInTheDocument();
});

`;

export const deleteButtonHandler = `
test("Checking to see if the delete button fires the deleteHandler when clicked", () => {
  const todos = [
    {
      id: 1,
      description: "test",
    },
  ];
  const deleteHandler = jest.fn();
  render(<Todos deleteHandler={deleteHandler} todos={todos} />);
  const buttonElement = screen.getByText("delete");
  fireEvent.click(buttonElement);
  expect(deleteHandler).toHaveBeenCalledTimes(1);
});

`;

export const reactTestRenderer = `
npm i react-test-renderer
npm i --save-dev @types/react-test-renderer

`;

export const AppSnapshot = `
test("Creating a snapshot tree of the App component", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

`;

export const TodosSnapshot = `
test("Creating a snapshot tree of the Todo component", () => {
  const tree = renderer.create(<Todos />).toJSON();
  expect(tree).toMatchSnapshot();
});

`;

export const TodosComponent = `
const Todos = ({todos,deleteHandler}:any) => {
  return (
      <>
    {todos && todos.map((item:any) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "40px",
            paddingLeft: "80px",
            paddingRight: "80px",
            border: "1px solid black",
          }}
        >
          <p role="article" style={{color: 'red'}}>{item.description}</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            
            <button
              data-testid="deleteButton"
              onClick={()=>deleteHandler(item.id)}
              style={{ marginLeft: "16px" }}
            >
              delete
            </button>
          </div>
        </div>
      ))}
       

      </>
  )
}

export default Todos
`;
export const reducerWholeFile = `
import { Action, Item, State } from "./types";

export const initialState: State = {
  todos: [],
};

export const findNextId = (todos: Item[]): number => {
  if (todos.length === 0) {
    return 1;
  } else {
    const allIds = todos.map((t) => t.id);
    return Math.max(...allIds) + 1;
  }
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add": {
      if (action.data.length === 0) {
        return state;
      }
      return {
        ...state,
        todos: [...state.todos, { id: findNextId(state.todos), description: action.data }],
      };
    }
    case "edit": {
      const { id, description } = action.data;
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === id) {
            return {
              ...t,
              description,
            };
          }
          return t;
        }),
      };
    }
    case "delete": {
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.data),
      };
    }
    case "default": {
      return initialState;
    }
    default:
      return state;
  }
};

`;

export const reducerTests = `
import { findNextId, initialState, reducer } from "./reducer";
import { stateWithOneItem, stateWithTwoItems, stateWithThreeItems } from "./mock";

describe("findNextId", () => {
  it("returns 1 on empty state", () => {
    expect(findNextId(initialState.todos)).toBe(1);
  });
  it("returns 2 with state of one item", () => {
    expect(findNextId(stateWithOneItem.todos)).toBe(2);
  });
  it("returns 3 on empty state", () => {
    expect(findNextId(stateWithTwoItems.todos)).toBe(3);
  });
  it("returns 4 on empty state", () => {
    expect(findNextId(stateWithThreeItems.todos)).toBe(4);
  });
});

describe("reducer", () => {
  it("returns initial state", () => {
    expect(reducer(initialState, { type: "default" })).toStrictEqual(initialState);
  });
  it("adds an item to state", () => {
    expect(reducer(initialState, { type: "add", data: "test description 1" })).toStrictEqual(
      stateWithOneItem,
    );
  });
  it("adds item to mature state", () => {
    expect(reducer(stateWithOneItem, { type: "add", data: "test description 2" })).toStrictEqual(
      stateWithTwoItems,
    );
  });
  it("deletes an item in state", () => {
    expect(reducer(stateWithTwoItems, { type: "delete", data: 2 })).toStrictEqual(stateWithOneItem);
  });
});

`;
export const describeFunction = `
describe("Front End Testing ", () => {

  });
`;


export const AppTestTsx=`
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";
import Todos from "./Todos";

describe("Front End Testing ", () => {
  test("UI testing, checking if headings appear in our app", () => {
    render(<App />);
    expect(screen.getByText("Enter your Todos")).toBeInTheDocument();
    expect(
      screen.getByText("A Simple Todo app created via Test Driven Development"),
    ).toBeInTheDocument();
  });

  test("UI testing ie checking if the reset or start over button exists in our app", () => {
    render(<App />);
    const StartOver = screen.getByText("Start over");
    expect(StartOver).toBeInTheDocument();
  });

  test("testing to see if clicking the start over button triggers the startOverhandler function", () => {
    const starOverHandler = jest.fn();
    render(<button onClick={starOverHandler}>Start over</button>);
    fireEvent.click(screen.getByText(/Start over/i));
    expect(starOverHandler).toHaveBeenCalled();
  });

  test("UI testing ie checking if the Add todos submit input exists in our app", () => {
    render(<App />);
    const AddItem = screen.getByText("Add item");
    expect(AddItem).toBeInTheDocument();
  });

  test("testing UI of the App, submit input field", () => {
    render(<App />);
    const AddItem = screen.getByTestId("AddItem");
    expect(AddItem).toHaveAttribute("value", "Add item");
    expect(AddItem).toHaveAttribute("type", "submit");
  });

  test("UI testing ie checking if an input field with type text and a certain placeholder exists in our app", () => {
    render(<App />);
    const EntryField = screen.getByTestId("EntryField");
    expect(EntryField).toBeInTheDocument();
    expect(EntryField).toHaveAttribute("type", "text");
    expect(EntryField).toHaveAttribute("placeholder", "Enter Your Todo Here");
  });

  test("checks whether the entry field is change its value as entered by user", () => {
    const { getByTestId } = render(<App />);
    const input: any = getByTestId("EntryField");
    fireEvent.change(input, { target: { value: "testValue" } });
    expect(input.value).toBe("testValue");
  });

  test("UI testing ie checking if a submission form for our todo exists with the method of post in our app", () => {
    render(<App />);
    const submitForm = screen.getByTestId("submitForm");
    expect(submitForm).toBeInTheDocument();
    expect(submitForm).toHaveAttribute("method", "post");
  });

  test("renders a name", () => {
    const todos = [{id: 1, description: "test",}];
    render(<Todos todos={todos} />);
    const itemsList = screen.getAllByRole("article");
    expect(itemsList[0]).toHaveTextContent(todos[0].description);
    expect(itemsList[0]).toHaveStyle({
      color: "red",
    });
  });

  test("UI testing ie checking if the delete button exists in our app", () => {
    const todos = [{id: 1, description: "test",}];
    render(<Todos todos={todos} />);
    const deleteButton = screen.getByTestId("deleteButton");
    expect(deleteButton).toBeInTheDocument();
  });

  test("Checking to see if the delete button fires the deleteHandler when clicked", () => {
    const todos = [{id: 1, description: "test",}];
    const deleteHandler = jest.fn();
    render(<Todos deleteHandler={deleteHandler} todos={todos} />);
    const buttonElement = screen.getByText("delete");
    fireEvent.click(buttonElement);
    expect(deleteHandler).toHaveBeenCalledTimes(1);
  });

  test("Creating a snapshot tree of the App component", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Creating a snapshot tree of the Todo component", () => {
    const tree = renderer.create(<Todos />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
`

export const runCommand=`
npm test App.test
`
