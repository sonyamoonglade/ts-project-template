import fs from "fs/promises";
import yaml from 'js-yaml'

export type AppConfig = {
    app: {}
}

export const readConfig = async (path: string): Promise<AppConfig> => {
    try {
        const buff = await fs.readFile(path, {encoding: "utf-8"})
        const doc = yaml.load(buff) as any
        const cfg: AppConfig = {
            app: {
                // use doc?.param here
            }
        }
        validateUndefined(cfg)
        return cfg
    } catch (err: any) {
        throw new Error(`read config error: ${err}`)
    }
}

const validateUndefined = (object: any, parent?: string): void => {
    const keys = Object.keys(object)
    for (const key of keys) {
        if (typeof object[key] === "object") {
            validateUndefined(object[key], key)
        }
        if (object[key] === undefined) {
            const msg = `validation error: field ${parent}.${key} is undefined`
            throw new Error(msg)
        }
    }
}
