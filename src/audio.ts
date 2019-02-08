import * as util from 'util'
import * as fs from 'fs'

const readdir = util.promisify(fs.readdir)

export const extractApply = async (path: string) => {
  const files = await readdir(path)
  for (const file of files) {
    console.log(file)
  }
}
