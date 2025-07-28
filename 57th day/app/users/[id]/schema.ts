
import { z } from 'zod';
import { Schema } from 'zod/v3';
z.object({
name:z.string().min(3),
})
export default Schema