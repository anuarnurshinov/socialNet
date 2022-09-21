import * as React from "react"

export const EmptyHOC = (Child: React.ComponentType<any | string>) => {
  return ({ ...props }) => {
    return <Child {...props} />
  }
}
