import "as-loader/types";
import { instantiate } from "as-loader/runtime";
import * as assemblyModule from "./assembly/add.asc";

async function loadAndRun() {
    const module = await instantiate<typeof assemblyModule>(assemblyModule, fetch);
    const { add } = module.exports;

    const div = document.createElement("div");
    div.innerText = "add(1, 7) = " + add(1, 7);
    document.body.appendChild(div);
}

loadAndRun();
