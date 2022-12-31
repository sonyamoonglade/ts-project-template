import { readConfig } from "./config/config"
import { readCmdArgs } from "./config/argv"

const main = async () => {
    const { configPath } = readCmdArgs()
    const config = await readConfig(configPath)
    console.log(config)
}

main()
