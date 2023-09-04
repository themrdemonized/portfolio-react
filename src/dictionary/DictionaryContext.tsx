import { createContext, useContext, useReducer, ReactNode, Dispatch, FC } from "react"
import en from "@/dictionary/data/en"
import ru from "@/dictionary/data/ru"

// Define the initial state and action types
type State = "en" | "ru";

type Action = {
  type: "SwitchLanguage",
  language: State
}

// Create the context
const DictContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
} | undefined>(undefined);

// Create the reducer function
const dictReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SwitchLanguage':
      return action.language;
    default:
      return state;
  }
};

// Create a context provider component
type DictProviderProps = {
  children: ReactNode;
};

export const DictProvider: FC<DictProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(dictReducer, "en");

  return (
    <DictContext.Provider value={{ state, dispatch }}>
      {children}
    </DictContext.Provider>
  );
};

// Custom hook to easily access the context
export const useDict = () => {
  const context = useContext(DictContext);
  if (context === undefined) {
    throw new Error('useDict must be used within a DictProvider');
  }
  let dict
  switch (context.state) {
    case "en":
      dict = en
      break
    case "ru":
      dict = ru
      break
    default:
      dict = en
      break
  }
  return {dict, context}
};
