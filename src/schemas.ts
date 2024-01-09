import { z } from 'zod'
import { INT16_MAX, INT16_MIN, INT32_MAX, INT32_MIN, INT8_MAX, INT8_MIN, UINT16_MAX, UINT32_MAX, UINT8_MAX } from './constants'

export const StringSchema = z.string()
export const StringArraySchema = z.array(StringSchema)
export const BooleanSchema = z.boolean()
export const NumberSchema = z.number()
export const IntegerSchema = NumberSchema.int()
export const NaturalSchema = IntegerSchema.nonnegative()

export const Uint8Schema = NaturalSchema.max(UINT8_MAX)
export const Uint16Schema = NaturalSchema.max(UINT16_MAX)
export const Uint32Schema = NaturalSchema.max(UINT32_MAX)
// export const Uint64Schema = NaturalSchema.max(UINT64_MAX)
export const Int8Schema =  IntegerSchema.min(INT8_MIN).max(INT8_MAX)
export const Int16Schema = IntegerSchema.min(INT16_MIN).max(INT16_MAX)
export const Int32Schema = IntegerSchema.min(INT32_MIN).max(INT32_MAX)
// export const Int64Schema = IntegerSchema.min(INT64_MIN).max(INT64_MAX)

export const BigIntegerSchema = z.bigint()
export const BigNaturalSchema = BigIntegerSchema.positive()


export const StatusInputSchema = z.object({
  status: Uint32Schema.optional(),
  status_a: Uint16Schema.optional(),
  status_b: Uint16Schema.optional() 
})