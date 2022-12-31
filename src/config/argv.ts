
export type CommandArguments = {
    configPath: string
}

export const readCmdArgs = (): CommandArguments => {
    const argv = process.argv
    const configPath = argv[2]
    return {
        configPath
    }
}
