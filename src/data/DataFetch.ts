export default class DataFetch {
  async contact() {
    return (await import("./data-contact.json")).default;
  }

  async curses() {
    return (await import("./data-curses.json")).default;
  }

  async educations() {
    return (await import("./data-educations.json")).default;
  }

  async pessoal() {
    return (await import("./data-pessoal.json")).default;
  }

  async projects() {
    return (await import("./data-projects.json")).default;
  }

  async resumes() {
    return (await import("./data-resumes.json")).default;
  }

  async skills() {
    return (await import("./data-skills.json")).default;
  }
}
