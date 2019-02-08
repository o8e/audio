// @ts-ignore
import id3 from 'node-id3'
import { last } from 'lodash'
import * as util from 'util'
import * as fs from 'fs'

const readdir = util.promisify(fs.readdir)

export const format = async (path: string) => {
  const files = await readdir(path)
  for (const file of files) {
    if (isMP3(file)) {
      const [artist, title] = file.split(' - ')
      const tags = { title, artist }
      return id3.write(tags, `${path}/${file}`)
    }
  }
}

const isMP3 = (filename: string) => last(filename.split('.')) === 'mp3'
