import { RootNavigation } from "../utils/RootNavigation"


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNavigation { }
  }
}