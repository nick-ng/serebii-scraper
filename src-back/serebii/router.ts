import { Router } from "express";

import { generations } from "./index.js";
import { listPokemon } from "./list-pokemon.js";

const router = Router();

router.get("/", async (_req, res) => {
  res.json(await listPokemon(generations.ix.basePath));
});

export default router;
