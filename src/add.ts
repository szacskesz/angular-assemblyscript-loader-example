import "as-loader/types";
import { instantiate } from "as-loader/runtime";
import * as moduleUrl from "!!as-loader!./assembly/add.asc";
import type * as moduleType from "./assembly/add.asc";

async function loadAndRun() {
  const module = await instantiate<typeof moduleType>(moduleUrl, fetch);
  const { add } = module.exports;

  const div = document.createElement("div");
  div.innerText = "add(1, 7) = " + add(1, 7);
  document.body.appendChild(div);
}

loadAndRun();
