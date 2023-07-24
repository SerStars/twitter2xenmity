import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { create } from 'enmity/patcher';
import { get, set } from 'enmity/api/settings';
import manifest from '../manifest.json';
import { title } from 'process';
import { FormRow, FormSection, FormSwitch } from "enmity/components";
import { Messages, React, Toasts } from "enmity/metro/common";

const Patcher = create('Twitter2FxTwitter');
const Twitter2FxTwitter: Plugin = {
   ...manifest,
  
   onStart() {      
      Patcher.before(Messages, "sendMessage", (self, args, orig) => {
         const content = args[1]["content"];
         if(!content.includes("twitter.com/")) return
        args[1]["content"] = content.replace("twitter.com/", "x.com/")
      })},

   onStop() {
      Patcher.unpatchAll();
   },
};
registerPlugin(Twitter2FxTwitter);
