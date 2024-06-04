export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: {
        id: string
      }
      new: {
        id?: string
      }
      feedback: {
        inDiet: boolean
      }
      meal: {
        id: string
      }
    }
  }
}