import readFileSyncJson from "../helpers/readFileSyncJson";

export default class DataFetch {
  async contact() {
    return readFileSyncJson("src/data/data-contact.json");
  }

  async curses() {
    return readFileSyncJson("src/data/data-curses.json");
  }

  async educations() {
    return readFileSyncJson("src/data/data-educations.json");
  }

  async pessoal() {
    return readFileSyncJson("src/data/data-pessoal.json");
  }

  async projects() {
    return readFileSyncJson("src/data/data-projects.json");
  }

  async resumes() {
    return readFileSyncJson("src/data/data-resumes.json");
  }

  async skills() {
    return readFileSyncJson("src/data/data-skills.json");
  }
}
