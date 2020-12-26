import * as fcl from "@onflow/fcl"
import {atomFamily, selectorFamily, useRecoilState} from "recoil"
import {IDLE, PROCESSING} from "../global/constants"

function fetchAccount(address) {
  if (address == null) return Promise.resolve(null)
  return fcl.account(address)
}

const $state = atomFamily({
  key: "account",
  default: selectorFamily({
    key: "account:default",
    get: address => async () => fetchAccount(address),
  }),
})

const $status = atomFamily({
  key: "account:status",
  default: IDLE,
})

export function useAccount(address) {
  const [account, setAccount] = useRecoilState($state(address))
  const [status, setStatus] = useRecoilState($status(address))

  return {
    ...account,
    status,
    async refetch() {
      setStatus(PROCESSING)
      await fetchAccount(address).then(setStatus)
      setStatus(IDLE)
    },
  }
}
