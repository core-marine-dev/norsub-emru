import { z } from 'zod'
import { Int16Schema, Int32Schema, Int8Schema, IntegerSchema, NumberSchema, StatusInputSchema, Uint16Schema, Uint32Schema, Uint8Schema } from './schemas'

// NUMBERS
export type Integer = z.infer<typeof NumberSchema>
export type Natural = z.infer<typeof IntegerSchema>

export type Uint8 = z.infer<typeof Uint8Schema>
export type Uint16 = z.infer<typeof Uint16Schema>
export type Uint32 = z.infer<typeof Uint32Schema>
// export type Uint64 = z.infer<typeof Uint64Schema>
export type Int8 = z.infer<typeof Int8Schema>
export type Int16 = z.infer<typeof Int16Schema>
export type Int32 = z.infer<typeof Int32Schema>
// export type Int64 = z.infer<typeof Int64Schema>

// STATUS
export type StatusInput = z.infer<typeof StatusInputSchema>

export type Status = {
  main: {
    ok: boolean,
    health: boolean,
  },
  health: {
    ok: boolean,
    health: boolean,
    synchronized_time: boolean,
    synchronized_clock: boolean,
    cpu: boolean,
  },
  sensor: {
    ok: boolean,
    health: boolean,
    limits: boolean,
    environmental: {
      vibration: boolean,
      temperature: boolean,
    }
  },
  algorithms: {
    ok: boolean,
    health: boolean,
    initialization: {
      observer: boolean,
      heading: boolean
    },
    roll_pitch: {
      ok: boolean,
      health: boolean,
    },
    heading: {
      ok: boolean,
      health: boolean,
    },
    surge_sway: {
      ok: boolean,
      health: boolean,
    },
    heave: {
      ok: boolean,
      health: boolean,
    },
  },
  aiding: {
    received: {
      position: boolean,
      velocity: boolean,
      heading: boolean,
    },
    valid: {
      position: boolean,
      velocity: boolean,
      heading: boolean,
      vertical: boolean,
      horizontal: boolean,
    }
  }
}