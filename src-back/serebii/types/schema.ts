import z from "zod";

export const pokemonSchema = z.object({
  name: z.string(),
  display: z.record(z.string(), z.string()),
  types: z.array(z.string()),
  eggGroups: z.array(z.string()),
  effortValueYield: z.record(z.string(), z.string()),
});
