#! /usr/bin/env node
import kleur from 'kleur';
import { menu } from './menu';

menu()
  .then(() => {
    console.log(kleur.grey('Exiting gcull'));
    process.exit(1);
  })
  .catch((e: Error) => {
    if (e.message === 'SIGINT') {
      console.log(kleur.red('Exiting gcull'));
    }
    process.exit(1);
  });
