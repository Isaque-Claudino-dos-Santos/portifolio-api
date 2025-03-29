import { Router } from "express";
import DataFetch from "./data/DataFetch";

const router = Router();
const dataFetch = new DataFetch();

router.get("/contact", async (_, res) => {
  const data = await dataFetch.contact();
  res.json(data);
});

router.get("/curses", async (_, res) => {
  const data = await dataFetch.curses();
  res.json(data);
});

router.get("/educations", async (_, res) => {
  const data = await dataFetch.educations();
  res.json(data);
});

router.get("/pessoal", async (_, res) => {
  const data = await dataFetch.pessoal();
  res.json(data);
});

router.get("/projects", async (_, res) => {
  const data = await dataFetch.projects();
  res.json(data);
});

router.get("/curses", async (_, res) => {
  const data = await dataFetch.resumes();
  res.json(data);
});

router.get("/skills", async (_, res) => {
  const data = await dataFetch.skills();
  res.json(data);
});

router.all("*", async (_, res) => {
  res.json({
    message: "route not found",
  });
});

export default router;
