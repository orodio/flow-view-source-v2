import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"

window.fcl = fcl
window.t = t

// prettier-ignore
fcl.config()
  .put("accessNode.api", process.env.REACT_APP_ACCESS_NODE)
  .put("challenge.handshake", process.env.REACT_APP_DISCOVERY)
