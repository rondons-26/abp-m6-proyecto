import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
import app from "./src/app.js";

const PORT_MIN = 3000;
const PORT_MAX = 3010;

const argv = yargs(hideBin(process.argv))
  .option("p", {
        alias: "port",
        demandOption: false,
        default: 3000,
        describe: `Puerto de ejecucion [${PORT_MIN} - ${PORT_MAX}]`,
        type: "number",
    })
    .check((argv) => {
        if (!Number.isInteger(argv.port) || argv.port < PORT_MIN || argv.port > PORT_MAX) {
            throw new Error(`El puerto debe ser un entero entre ${PORT_MIN} y ${PORT_MAX}`);
        }
        return true;
    })
.parse();

const PORT = argv.port;

app.listen(PORT, () => {
  console.log(chalk.green.bold(` Servidor ejecutandose exitosamente`));
  console.log(chalk.white(` URL: `) + chalk.cyan.underline(`http://localhost:${PORT}`));
});