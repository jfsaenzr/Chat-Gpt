//import { WebWorkerMLCEngineHandler } from "https://esm.run/@mlc-ai/web-llm"
import { WebWorkerMLCEngineHandler } from "https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.78/+esm"

const handler = new WebWorkerMLCEngineHandler()

self.onmessage = (msg) => {
  handler.onmessage(msg)
}
