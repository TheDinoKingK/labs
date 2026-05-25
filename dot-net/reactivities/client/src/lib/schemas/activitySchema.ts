import { z } from 'zod';
import { requiredString } from '../util/util';

export const activitySchema = z.object({
  title: requiredString('Title'),
  description: requiredString('Description'),
  category: requiredString('Category'),
  date: z.coerce.date({
    message: 'Date is required'
  }),
  location: z.object({
    venue: requiredString('venue'),
    city: z.string().optional(),
    latitude: z.coerce.number(),
    longitude: z.coerce.number()
  })
  // addresses will be handled later.
})

export type ActivitySchema = z.infer<typeof activitySchema>;