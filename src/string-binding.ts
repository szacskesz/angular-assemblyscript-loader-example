import "as-loader/types";
import { instantiate } from "as-loader/runtime/bind";
import * as assemblyModule from "./assembly/string-binding.asc";

async function loadAndRun() {
    const module = await instantiate<typeof assemblyModule>(assemblyModule, fetch);
    const { hello } = module.exports;

    const div = document.createElement("div");
    div.innerText = "hello('world') = " + hello('world');
    document.body.appendChild(div);
}

loadAndRun();
