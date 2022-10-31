import "as-loader/types";
import { instantiate } from "as-loader/runtime/bind";
import type * as moduleType from "./assembly/string-binding.asc";
import * as moduleUrl from "!!as-loader?bind=true!./assembly/string-binding.asc";

async function loadAndRun() {
    const module = await instantiate<typeof moduleType>(moduleUrl, fetch);
    const { hello } = module.exports;

    const div = document.createElement("div");
    div.innerText = "hello('world') = " + hello('world');
    document.body.appendChild(div);
}

loadAndRun();
