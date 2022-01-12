
export const emptyStateAdditionTest = `describe("reducer", () => { 
  it("adds an item to state", () => {
    expect(reducer(initialState, { type: "add" , data: "test 1"})).toStrictEqual(stateWithOneItem);
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

export const findNextIdTests = `describe("findNextId", () => {
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
  
});`;

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
export const reducerAddItemToMatureTest = `describe("reducer", () => {
    it("adds item to mature state", () => {
      expect(reducer(stateWithOneItem, {type: "add" , description: "test 2"}))
        .toStrictEqual(stateWithTwoItems);
    });
  });`;

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

export const deleteTest = `describe("reducer", () => {
    it("deletes an item in state", () => {
      expect(reducer(stateWithTwoItems, {type:"delete" , data: 2 }))
        .toStrictEqual(stateWithOneItem);
    });
  });`;

export const deleteReducerCase = `export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "delete": {
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.data),
        };
      }
      default:
        return state;
    }
  };`;
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

export const userInterface=`import React, { useReducer, useState } from "react";
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

  const editTodo = (item: Item) => {
    const description = prompt("Edit this") ?? item.description;
    dispatch({ type: "edit", data: { ...item, description } });
  };

  return (
    <div className="App">
      <div style={{ margin: "40px" }}>
        <form onSubmit={addTodo}>
          <label>
            To do:
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ marginLeft: "16px", marginRight: "16px" }}
            />
          </label>
          <input type="submit" value="Add item" />
        </form>
      </div>
      {todos.map((item) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "40px",
            paddingLeft: "80px",
            paddingRight: "80px",
            border: "1px solid black",
          }}
        >
          <p>{item.description}</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button onClick={() => editTodo(item)}>edit</button>
            <button
              onClick={() => dispatch({ type: "delete", data: item.id })}
              style={{ marginLeft: "16px" }}
            >
              delete
            </button>
          </div>
        </div>
      ))}
      <button onClick={() => dispatch({ type: "default" })}>Start over</button>
    </div>
  );
}

export default App;`
