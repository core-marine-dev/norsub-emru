import { describe, test, expect } from 'vitest'

import { NorsubParser } from '../src'

const PROTOCOLS = ['NMEA', 'GYROCOMPAS1', 'NORSUB', 'NORSUB2', 'NORSUB6', 'NORSUB7', 'NORSUB7b', 'NORSUB8', 'NORSUB PRDID', 'Tokimek PTVG', 'RDI ADCP', 'SMCA', 'SMCC']

describe('Parser', () => {

  test('Default constructor', () => {
    const parser = new NorsubParser()
    expect(parser.memory).toBeTruthy()
    const parserProtocols = parser.getProtocols()
    parserProtocols.forEach(({ protocol }) => {
      expect(PROTOCOLS.includes(protocol)).toBeTruthy()
    })
  })
})