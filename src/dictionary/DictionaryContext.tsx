import { createContext, useContext, useReducer, ReactNode, Dispatch, FC, useEffect } from "react"
import { useRouter } from 'next/router'
import en from "@/dictionary/data/en"
import ru from "@/dictionary/data/ru"

export type Language = "en" | "ru";

type Action = {
  type: "SwitchLanguage",
  language: Language
}

const DictContext = createContext<{
  state: Language
  dispatch: Dispatch<Action>
} | undefined>(undefined);

const dictReducer = (state: Language, action: Action): Language => {
  switch (action.type) {
    case 'SwitchLanguage':
      return action.language;
    default:
      return state;
  }
};

type DictProviderProps = {
  children: ReactNode
};

function DictSwitcherOnMount() {
	let {context} = useDict()

	useEffect(() => {
		let lang: Language;
		const locale = window.navigator.language
		if (locale.includes('ru')) {
			lang = 'ru'
		} else {
			lang = 'en'
		}
		context.dispatch({
			language: lang,
			type: 'SwitchLanguage'
		})
  // eslint-disable-next-line react-hooks/exhaustive-deps 
	}, [])

  return <></>
}

export const DictProvider: FC<DictProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(dictReducer, "en");

  return (
    <DictContext.Provider value={{ state, dispatch }}>
      <DictSwitcherOnMount />
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
