import { z } from 'zod'
import { Uint16Schema, Uint32Schema } from '@coremarine/nmea-parser/lib/schemas'

// STATUS
export const StatusInputSchema = z.object({
  status: Uint32Schema.optional(),
  status_a: Uint16Schema.optional(),
  status_b: Uint16Schema.optional() 
})
