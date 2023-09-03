import React, { createContext, useContext } from "react"
import en from "@/dictionary/data/en"
import ru from "@/dictionary/data/ru"

export type Languages = {
  language: "en" | "ru"
  switchLanguage
}
