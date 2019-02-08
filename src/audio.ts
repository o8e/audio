import { last } from 'lodash'
import * as util from 'util'
import * as fs from 'fs'

const readdir = util.promisify(fs.readdir)

export const extractApply = async (path: string) => {
  const files = await readdir(path)
  for (const file of files) {
    const isMP3 = last(file.split('.')) === 'mp3'
    console.log(isMP3, file)
  }
}
