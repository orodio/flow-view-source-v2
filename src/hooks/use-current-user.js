import {useEffect} from "react"
import {atom, useSetRecoilState, useRecoilValue} from "recoil"
import * as fcl from "@onflow/fcl"

const $state = atom({
  key: "CURRENT_USER",
  default: {addr: null, loggedIn: null, cid: null},
})

export function SubCurrentUser() {
  const setCurrentUser = useSetRecoilState($state)
  useEffect(() => fcl.currentUser().subscribe(setCurrentUser), [setCurrentUser])
  return null
}

export function useCurrentUser() {
  var user = useRecoilValue($state)

  return {
    ...user,
    login: fcl.authenticate,
    logout: fcl.unauthenticate,
  }
}
