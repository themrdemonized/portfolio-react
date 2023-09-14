import { createContext, useContext, useReducer, ReactNode, Dispatch, FC, useEffect } from "react"
import common from "@/dictionary/common/common"
import en from "@/dictionary/data/en"
import ru from "@/dictionary/data/ru"

export type Language = "en" | "ru";

type Action = {
  type: "SwitchLanguage" | "SwitchLanguageAndSave",
  language: Language
}

const DictContext = createContext<{
  state: Language
  dispatch: Dispatch<Action>
} | undefined>(undefined);

export const languageKey = 'portfolio-react-language'

const dictReducer = (state: Language, action: Action): Language => {
  switch (action.type) {
    case 'SwitchLanguage':
      return action.language;
    case 'SwitchLanguageAndSave':
      try {
        localStorage.setItem(languageKey, action.language)
      } catch (error) {
        console.error(error)
      }
      return action.language
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
    if (localStorage.getItem(languageKey)) {
      const lang = localStorage.getItem(languageKey) as Language
      const dicts = getDictionaries()
      for (let d of dicts) {
        if (d.name === lang) {
          context.dispatch({
            language: lang,
            type: 'SwitchLanguage'
          })
          return
        }
      }
    }
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

export const getDictionaries = () => {
  return [
    {dict: en, name: "en"},
    {dict: ru, name: "ru"},
  ]
}

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
  return {dict, context, common}
};
