import path from 'node:path'
import { NMEAParser } from '@coremarine/nmea-parser'


export class NorsubParser extends NMEAParser {

  constructor(memory: boolean = true) {
    
    super(memory)
    const NORSUB_FILE = path.join(__dirname, 'norsub.yaml')
    this.addProtocols({ file: NORSUB_FILE })
  }
}