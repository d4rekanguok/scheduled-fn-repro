import type { Config } from "@netlify/functions";

const notifyTest = async () => {
    console.log(`started at ${new Date().toISOString()}`);
};

export default notifyTest;

export const config: Config = {
    schedule: "0/5 * * * *",
};
