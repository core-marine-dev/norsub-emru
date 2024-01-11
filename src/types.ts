import { z } from 'zod'
import { Data, FieldParsed, NMEASentence } from '@coremarine/nmea-parser/lib/types'
import { Int16Schema, Int32Schema, Int8Schema, IntegerSchema, Uint16Schema, Uint32Schema, Uint8Schema } from '@coremarine/nmea-parser/lib/schemas'
import { StatusInputSchema } from './schemas'

// NUMBERS
export type Integer = z.infer<typeof IntegerSchema>
export type Int8 = z.infer<typeof Int8Schema>
export type Int16 = z.infer<typeof Int16Schema>
export type Int32 = z.infer<typeof Int32Schema>
// export type Int64 = z.infer<typeof Int64Schema>
export type Natural = z.infer<typeof IntegerSchema>
export type Uint8 = z.infer<typeof Uint8Schema>
export type Uint16 = z.infer<typeof Uint16Schema>
export type Uint32 = z.infer<typeof Uint32Schema>
// export type Uint64 = z.infer<typeof Uint64Schema>
// STATUS
export type StatusInput = z.infer<typeof StatusInputSchema>
/** STATUS
 * Bit - Parameter            - Description
 *  00 - MAIN_OK              - 1 = no errors or warnings, initialization done. Everything OK.
 *  01 - MAIN_HEALTH          - 1 = no serious errors in sensor, algorithm or system.
 *  02 - SYSTEM_OK            - 1 = system operates normally.
 *  03 - SYSTEM_HEALTH        - 0 = system error. Restart required.
 *  04 - SYSTEM_TIME_SYNC     - 1 = time synchronized.
 *  05 - SYSTEM_CLOCK_SYNC    - 1 = clock synchronized.
 *  06 - SYSTEM_CPU_OK        - 1 = CPU load and memory are OK.
 *  07 - SENSOR_OK            - 1 = IMU is OK.
 *  08 - SENSOR_HEALTH        - 0 = IMU is malfunctioning or broken. Repair or replace MRU.
 *  09 - SENSOR_LIMITS        - 0 = IMU sensors are saturated.
 *  10 - ENV_VIBRATION        - 1 = environmental vibration levels are OK.
 *  11 - ENV_TEMPERATRURE     - 1 = environmental temperature is OK.
 *  12 - ALG_OK               - 1 = MRU algorithms are OK.
 *  13 - ALG_HEALTH           - 0 = MRU algorithms are unstable. Restart recommended.
 *  14 - ALG_OBS_INIT         - 1 = initialization of observer.
 *  15 - ALG_HEADING_INIT     - 1 = Initialization of heading.
 *  16 - ALG_ROLLP_OK         - 1 = roll/pitch are OK.
 *  17 - ALG_ROLLP_HEALTH     - 0 = roll/pitch are saturated/unstable. Restart recommended.
 *  18 - ALG_HEAD_OK          - 1 = heading is OK.
 *  19 - ALG_HEAD_HEALTH      - 0 = heading is saturated/unstable. Restart recommended.
 *  20 - ALG_SURGES_OK        - 1 = surge/sway are OK.
 *  21 - ALG_SURGES_HEALTH    - 0 = surge/sway saturated/unstable. Restart recommended.
 *  22 - ALG_HEAVE_OK         - 1 = heave is OK.
 *  23 - ALG_HEAVE_HEALTH     - 0 = heave is saturated or unstable. Restart recommended.
 *  24 - AID_POS_RECEIVED     - 1 = external position aiding is received.
 *  25 - AID_VEL_RECEIVED     - 1 = external velocity aiding is received.
 *  26 - AID_HEAD_RECEIVED    - 1 = external heading aiding is received.
 *  27 - AID_POS_VALID        - 1 = position aiding is valid and used in the observer.
 *  28 - AID_VEL_VALID        - 1 = velocity aiding is valid and used in the observer.
 *  29 - AID_HEAD_VALID       - 1 = heading aiding is valid and used in the observer.
 *  30 - AID_VERTICAL_VALID   - 1 = vertical position is valid and used in the observer.
 *  31 - AID_HORIZONTAL_VALID - 1 = horizontal position is valid and used in the observer.
**/
export type Status = {
  main: {
    ok: boolean,
    health: boolean,
  },
  system: {
    ok: boolean,
    health: boolean,
    synchronized: {
      time: boolean,
      clock: boolean,
    },
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

// export type NorsubFieldType = FieldType | 'object'

export type NorsubFieldData = Data | Status

export type NorsubField = FieldParsed & {
  // name: string,
  // type: NorsubFieldType,
  // data: NorsubFieldData,
  metadata?: object,
  // units?: string,
  // note?: string
}

export type NMEAWithoutFieldsData = Omit<NMEASentence, 'fields' | 'data'>

export type NorsubSentence = NMEAWithoutFieldsData & {
  // sentence: string,
  // timestamp: Natural,
  // checksum: Natural,
  // protocol: {
    // name: string,
    // standard?: boolean,
    // version?: string,
  // },
  fields: NorsubField[],
  data: NorsubFieldData[],
}