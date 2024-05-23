import { generateService } from "@umijs/openapi"

const basicConfig = {
  serversPath: "./src/api",
  dataFields: ["data"]
}
const importList = [
  {
    // 接口目标路径
    schemaPath: "http://8.134.138.124:3000/api-json",
    // 生成文件夹名称
    projectName: "main",
    requestLibPath: "import {request} from '@/utils/service'"
  }
]
// 接口生成函数
function openapiGenerate() {
  for (const item of importList) {
    generateService({
      ...basicConfig,
      ...item
    })
  }
}
openapiGenerate()
